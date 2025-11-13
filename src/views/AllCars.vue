<template>
  <div class="all-cars">
    <section class="page-hero">
      <div class="container">
        <h1>Svi Automobili</h1>
        <p>Pronađite svoje savršeno vozilo</p>
      </div>
    </section>

    <section class="cars-section">
      <div class="container">
        <!-- Search Bar -->
        <div class="search-bar">
          <input 
            type="text" 
            v-model="searchQuery"
            class="search-input"
            placeholder="ID automobila ili ime vlasnika/prodavača, telefon ili email"
          />
          <select v-model="filters.status" class="search-select">
            <option value="">Status</option>
            <option value="rent">Najam</option>
            <option value="sale">Prodaja</option>
          </select>
          <select v-model="filters.type" class="search-select">
            <option value="">Tip</option>
            <option v-for="type in carTypes" :key="type" :value="type">{{ type }}</option>
          </select>
          <select v-model="filters.manufacturer" class="search-select">
            <option value="">Proizvođač</option>
            <option v-for="manufacturer in manufacturers" :key="manufacturer" :value="manufacturer">
              {{ manufacturer }}
            </option>
          </select>
          <button class="btn-search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>

        <!-- Cars Grid -->
        <div class="cars-content">
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
            <h3>Nema pronađenih automobila</h3>
            <p>Pokušajte prilagoditi filtere za više rezultata</p>
            <button class="btn-primary" @click="resetFilters">Poništi Filtere</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import CarCard from '../components/CarCard.vue'
import { useCars } from '../composables/useCars'

// Koristi shared cars state
const { cars, isLoading, loadCars } = useCars()

const searchQuery = ref('')

const filters = ref({
  status: '',
  type: '',
  manufacturer: '',
  transmission: '',
  fuelType: ''
})

const carTypes = ['Coupe', 'Sedan', 'Sport', 'SUV', 'Hatchback', 'Wagon']
const manufacturers = computed(() => {
  const unique = [...new Set(cars.value.map(car => car.manufacturer).filter(Boolean))]
  return unique.sort()
})
const transmissions = ['Manual', 'Automatic', 'CVT', 'Tiptronic']
const fuelTypes = ['Gasoline', 'Diesel', 'Electric', 'Hybrid']

// Učitaj ako još nisu učitani
onMounted(async () => {
  await loadCars()
})

const filteredCars = computed(() => {
  let result = [...cars.value]

  // Apply search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(car => 
      car.name?.toLowerCase().includes(query) ||
      car.manufacturer?.toLowerCase().includes(query) ||
      car.city?.toLowerCase().includes(query) ||
      car.id?.toString().includes(query)
    )
  }

  // Apply filters
  if (filters.value.status) {
    result = result.filter(car => car.status === filters.value.status)
  }

  if (filters.value.type) {
    result = result.filter(car => car.type === filters.value.type)
  }

  if (filters.value.manufacturer) {
    result = result.filter(car => car.manufacturer === filters.value.manufacturer)
  }

  if (filters.value.transmission) {
    result = result.filter(car => car.transmission === filters.value.transmission)
  }

  if (filters.value.fuelType) {
    result = result.filter(car => car.fuel === filters.value.fuelType)
  }

  // Sort by created_at descending by default
  result.sort((a, b) => {
    const dateA = a.created_at ? new Date(a.created_at) : new Date(0)
    const dateB = b.created_at ? new Date(b.created_at) : new Date(0)
    return dateB - dateA
  })

  return result
})

const resetFilters = () => {
  searchQuery.value = ''
  filters.value = {
    status: '',
    type: '',
    manufacturer: '',
    transmission: '',
    fuelType: ''
  }
}
</script>

<style scoped>
.all-cars {
  padding-top: 100px;
  background: #0a0a0a;
  min-height: 100vh;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 3rem;
}

/* Page Hero */
.page-hero {
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 184, 0, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.04) 0%, transparent 30%),
    radial-gradient(circle at 40% 80%, rgba(255, 184, 0, 0.05) 0%, transparent 35%),
    linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    margin-top: 1rem;
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.06) 0%, transparent 25%),
    radial-gradient(circle at 70% 60%, rgba(255, 184, 0, 0.04) 0%, transparent 30%);
  animation: shimmer 8s ease-in-out infinite;
  pointer-events: none;
}

@keyframes shimmer {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-10%, -10%); }
}

.page-hero h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.page-hero p {
  font-size: 1.2rem;
  color: #FFB800;
  position: relative;
  z-index: 1;
}

/* Cars Section */
.cars-section {
  padding: 3rem 0 4rem;
  background: 
    radial-gradient(circle at 15% 20%, rgba(255, 184, 0, 0.05) 0%, transparent 35%),
    radial-gradient(circle at 85% 40%, rgba(255, 255, 255, 0.03) 0%, transparent 30%),
    radial-gradient(circle at 50% 80%, rgba(255, 184, 0, 0.04) 0%, transparent 40%),
    #0a0a0a;
  position: relative;
  overflow: hidden;
}

.cars-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle at 60% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 25%),
    radial-gradient(circle at 80% 70%, rgba(255, 184, 0, 0.03) 0%, transparent 30%);
  animation: shimmerSlow 10s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes shimmerSlow {
  0% { transform: translate(0, 0) rotate(0deg); }
  100% { transform: translate(-5%, -5%) rotate(10deg); }
}

/* Search Bar */
.search-bar {
  display: flex;
  gap: 1rem;
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 184, 0, 0.1);
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.search-input {
  flex: 1;
  padding: 0.9rem 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 0.95rem;
  color: white;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-input:focus {
  outline: none;
  border-color: #FFB800;
  background: rgba(255, 255, 255, 0.08);
}

.search-select {
  padding: 0.9rem 2.5rem 0.9rem 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 0.95rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  min-width: 150px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
}

.search-select:focus {
  outline: none;
  border-color: #FFB800;
  background: rgba(255, 255, 255, 0.08);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
}

.search-select option {
  background: #1a1a1a;
  color: white;
}

.btn-search {
  padding: 0.9rem 1.8rem;
  background: #FFB800;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.btn-search:hover {
  background: #FFA500;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(255, 184, 0, 0.4);
}


/* Cars Content */
.cars-content {
  min-height: 500px;
  position: relative;
  z-index: 1;
}

.cars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 4rem 2rem;
}

.no-results svg {
  color: rgba(255, 184, 0, 0.3);
  margin-bottom: 1.5rem;
}

.no-results h3 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
}

.no-results p {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2rem;
}

.btn-primary {
  padding: 1rem 2rem;
  background: #FFB800;
  color: #0a0a0a;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #FFA500;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(255, 184, 0, 0.4);
}

/* Mobile Responsive */
@media (max-width: 1200px) {
  .cars-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .container {
    padding: 0 2rem;
  }

  .search-bar {
    flex-wrap: wrap;
  }

  .search-input {
    min-width: 100%;
  }

  .search-select {
    flex: 1;
    min-width: 120px;
  }
}

@media (max-width: 768px) {
  .all-cars {
    padding-top: 80px;
  }

  .container {
    padding: 0 1.5rem;
  }

  .page-hero {
    padding: 3rem 0;
  }

  .page-hero h1 {
    font-size: 2rem;
  }

  .page-hero p {
    font-size: 1rem;
  }

  .search-bar {
    padding: 1rem;
    gap: 0.8rem;
  }

  .search-select {
    font-size: 0.9rem;
    padding: 0.8rem 2.2rem 0.8rem 1rem;
    background-position: right 0.7rem center;
  }

  .btn-search {
    padding: 0.8rem 1rem;
  }

  .cars-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>

