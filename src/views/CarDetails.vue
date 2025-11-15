<template>
  <div class="car-details" v-if="car">
    <section class="page-hero">
      <div class="container">
        <h1>{{ car.name }}</h1>
        <p>{{ car.manufacturer }} • {{ car.year }}</p>
      </div>
    </section>

    <section class="details-section">
      <div class="container">
        <div class="details-layout">
          <!-- Main Content -->
          <div class="main-content">
            <!-- Car Image -->
            <div class="car-main-image">
              <img :src="car.image" :alt="`${car.name} ${car.year} - ${car.manufacturer} - ${car.price.toLocaleString()} € - MIX AUTO Osijek`" />
            </div>

            <!-- Top Summary Cards -->
            <div class="summary-cards">
              <div class="summary-card">
                <div class="summary-label">Godina proizvodnje</div>
                <div class="summary-value">{{ car.year }}</div>
              </div>
              <div class="summary-card">
                <div class="summary-label">Prijeđeni kilometri</div>
                <div class="summary-value">{{ formatMileage(car.mileage) }}</div>
              </div>
              <div class="summary-card">
                <div class="summary-label">Snaga motora</div>
                <div class="summary-value">{{ getEnginePower(car.engine) }}</div>
              </div>
              <div class="summary-card">
                <div class="summary-label">Vrsta motora</div>
                <div class="summary-value">{{ car.fuel }}</div>
              </div>
              <div class="summary-card">
                <div class="summary-label">Mjenjač</div>
                <div class="summary-value">
                  <svg v-if="car.transmission && (car.transmission.toLowerCase().includes('manual') || car.transmission.toLowerCase().includes('ručni') || car.transmission.toLowerCase().includes('mehanički'))" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  <span v-else>{{ getTransmissionLabel(car.transmission) }}</span>
                </div>
              </div>
            </div>

            <!-- Car Info -->
            <div class="car-info-section">
              <div class="info-header">
                <div>
                  <h2>{{ car.name }}</h2>
                  <p class="car-meta">{{ car.manufacturer }} • {{ car.year }}</p>
                </div>
                <div class="price-tag">
                  <span>{{ car.price.toLocaleString() }} €</span>
                </div>
              </div>

              <p class="car-description" v-if="car.description">{{ car.description }}</p>

              <!-- Basic Information Table -->
              <div class="basic-information">
                <h3>Osnovne informacije</h3>
                <table class="info-table">
                  <tbody>
                    <tr>
                      <td class="info-label">Lokacija vozila</td>
                      <td class="info-value">{{ car.city || 'Nije navedeno' }}</td>
                    </tr>
                    <tr>
                      <td class="info-label">Marka automobila</td>
                      <td class="info-value">{{ car.manufacturer || 'Nije navedeno' }}</td>
                    </tr>
                    <tr>
                      <td class="info-label">Model automobila</td>
                      <td class="info-value">{{ car.name || 'Nije navedeno' }}</td>
                    </tr>
                    <tr>
                      <td class="info-label">Godina proizvodnje</td>
                      <td class="info-value">{{ car.year }}. godište</td>
                    </tr>
                    <tr>
                      <td class="info-label">Prijeđeni kilometri</td>
                      <td class="info-value">{{ formatMileage(car.mileage) }} km</td>
                    </tr>
                    <tr>
                      <td class="info-label">Motor</td>
                      <td class="info-value">{{ car.fuel || 'Nije navedeno' }}</td>
                    </tr>
                    <tr>
                      <td class="info-label">Snaga motora</td>
                      <td class="info-value">{{ getEnginePower(car.engine) }}</td>
                    </tr>
                    <tr v-if="car.engine_displacement">
                      <td class="info-label">Radni obujam</td>
                      <td class="info-value">{{ car.engine_displacement }} cm³</td>
                    </tr>
                    <tr>
                      <td class="info-label">Mjenjač</td>
                      <td class="info-value">{{ getTransmissionLabel(car.transmission) }}</td>
                    </tr>
                    <tr v-if="car.condition">
                      <td class="info-label">Stanje</td>
                      <td class="info-value">{{ car.condition }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Agent Sidebar -->
          <aside class="booking-sidebar">
            <!-- Agent Card -->
            <div class="agent-card">
              <h4>Kontaktirajte Agenta</h4>
              <div class="agent-info">
                <div class="agent-avatar">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke-width="2"/>
                  </svg>
                </div>
                <div>
                  <h5>{{ car.agent }}</h5>
                  <p>Prodajni Agent</p>
                </div>
              </div>
              <a href="tel:1-800-458-5698" class="btn-contact">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Pozovi Sada
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>

  </div>
  <div v-else class="loading">
    <div class="container">
      <p>Učitavanje detalja automobila...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCars } from '../composables/useCars'
