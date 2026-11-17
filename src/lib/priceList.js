// Bazna cijena + javni cjenik (Pravilnik o isticanju bazne cijene i Pravilnik o načinu objave cjenika, NN 132/2026).
// Namjerno bez importa iz Vitea (import.meta.env) da ga može koristiti i Node skripta scripts/sync-njuskalo.mjs.

export const SELLER_OIB = '53351614019' // MIX AUTO j.d.o.o.
const SALE_POINT = 'auto-salon_j-j-strossmayera-131-31000-osijek_1'
export const PRICE_LIST_BUCKET = 'car-images'
export const PRICE_LIST_FOLDER = 'cjenici'
const ARCHIVE_DAYS = 15

const BASE_REFERENCE_DATE = '2026-09-10'

/** Bazna cijena auta: { price, date } — pada na cijenu i datum uvrštenja ako polja još nisu popunjena. */
export function getBasePrice(car) {
  if (car.base_price_date) return { price: car.base_price ?? car.price, date: car.base_price_date }
  const added = car.created_at ? toZagrebDate(new Date(car.created_at)) : BASE_REFERENCE_DATE
  return { price: car.base_price ?? car.price, date: added > BASE_REFERENCE_DATE ? added : BASE_REFERENCE_DATE }
}

/** "2026-09-10" -> "10. 9. 2026." */
export function formatHrDate(isoDate) {
  const [y, m, d] = isoDate.slice(0, 10).split('-').map(Number)
  return `${d}. ${m}. ${y}.`
}

/** Današnji datum u Hrvatskoj, "YYYY-MM-DD". */
export function toZagrebDate(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Zagreb' }).format(date)
}

function zagrebStamp(date = new Date()) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Zagreb', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hour12: false,
    }).formatToParts(date).map((x) => [x.type, x.value])
  )
  return `${p.year}${p.month}${p.day}_${p.hour}${p.minute}`
}

const money = (n) => Number(n).toFixed(2).replace('.', ',')
const csvCell = (v) => {
  const s = String(v ?? '')
  return /[;"\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

/** Cjenik robe u propisanom redoslijedu stupaca, UTF-8, odvojen točkom-zarezom. */
export function buildPriceListCsv(cars) {
  const header = [
    'naziv_robe', 'sifra_robe', 'marka_robe', 'neto_kolicina', 'jedinica_mjere',
    'maloprodajna_cijena', 'poseban_oblik_prodaje', 'cijena_za_jedinicu_mjere',
    'barkod', 'ean_barkod', 'bazna_cijena', 'datum_bazne_cijene',
  ]
  const rows = [...cars]
    .sort((a, b) => a.id - b.id)
    .map((car) => {
      const base = getBasePrice(car)
      return [
        car.name, car.id, car.manufacturer, '', 'kom',
        money(car.price), 'NE', '', '', '', money(base.price), formatHrDate(base.date),
      ]
    })
  return [header, ...rows].map((r) => r.map(csvCell).join(';')).join('\r\n') + '\r\n'
}

/** Datoteke cjenika iz storagea, od najnovije prema najstarijoj, s javnim URL-om i vremenom objave. */
export async function listPriceLists(supabase) {
  const { data, error } = await supabase.storage
    .from(PRICE_LIST_BUCKET)
    .list(PRICE_LIST_FOLDER, { limit: 1000, sortBy: { column: 'name', order: 'desc' } })
  if (error) throw error
  return (data || [])
    .filter((f) => f.name.startsWith(SELLER_OIB) && f.name.endsWith('.csv'))
    .map((f) => {
      const m = f.name.match(/_(\d{8})_(\d{4})\.csv$/)
      return {
        name: f.name,
        stamp: m ? `${m[1]}_${m[2]}` : '',
        url: supabase.storage.from(PRICE_LIST_BUCKET).getPublicUrl(`${PRICE_LIST_FOLDER}/${f.name}`).data.publicUrl,
      }
    })
    .sort((a, b) => b.stamp.localeCompare(a.stamp))
}

const stampToDate = (stamp) => {
  const [d, t] = stamp.split('_')
  return new Date(`${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}T${t.slice(0, 2)}:${t.slice(2, 4)}:00`)
}

/**
 * Objavi novi cjenik ako se sadržaj promijenio, i obriši cjenike koji su zamijenjeni prije više od 15 dana.
 * Zahtijeva prijavljenog admina (storage upload/delete).
 */
export async function publishPriceList(supabase) {
  const { data: cars, error } = await supabase.from('cars').select('*').eq('status', 'sale')
  if (error) throw error
  const csv = buildPriceListCsv(cars)

  const existing = await listPriceLists(supabase)
  if (existing[0]) {
    const res = await fetch(`${existing[0].url}?t=${Date.now()}`)
    if (res.ok && (await res.text()) === csv) return { published: false, name: existing[0].name }
  }

  const stamp = zagrebStamp()
  const sameDay = existing.filter((f) => f.stamp.startsWith(stamp.slice(0, 8))).length
  const name = `${SELLER_OIB}_${SALE_POINT}_roba_${sameDay + 1}_${stamp}.csv`
  const { error: upErr } = await supabase.storage
    .from(PRICE_LIST_BUCKET)
    .upload(`${PRICE_LIST_FOLDER}/${name}`, new Blob([csv], { type: 'text/csv;charset=utf-8' }), {
      contentType: 'text/csv; charset=utf-8',
      cacheControl: '60',
      upsert: true,
    })
  if (upErr) throw upErr

  // Zamijenjeni cjenik ostaje dostupan još 15 dana od zamjene.
  const all = [{ name, stamp }, ...existing]
  const cutoff = Date.now() - ARCHIVE_DAYS * 24 * 60 * 60 * 1000
  const expired = all.slice(1).filter((f, i) => f.stamp && stampToDate(all[i].stamp).getTime() < cutoff)
  if (expired.length) {
    await supabase.storage.from(PRICE_LIST_BUCKET).remove(expired.map((f) => `${PRICE_LIST_FOLDER}/${f.name}`))
  }
  return { published: true, name }
}
