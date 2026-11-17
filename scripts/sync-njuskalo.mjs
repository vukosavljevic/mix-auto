// Sync cars on the site with the MIX AUTO Njuškalo store.
//
//   node scripts/sync-njuskalo.mjs            -> dry run: shows what would be added / updated / deleted
//   node scripts/sync-njuskalo.mjs --apply    -> logs in as admin and applies the changes
//
// --apply needs ADMIN_EMAIL and ADMIN_PASSWORD in the environment (the same login as the admin panel).
// Listing data comes from scripts/njuskalo-data.json (scraped from https://www.njuskalo.hr/trgovina/mixauto).

import { readFileSync } from 'node:fs'
import { createClient } from '@supabase/supabase-js'
import { publishPriceList, toZagrebDate } from '../src/lib/priceList.js'

const root = new URL('..', import.meta.url)
const env = Object.fromEntries(
  readFileSync(new URL('.env', root), 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.trim().startsWith('#'))
    .map((l) => [l.slice(0, l.indexOf('=')).trim(), l.slice(l.indexOf('=') + 1).trim()])
)
const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY)
const apply = process.argv.includes('--apply')
const listings = JSON.parse(readFileSync(new URL('scripts/njuskalo-data.json', root), 'utf8'))

// "18.999,99 €" -> 18999 (column is INTEGER; keep the .99 look by flooring)
const parsePrice = (p) => Math.floor(parseFloat(p.replace(/[^\d,]/g, '').replace(',', '.')))
const adId = (url) => url?.match(/oglas-(\d+)/)?.[1] ?? null

function toCar(l) {
  return {
    name: l.name.replace(/\s+/g, ' ').trim(),
    manufacturer: l.manufacturer,
    year: l.year,
    price: parsePrice(l.price),
    status: 'sale',
    mileage: l.mileage,
    fuel: l.fuel,
    transmission: l.gearbox.startsWith('Automatski') ? 'Automatic' : 'Mehanički',
    city: 'Osijek',
    description: l.description.split('\n').map((s) => s.trim()).filter(Boolean).join('\n\n'),
    engine: l.type,
    engine_displacement: l.displacement,
    condition: 'Rabljeno',
    njuskalo_url: l.url,
  }
}

async function uploadImage(l) {
  const res = await fetch(l.image)
  if (!res.ok) throw new Error(`image download failed (${res.status}) for ${l.url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  const path = `car-images/njuskalo-${l.id}-${Date.now()}.jpg`
  const { error } = await supabase.storage
    .from('car-images')
    .upload(path, buf, { contentType: 'image/jpeg', cacheControl: '3600', upsert: false })
  if (error) throw error
  return supabase.storage.from('car-images').getPublicUrl(path).data.publicUrl
}

const { data: existing, error } = await supabase.from('cars').select('*')
if (error) throw error

// Match each listing to an existing car: by Njuškalo ad id first, else by make + year + mileage.
const matched = new Map() // carId -> listing
const toAdd = []
for (const l of listings) {
  const car =
    existing.find((c) => adId(c.njuskalo_url) === l.id) ||
    existing.find(
      (c) => !c.njuskalo_url && c.manufacturer === l.manufacturer && c.year === l.year && c.mileage === l.mileage
    )
  if (car && !matched.has(car.id)) matched.set(car.id, l)
  else toAdd.push(l)
}
const toDelete = existing.filter((c) => !matched.has(c.id))

console.log(`Njuškalo: ${listings.length} oglasa | Stranica: ${existing.length} auta\n`)
console.log(`AŽURIRAJ (${matched.size}):`)
for (const [id, l] of matched) {
  const c = existing.find((x) => x.id === id)
  const n = toCar(l)
  const diffs = Object.keys(n).filter((k) => String(c[k] ?? '') !== String(n[k] ?? ''))
  console.log(`  #${id} ${c.name}  -> mijenja: ${diffs.join(', ') || 'ništa'}`)
}
console.log(`\nDODAJ (${toAdd.length}):`)
for (const l of toAdd) console.log(`  + ${l.name} | ${l.year} | ${parsePrice(l.price)} € | ${l.mileage} km`)
console.log(`\nOBRIŠI (${toDelete.length}):`)
for (const c of toDelete) console.log(`  - #${c.id} ${c.name} | ${c.year} | ${c.price} €`)

if (!apply) {
  console.log('\nDry run — ništa nije promijenjeno. Pokreni s --apply za primjenu.')
  process.exit(0)
}

if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
  console.error('\nNedostaje ADMIN_EMAIL / ADMIN_PASSWORD u okruženju.')
  process.exit(1)
}
const { error: authError } = await supabase.auth.signInWithPassword({
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
})
if (authError) {
  console.error('Prijava nije uspjela:', authError.message)
  process.exit(1)
}
console.log('\nPrijavljen kao admin. Primjenjujem...')

for (const [id, l] of matched) {
  const { error } = await supabase.from('cars').update(toCar(l)).eq('id', id)
  console.log(error ? `  ✗ update #${id}: ${error.message}` : `  ✓ ažuriran #${id}`)
}

// Oldest listing first so the newest ends up on top (site orders by created_at desc).
for (const l of [...toAdd].reverse()) {
  try {
    const image = await uploadImage(l)
    const { data, error } = await supabase.from('cars').insert([{ ...toCar(l), image, agent: '', base_price: parsePrice(l.price), base_price_date: toZagrebDate() }]).select().single()
    if (error) throw error
    console.log(`  ✓ dodan #${data.id} ${data.name}`)
  } catch (e) {
    console.log(`  ✗ ${l.name}: ${e.message}`)
  }
}

for (const c of toDelete) {
  const { error } = await supabase.from('cars').delete().eq('id', c.id)
  console.log(error ? `  ✗ delete #${c.id}: ${error.message}` : `  ✓ obrisan #${c.id} ${c.name}`)
}

try {
  const r = await publishPriceList(supabase)
  console.log(r.published ? `  ✓ objavljen cjenik ${r.name}` : '  = cjenik nepromijenjen')
} catch (e) {
  console.log(`  ✗ cjenik: ${e.message}`)
}

const { count } = await supabase.from('cars').select('*', { count: 'exact', head: true })
console.log(`\nGotovo. Na stranici je sada ${count} auta.`)
await supabase.auth.signOut()