import { getCarById as fetchCarById } from '../lib/carsService'

const route = useRoute()
const { cars, getCarById: getCarFromCache, loadCars } = useCars()

const car = ref(null)
const isLoading = ref(true)

// Format mileage
const formatMileage = (mileage) => {
  if (!mileage) return '0'
  // If it's a string with K, convert it (e.g., "270K" -> 270000)
  if (typeof mileage === 'string' && mileage.includes('K')) {
    const num = parseFloat(mileage.replace('K', '')) * 1000
    return num.toLocaleString('hr-HR')
  }
  // If it's a number, format it with Croatian locale
  if (typeof mileage === 'number') {
    return mileage.toLocaleString('hr-HR')
  }
  // If it's already a formatted string, try to parse and reformat
  const num = parseInt(mileage.toString().replace(/\./g, ''))
  if (!isNaN(num)) {
    return num.toLocaleString('hr-HR')
  }
  return mileage
}

// Extract engine power from engine string (e.g., "100 kW" or "2.0 L TDI")
const getEnginePower = (engine) => {
  if (!engine) return 'Nije navedeno'
  // Try to find kW in the string
  const kwMatch = engine.match(/(\d+)\s*kw/i)
  if (kwMatch) {
    return `${kwMatch[1]} kW`
  }
  // If no kW found, return the engine string as is
  return engine
}

// Get transmission label in Croatian
const getTransmissionLabel = (transmission) => {
  if (!transmission) return 'Nije navedeno'
  const trans = transmission.toLowerCase()
  if (trans.includes('manual') || trans.includes('mehanički') || trans.includes('ručni')) {
    return 'Ručni mjenjač'
  }
  if (trans.includes('automatic') || trans.includes('automatski')) {
    return 'Automatski mjenjač'
  }
  return transmission
}

onMounted(async () => {
  // Učitaj sve automobile ako još nisu učitani
  await loadCars()
  
  const carId = parseInt(route.params.id)
  
  // Prvo pokušaj uzeti iz cache-a
  const cachedCar = getCarFromCache(carId)
  if (cachedCar) {
    car.value = cachedCar
    isLoading.value = false
  } else {
    // Ako auto nije u cache-u, fetchaj ga direktno
    const { data, error } = await fetchCarById(carId)
    if (!error && data) {
      car.value = data
    }
    isLoading.value = false
  }
})

// Watch route changes za slučaj da se navigira između automobila
watch(() => route.params.id, async (newId) => {
  if (newId) {
    isLoading.value = true
    const carId = parseInt(newId)
    const cachedCar = getCarFromCache(carId)
    if (cachedCar) {
      car.value = cachedCar
      isLoading.value = false
    } else {
      const { data, error } = await fetchCarById(carId)
      if (!error && data) {
        car.value = data
      }
      isLoading.value = false
    }
  }
})
</script>

<style scoped>
.car-details {
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

/* Details Section */
.details-section {
  padding: 3rem 0 4rem;
  background: 
    radial-gradient(circle at 15% 20%, rgba(255, 184, 0, 0.05) 0%, transparent 35%),
    radial-gradient(circle at 85% 40%, rgba(255, 255, 255, 0.03) 0%, transparent 30%),
    radial-gradient(circle at 50% 80%, rgba(255, 184, 0, 0.04) 0%, transparent 40%),
    #0a0a0a;
  position: relative;
  overflow: visible;
}

.details-section::before {
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

.details-layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
  position: relative;
  z-index: 1;
}

.main-content {
  min-width: 0;
}

/* Car Image */
.car-main-image {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 184, 0, 0.1);
}

.car-main-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

