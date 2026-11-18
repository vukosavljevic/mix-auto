<template>
  <div class="price-list">
    <section class="page-hero">
      <div class="container">
        <h1><span class="highlight">Cjenik</span></h1>
        <p>Maloprodajne i bazne cijene vozila u ponudi</p>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <p class="intro">
          Sukladno Zakonu o zaštiti potrošača i Pravilniku o isticanju bazne cijene proizvoda (NN 132/2026),
          uz svaku cijenu ističemo baznu cijenu: cijenu na dan 10. 9. 2026., a za vozila uvrštena u ponudu
          nakon tog datuma cijenu na dan prvog uvrštenja.
        </p>

        <h2>Važeći cjenik</h2>
        <p v-if="error" class="muted">Cjenik trenutno nije moguće učitati.</p>
        <p v-else-if="!files.length" class="muted">{{ loading ? 'Učitavanje…' : 'Cjenik još nije objavljen.' }}</p>
        <a v-else :href="fileHref(files[0])" class="file-link current" download>
          {{ files[0].name }}
          <span>CSV · objavljen {{ stampLabel(files[0].stamp) }}</span>
        </a>

        <div class="table-wrap" v-if="cars.length">
          <table>
            <thead>
              <tr>
                <th>Vozilo</th>
                <th>Šifra</th>
                <th class="num">Maloprodajna cijena</th>
                <th class="num">Bazna cijena</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="car in sortedCars" :key="car.id">
                <td><router-link :to="`/car/${car.id}`">{{ car.name }}</router-link></td>
                <td>{{ car.id }}</td>
                <td class="num">
                  <span v-if="isOnSale(car)" class="sale-badge">Akcija</span>
                  {{ car.price.toLocaleString() }} €
                </td>
                <td class="num">
                  {{ getBasePrice(car).price.toLocaleString() }} €
                  <small>({{ formatHrDate(getBasePrice(car).date) }})</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <template v-if="files.length > 1">
          <h2>Prethodni cjenici</h2>
          <p class="muted">Zamijenjeni cjenici dostupni su 15 dana od zamjene.</p>
          <a v-for="f in files.slice(1)" :key="f.name" :href="fileHref(f)" class="file-link" download>
            {{ f.name }}
            <span>objavljen {{ stampLabel(f.stamp) }}</span>
          </a>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase } from '../lib/supabase'
import { useCars } from '../composables/useCars'
import { listPriceLists, getBasePrice, formatHrDate, isOnSale, PRICE_LIST_FOLDER } from '../lib/priceList'

const { cars, loadCars } = useCars()
const files = ref([])
const loading = ref(true)
const error = ref(null)

const sortedCars = computed(() => [...cars.value].filter((c) => c.status === 'sale').sort((a, b) => a.id - b.id))

// U produkciji datoteke idu preko mix-auto.hr (Vercel rewrite /cjenici/* -> Supabase storage).
const fileHref = (f) => (import.meta.env.DEV ? f.url : `/${PRICE_LIST_FOLDER}/${f.name}`)

const stampLabel = (stamp) => {
  if (!stamp) return ''
  const [d, t] = stamp.split('_')
  return `${Number(d.slice(6, 8))}. ${Number(d.slice(4, 6))}. ${d.slice(0, 4)}. u ${t.slice(0, 2)}:${t.slice(2, 4)}`
}

onMounted(async () => {
  document.title = 'Cjenik | MIX AUTO'
  loadCars()
  try {
    files.value = await listPriceLists(supabase)
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.price-list {
  padding-top: 100px;
  background: #0a0a0a;
  min-height: 100vh;
  color: rgba(255, 255, 255, 0.85);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 3rem;
}

.page-hero {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  margin-top: 1rem;
  padding: 4rem 0;
  text-align: center;
}

.page-hero h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 0.5rem;
}

.page-hero p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
}

.highlight {
  color: #FFB800;
}

.content {
  padding: 3rem 0 5rem;
}

.intro {
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
}

h2 {
  color: white;
  font-size: 1.5rem;
  margin: 2.5rem 0 1rem;
}

.muted {
  color: rgba(255, 255, 255, 0.55);
}

.file-link {
  display: block;
  padding: 1rem 1.25rem;
  margin-bottom: 0.75rem;
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: white;
  text-decoration: none;
  word-break: break-all;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.85rem;
}

.file-link span {
  display: block;
  margin-top: 0.35rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.55);
}

.file-link.current {
  border-color: rgba(255, 184, 0, 0.5);
}

.file-link:hover {
  border-color: #FFB800;
}

.table-wrap {
  overflow-x: auto;
  margin-top: 1.5rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

th, td {
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  text-align: left;
}

th {
  color: rgba(255, 255, 255, 0.55);
  font-weight: 500;
}

td a {
  color: white;
  text-decoration: none;
}

td a:hover {
  color: #FFB800;
}

.num {
  text-align: right;
  white-space: nowrap;
}

td small {
  display: block;
  color: rgba(255, 255, 255, 0.5);
}

.sale-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
  background: #d32f2f;
  padding: 0.1rem 0.4rem;
  border-radius: 5px;
  margin-right: 0.35rem;
  vertical-align: middle;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .page-hero h1 {
    font-size: 2.25rem;
  }
}
</style>
