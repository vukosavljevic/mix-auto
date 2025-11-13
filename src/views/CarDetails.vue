<template>
  <div class="car-details" v-if="car">
    <section class="page-hero">
      <div class="container">
        <h1>{{ car.name }}</h1>
        <p>{{ car.type }} • {{ car.year }}</p>
      </div>
    </section>

    <section class="details-section">
      <div class="container">
        <div class="details-layout">
          <!-- Main Content -->
          <div class="main-content">
            <!-- Car Image -->
            <div class="car-main-image">
              <img :src="car.image" :alt="car.name" />
              <div v-if="car.status === 'sale'" class="badge sale-badge">Prodaja</div>
              <div v-else class="badge rent-badge">Najam</div>
            </div>

            <!-- Car Info -->
            <div class="car-info-section">
              <div class="info-header">
                <div>
                  <h2>{{ car.name }}</h2>
                  <p class="car-meta">{{ car.type }} • {{ car.year }}</p>
                </div>
                <div class="price-tag">
                  <span>{{ car.price.toLocaleString() }} €</span>
                </div>
              </div>

              <p class="car-description">{{ car.description }}</p>

              <!-- Specifications -->
              <div class="specifications">
                <h3>Specifikacije</h3>
                <div class="specs-grid">
                  <div class="spec-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 11l3 3L22 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                      <span class="spec-label">Kilometraža</span>
                      <span class="spec-value">{{ car.mileage }} km</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" stroke-width="2"/>
                      <path d="M12 6v6l4 2" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <div>
                      <span class="spec-label">Motor</span>
                      <span class="spec-value">{{ car.engine }}</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 16v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m16 0v4H4v-4m16 0H4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                      <span class="spec-label">Gorivo</span>
                      <span class="spec-value">{{ car.fuel }}</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="9" cy="17" r="2" stroke-width="2"/>
                      <circle cx="15" cy="17" r="2" stroke-width="2"/>
                      <path d="M9 17H4v-7l3-3h10l3 3v7h-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                      <span class="spec-label">Mjenjač</span>
                      <span class="spec-value">{{ car.transmission }}</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke-width="2"/>
                      <circle cx="12" cy="10" r="3" stroke-width="2"/>
                    </svg>
                    <div>
                      <span class="spec-label">Lokacija</span>
                      <span class="spec-value">{{ car.city }}</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <circle cx="12" cy="7" r="4" stroke-width="2"/>
                    </svg>
                    <div>
                      <span class="spec-label">Agent</span>
                      <span class="spec-value">{{ car.agent }}</span>
                    </div>
                  </div>
                </div>
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

.badge {
  position: absolute;
  top: 2rem;
  left: 2rem;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sale-badge {
  background: #FFB800;
  color: #0a0a0a;
}

.rent-badge {
  background: #FFB800;
  color: #0a0a0a;
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

/* Specifications */
.specifications {
  margin-bottom: 2.5rem;
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

  .specs-grid {
    grid-template-columns: 1fr;
  }

  .cars-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>