/* Summary Cards */
.summary-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.summary-card {
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 184, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.summary-card:hover {
  border-color: rgba(255, 184, 0, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.summary-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.8rem;
  font-weight: 500;
}

.summary-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFB800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.summary-value svg {
  width: 24px;
  height: 24px;
  color: #FFB800;
}

/* Car Info */
.car-info-section {
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 184, 0, 0.1);
}

.info-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid rgba(255, 184, 0, 0.1);
}

.info-header h2 {
  font-size: 2rem;
  color: white;
  margin: 0 0 0.5rem 0;
}

.car-meta {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin: 0;
}

.price-tag {
  font-size: 2.5rem;
  font-weight: 700;
  color: #FFB800;
  text-align: right;
}

.price-tag small {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  display: block;
  margin-top: 0.3rem;
}

.car-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
}

/* Basic Information */
.basic-information {
  margin-top: 2.5rem;
}

.basic-information h3 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
}

.info-table tbody tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.info-table tbody tr:last-child {
  border-bottom: none;
}

.info-table td {
  padding: 1rem 0;
  vertical-align: top;
}

.info-label {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  width: 40%;
  padding-right: 2rem;
}

.info-value {
  font-size: 1rem;
  color: white;
  font-weight: 500;
}

.specifications h3 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 184, 0, 0.1);
  transition: all 0.3s ease;
}

.spec-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 184, 0, 0.3);
}

.spec-item svg {
  color: #FFB800;
  flex-shrink: 0;
}

.spec-item div {
  display: flex;
  flex-direction: column;
}

.spec-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.3rem;
}

.spec-value {
  font-size: 1rem;
  font-weight: 600;
  color: white;
}

/* Features */
.features h3 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 184, 0, 0.1);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 184, 0, 0.3);
}

.feature-item svg {
  color: #FFB800;
  flex-shrink: 0;
}

/* Agent Sidebar */
.booking-sidebar {
  position: sticky;
  top: 120px;
  align-self: start;
  height: fit-content;
}

/* Agent Card */
.agent-card {
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 184, 0, 0.1);
}

.agent-card h4 {
  font-size: 1.2rem;
  color: white;
  margin-bottom: 1.5rem;
}

.agent-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.agent-avatar {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 184, 0, 0.2);
}

.agent-avatar svg {
  color: #FFB800;
}

.agent-info h5 {
  font-size: 1.1rem;
  color: white;
  margin: 0 0 0.3rem 0;
}

.agent-info p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.btn-contact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem;
  background: #FFB800;
  color: #0a0a0a;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-contact:hover {
  background: #FFA500;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(255, 184, 0, 0.4);
}

/* Similar Cars */
.similar-cars {
  padding: 4rem 0;
  background: 
    radial-gradient(circle at 15% 20%, rgba(255, 184, 0, 0.05) 0%, transparent 35%),
    radial-gradient(circle at 85% 40%, rgba(255, 255, 255, 0.03) 0%, transparent 30%),
    #0a0a0a;
  position: relative;
  overflow: hidden;
}

.similar-cars::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.04) 0%, transparent 25%),
    radial-gradient(circle at 70% 60%, rgba(255, 184, 0, 0.03) 0%, transparent 30%);
  animation: shimmer 8s ease-in-out infinite;
  pointer-events: none;
}

.similar-cars h2 {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.cars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;
  z-index: 1;
}

/* Loading */
.loading {
  padding: 8rem 0;
  text-align: center;
  background: #0a0a0a;
  min-height: 100vh;
}

.loading p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Responsive */
@media (max-width: 1200px) {
  .cars-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .container {
    padding: 0 2rem;
  }

  .details-layout {
    grid-template-columns: 1fr;
  }

  .booking-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .car-details {
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

  .car-main-image img {
    height: 300px;
  }

  .info-header {
    flex-direction: column;
    gap: 1rem;
  }

  .price-tag {
    text-align: left;
  }

  .summary-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .summary-card {
    padding: 1rem;
  }

  .summary-value {
    font-size: 1.2rem;
  }

  .info-table td {
    padding: 0.8rem 0;
  }

  .info-label {
    width: 45%;
    padding-right: 1rem;
    font-size: 0.85rem;
  }

  .info-value {
    font-size: 0.9rem;
  }

  .cars-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .summary-cards {
    grid-template-columns: 1fr;
  }
}
</style>

