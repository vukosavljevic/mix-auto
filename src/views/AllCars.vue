<template>
  <div class="all-cars">
    <section class="page-hero">
      <div class="container">
        <h1>All Cars</h1>
        <p>Find your perfect vehicle</p>
      </div>
    </section>

    <section class="cars-section">
      <div class="container">
        <div class="cars-layout">
          <!-- Filters Sidebar -->
          <aside class="filters-sidebar" :class="{ 'filters-open': filtersOpen }">
            <div class="filters-header">
              <h3>Filters</h3>
              <button class="close-filters" @click="filtersOpen = false">×</button>
            </div>

            <div class="filter-group">
              <h4>Status</h4>
              <label>
                <input type="checkbox" value="rent" v-model="filters.status" />
                For Rent
              </label>
              <label>
                <input type="checkbox" value="sale" v-model="filters.status" />
                For Sale
              </label>
            </div>

            <div class="filter-group">
              <h4>Type</h4>
              <label v-for="type in carTypes" :key="type">
                <input type="checkbox" :value="type" v-model="filters.types" />
                {{ type }}
              </label>
            </div>

            <div class="filter-group">
              <h4>Manufacturer</h4>
              <label v-for="manufacturer in manufacturers" :key="manufacturer">
                <input type="checkbox" :value="manufacturer" v-model="filters.manufacturers" />
                {{ manufacturer }}
              </label>
            </div>

            <div class="filter-group">
              <h4>City</h4>
              <label v-for="city in cities" :key="city">
                <input type="checkbox" :value="city" v-model="filters.cities" />
                {{ city }}
              </label>
            </div>

            <div class="filter-group">
              <h4>Transmission</h4>
              <label v-for="trans in transmissions" :key="trans">
                <input type="checkbox" :value="trans" v-model="filters.transmissions" />
                {{ trans }}
              </label>
            </div>

            <div class="filter-group">
              <h4>Fuel Type</h4>
              <label v-for="fuel in fuelTypes" :key="fuel">
                <input type="checkbox" :value="fuel" v-model="filters.fuelTypes" />
                {{ fuel }}
              </label>
            </div>

            <button class="btn-reset" @click="resetFilters">Reset All Filters</button>
          </aside>

          <!-- Cars Grid -->
          <div class="cars-content">
            <div class="cars-header">
              <div class="results-count">
                <p>{{ filteredCars.length }} cars found</p>
              </div>
              <div class="controls">
                <button class="btn-filters-mobile" @click="filtersOpen = true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="4" y1="6" x2="20" y2="6" stroke-width="2" stroke-linecap="round"/>
                    <line x1="4" y1="12" x2="20" y2="12" stroke-width="2" stroke-linecap="round"/>
                    <line x1="4" y1="18" x2="20" y2="18" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  Filters
                </button>
                <select v-model="sortBy" class="sort-select">
                  <option value="date-desc">Date Descending</option>
                  <option value="date-asc">Date Ascending</option>
                  <option value="price-asc">Price Ascending</option>
                  <option value="price-desc">Price Descending</option>
                  <option value="name-asc">Title Ascending</option>
                  <option value="name-desc">Title Descending</option>
                </select>
              </div>
            </div>

            <div v-if="filteredCars.length > 0" class="cars-grid">
              <CarCard
                v-for="car in filteredCars"
                :key="car.id"
                :car="car"
              />
            </div>
            <div v-else class="no-results">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke-width="2"/>
                <path d="M8 12h8M12 8v8" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <h3>No cars found</h3>
              <p>Try adjusting your filters to see more results</p>
              <button class="btn-primary" @click="resetFilters">Reset Filters</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CarCard from '../components/CarCard.vue'
import { cars } from '../data/cars'

const filtersOpen = ref(false)
const sortBy = ref('date-desc')

const filters = ref({
  status: [],
  types: [],
  manufacturers: [],
  cities: [],
  transmissions: [],
  fuelTypes: []
})

const carTypes = ['Coupe', 'Sedan', 'Sport', 'SUV', 'Hatchback', 'Wagon']
const manufacturers = [...new Set(cars.map(car => car.manufacturer))].sort()
const cities = [...new Set(cars.map(car => car.city))].sort()
const transmissions = ['Manual', 'Automatic', 'CVT', 'Tiptronic']
const fuelTypes = ['Gasoline', 'Diesel', 'Electric', 'Hybrid']

