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
              <div v-if="car.status === 'sale'" class="badge sale-badge">Sale</div>
              <div v-else class="badge rent-badge">Rent</div>
            </div>

            <!-- Car Info -->
            <div class="car-info-section">
              <div class="info-header">
                <div>
                  <h2>{{ car.name }}</h2>
                  <p class="car-meta">{{ car.type }} • {{ car.year }}</p>
                </div>
                <div class="price-tag">
                  <span v-if="car.status === 'sale'">${{ car.price.toLocaleString() }}</span>
                  <span v-else>
                    ${{ car.price.toLocaleString() }}
                    <small>/ {{ car.rentPeriod }}</small>
                  </span>
                </div>
              </div>

              <p class="car-description">{{ car.description }}</p>

              <!-- Specifications -->
              <div class="specifications">
                <h3>Specifications</h3>
                <div class="specs-grid">
                  <div class="spec-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 11l3 3L22 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                      <span class="spec-label">Mileage</span>
                      <span class="spec-value">{{ car.mileage }} miles</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" stroke-width="2"/>
                      <path d="M12 6v6l4 2" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <div>
                      <span class="spec-label">Engine</span>
                      <span class="spec-value">{{ car.engine }}</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 16v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m16 0v4H4v-4m16 0H4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                      <span class="spec-label">Fuel Type</span>
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
                      <span class="spec-label">Transmission</span>
                      <span class="spec-value">{{ car.transmission }}</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke-width="2"/>
                      <circle cx="12" cy="10" r="3" stroke-width="2"/>
                    </svg>
                    <div>
                      <span class="spec-label">Location</span>
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

              <!-- Features -->
              <div class="features">
                <h3>Features</h3>
                <div class="features-grid">
                  <div v-for="feature in car.features" :key="feature" class="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>{{ feature }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Booking Sidebar -->
          <aside class="booking-sidebar">
            <div class="booking-card">
              <h3>{{ car.status === 'sale' ? 'Inquiry Form' : 'Book This Car' }}</h3>
              <form @submit.prevent="handleSubmit" class="booking-form">
                <div class="form-group">
                  <label>Full Name</label>
                  <input type="text" v-model="bookingForm.name" placeholder="Your name" required />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" v-model="bookingForm.email" placeholder="your@email.com" required />
                </div>
                <div class="form-group">
                  <label>Phone</label>
                  <input type="tel" v-model="bookingForm.phone" placeholder="+1 234 567 8900" required />
                </div>
                <div v-if="car.status === 'rent'" class="form-row">
                  <div class="form-group">
                    <label>Pick-up Date</label>
                    <input type="date" v-model="bookingForm.pickupDate" required />
                  </div>
                  <div class="form-group">
                    <label>Return Date</label>
                    <input type="date" v-model="bookingForm.returnDate" required />
                  </div>
                </div>
                <div class="form-group">
                  <label>Message</label>
                  <textarea v-model="bookingForm.message" rows="4" placeholder="Additional notes..."></textarea>
                </div>
                <button type="submit" class="btn-submit">
                  {{ car.status === 'sale' ? 'Send Inquiry' : 'Book Now' }}
                </button>
              </form>
            </div>

            <!-- Agent Card -->
            <div class="agent-card">
              <h4>Contact Agent</h4>
              <div class="agent-info">
                <div class="agent-avatar">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke-width="2"/>
                  </svg>
                </div>
                <div>
                  <h5>{{ car.agent }}</h5>
                  <p>Sales Agent</p>
                </div>
              </div>
              <a href="tel:1-800-458-5698" class="btn-contact">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Call Now
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Similar Cars -->
    <section class="similar-cars">
      <div class="container">
        <h2>Similar Cars</h2>
        <div class="cars-grid">
          <CarCard
            v-for="similarCar in similarCars"
            :key="similarCar.id"
            :car="similarCar"
          />
        </div>
      </div>
    </section>
  </div>
  <div v-else class="loading">
    <div class="container">
      <p>Loading car details...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CarCard from '../components/CarCard.vue'
import { cars } from '../data/cars'

const route = useRoute()
const car = ref(null)

const bookingForm = ref({
  name: '',
  email: '',
  phone: '',
  pickupDate: '',
  returnDate: '',
  message: ''
})

onMounted(() => {
  const carId = parseInt(route.params.id)
  car.value = cars.find(c => c.id === carId)
})

const similarCars = computed(() => {
  if (!car.value) return []
  return cars
    .filter(c => c.id !== car.value.id && c.type === car.value.type)
    .slice(0, 3)
})

const handleSubmit = () => {
  alert('Thank you! Your inquiry has been submitted. We will contact you shortly.')
  // Reset form
  bookingForm.value = {
    name: '',
    email: '',
    phone: '',
    pickupDate: '',
    returnDate: '',
    message: ''
  }
}
</script>

<style scoped>
.car-details {
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
  padding: 3rem 0;
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

/* Details Section */
.details-section {
  padding: 4rem 0;
}

.details-layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
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
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
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
  background: #e63946;
  color: white;
}

.rent-badge {
  background: #2a9d8f;
  color: white;
}

/* Car Info */
.car-info-section {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.info-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #f5f5f5;
}

.info-header h2 {
  font-size: 2rem;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
}

.car-meta {
  color: #666;
  font-size: 1.1rem;
  margin: 0;
}

.price-tag {
  font-size: 2.5rem;
  font-weight: 700;
  color: #e63946;
  text-align: right;
}

.price-tag small {
  font-size: 1rem;
  font-weight: 500;
  color: #666;
  display: block;
  margin-top: 0.3rem;
}

.car-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 2.5rem;
}

/* Specifications */
.specifications {
  margin-bottom: 2.5rem;
}

.specifications h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
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
  background: #f8f9fa;
  border-radius: 10px;
}

.spec-item svg {
  color: #e63946;
  flex-shrink: 0;
}

.spec-item div {
  display: flex;
  flex-direction: column;
}

.spec-label {
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 0.3rem;
}

.spec-value {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
}

/* Features */
.features h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
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
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #666;
}

.feature-item svg {
  color: #2a9d8f;
  flex-shrink: 0;
}

/* Booking Sidebar */
.booking-sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.booking-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.booking-card h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  padding: 0.8rem 1rem;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #e63946;
}

.btn-submit {
  padding: 1rem;
  background: #e63946;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-submit:hover {
  background: #d62839;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(230, 57, 70, 0.3);
}

/* Agent Card */
.agent-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
}

.agent-card h4 {
  font-size: 1.2rem;
  color: #1a1a1a;
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
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.agent-avatar svg {
  color: #e63946;
}

.agent-info h5 {
  font-size: 1.1rem;
  color: #1a1a1a;
  margin: 0 0 0.3rem 0;
}

.agent-info p {
  font-size: 0.9rem;
  color: #999;
  margin: 0;
}

.btn-contact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem;
  background: #2a9d8f;
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-contact:hover {
  background: #238b7e;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(42, 157, 143, 0.3);
}

/* Similar Cars */
.similar-cars {
  padding: 4rem 0;
  background: #f8f9fa;
}

.similar-cars h2 {
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
  text-align: center;
}

.cars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

/* Loading */
.loading {
  padding: 8rem 0;
  text-align: center;
}

.loading p {
  font-size: 1.2rem;
  color: #666;
}

/* Responsive */
@media (max-width: 1024px) {
  .details-layout {
    grid-template-columns: 1fr;
  }

  .booking-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2rem;
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

  .form-row {
    grid-template-columns: 1fr;
  }

  .cars-grid {
    grid-template-columns: 1fr;
  }
}
</style>