const filteredCars = computed(() => {
  let result = [...cars]

  // Apply filters
  if (filters.value.status.length > 0) {
    result = result.filter(car => filters.value.status.includes(car.status))
  }

  if (filters.value.types.length > 0) {
    result = result.filter(car => filters.value.types.includes(car.type))
  }

  if (filters.value.manufacturers.length > 0) {
    result = result.filter(car => filters.value.manufacturers.includes(car.manufacturer))
  }

  if (filters.value.cities.length > 0) {
    result = result.filter(car => filters.value.cities.includes(car.city))
  }

  if (filters.value.transmissions.length > 0) {
    result = result.filter(car => filters.value.transmissions.includes(car.transmission))
  }

  if (filters.value.fuelTypes.length > 0) {
    result = result.filter(car => filters.value.fuelTypes.includes(car.fuel))
  }

  // Apply sorting
  switch (sortBy.value) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      result.sort((a, b) => b.price - a.price)
      break
    case 'name-asc':
      result.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'name-desc':
      result.sort((a, b) => b.name.localeCompare(a.name))
      break
    case 'date-asc':
      result.sort((a, b) => new Date(a.date) - new Date(b.date))
      break
    case 'date-desc':
      result.sort((a, b) => new Date(b.date) - new Date(a.date))
      break
  }

  return result
})

const resetFilters = () => {
  filters.value = {
    status: [],
    types: [],
    manufacturers: [],
    cities: [],
    transmissions: [],
    fuelTypes: []
  }
}
</script>

<style scoped>
.all-cars {
  padding-top: 80px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Page Hero */
.page-hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  padding: 4rem 0;
  text-align: center;
}

.page-hero h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 0.5rem;
}

.page-hero p {
  font-size: 1.2rem;
  color: #e63946;
}

/* Cars Section */
.cars-section {
  padding: 4rem 0;
}

.cars-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
}

/* Filters Sidebar */
.filters-sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.filters-header h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin: 0;
}

.close-filters {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: #666;
  cursor: pointer;
  line-height: 1;
}

.filter-group {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.filter-group:last-of-type {
  border-bottom: none;
}

.filter-group h4 {
  font-size: 1rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 600;
}

.filter-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  cursor: pointer;
  color: #666;
  font-size: 0.95rem;
}

.filter-group input[type="checkbox"] {
  cursor: pointer;
  width: 18px;
  height: 18px;
  accent-color: #e63946;
}

.btn-reset {
  width: 100%;
  padding: 0.8rem;
  background: #f5f5f5;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-reset:hover {
  background: #e63946;
  color: white;
}

/* Cars Content */
.cars-content {
  min-height: 500px;
}

.cars-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.results-count p {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
}

.controls {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn-filters-mobile {
  display: none;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  background: white;
  border: 2px solid #e63946;
  border-radius: 8px;
  color: #e63946;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-filters-mobile:hover {
  background: #e63946;
  color: white;
}

.sort-select {
  padding: 0.8rem 1.2rem;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.sort-select:focus {
  outline: none;
  border-color: #e63946;
}

.cars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 4rem 2rem;
}

.no-results svg {
  color: #ccc;
  margin-bottom: 1.5rem;
}

.no-results h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.no-results p {
  color: #666;
  margin-bottom: 2rem;
}

.btn-primary {
  padding: 1rem 2rem;
  background: #e63946;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #d62839;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(230, 57, 70, 0.3);
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .cars-layout {
    grid-template-columns: 1fr;
  }

  .filters-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 320px;
    height: 100vh;
    overflow-y: auto;
    z-index: 1001;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .filters-open {
    transform: translateX(0);
  }

  .filters-open::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  .close-filters {
    display: block;
  }

  .btn-filters-mobile {
    display: flex;
  }
}

@media (max-width: 640px) {
  .page-hero h1 {
    font-size: 2rem;
  }

  .cars-grid {
    grid-template-columns: 1fr;
  }

  .filters-sidebar {
    width: 280px;
  }

  .cars-header {
    flex-direction: column;
    align-items: stretch;
  }

  .controls {
    justify-content: space-between;
  }
}
</style>

