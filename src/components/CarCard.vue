<template>
  <div class="car-card" @click="goToDetails">
    <div class="car-image">
      <img :src="car.image" :alt="car.name" />
      <div v-if="car.status === 'sale'" class="badge sale-badge">SALE</div>
      <div v-else class="badge rent-badge">RENT</div>
      <div class="car-price">
        <span>{{ car.price.toLocaleString() }} €</span>
      </div>
    </div>
    <div class="car-content">
      <div class="car-header">
        <h3 class="car-title">{{ car.name }}</h3>
        <button class="compare-btn" @click.stop>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </button>
      </div>
      <div class="car-meta">
        <span>{{ car.type }}</span>
        <span class="dot">•</span>
        <span>{{ car.year }}</span>
      </div>
      <div class="divider"></div>
      <div class="car-specs">
        <div class="spec">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="20" cy="20" r="12"/>
            <circle cx="20" cy="20" r="4" fill="currentColor"/>
          </svg>
          <span>{{ car.mileage }}K km</span>
        </div>
        <div class="spec">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="20" cy="20" r="8"/>
            <path d="M14 20h12M20 14v12"/>
          </svg>
          <span>{{ car.engine }}</span>
        </div>
        <div class="spec">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="12" y="14" width="16" height="14" rx="2"/>
            <path d="M16 14v-2a2 2 0 012-2h4a2 2 0 012 2v2"/>
          </svg>
          <span>{{ car.fuel }}</span>
        </div>
        <div class="spec">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="14" y="16" width="12" height="8" rx="1"/>
            <path d="M17 24v2M23 24v2"/>
          </svg>
          <span>{{ car.transmission }}</span>
        </div>
      </div>
      <div class="divider"></div>
      <div class="car-published" v-if="car.created_at">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="16" y1="2" x2="16" y2="6" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="8" y1="2" x2="8" y2="6" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="3" y1="10" x2="21" y2="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Objavljeno: {{ formatDate(car.created_at) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  car: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const goToDetails = () => {
  router.push(`/car/${props.car.id}`)
}

// Format date from created_at (ISO string) to Croatian format
const formatDate = (dateString) => {
  if (!dateString) return ''
  
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  
  return `${day}.${month}.${year}`
}
</script>

<style scoped>
.car-card {
  background: #1a1a1a;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: none;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.car-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border-color: rgba(255, 255, 255, 0.12);
}

.car-image {
  position: relative;
  padding-top: 60%;
  overflow: hidden;
  background: #2a2a2a;
}

.car-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.car-card:hover .car-image img {
  transform: scale(1.08);
}

.badge {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
}

.sale-badge {
  background: #ffc107;
  color: #1a1a1a;
  font-weight: 700;
}

.rent-badge {
  background: #52b788;
  color: white;
  font-weight: 700;
}

.car-price {
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  z-index: 2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.car-price small {
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
}

.car-content {
  padding: 1.5rem 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #1a1a1a;
}

.car-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.car-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  flex: 1;
}

.compare-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 0.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
}

.compare-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.8);
}

.car-meta {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dot {
  color: rgba(255, 255, 255, 0.3);
}

.divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 1rem 0;
}

.car-specs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.spec {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

.spec svg {
  color: rgba(255, 255, 255, 0.3);
  width: 40px;
  height: 40px;
}

.spec span {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  line-height: 1.3;
}

.car-published {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
}

.car-published svg {
  flex-shrink: 0;
  color: rgba(255, 184, 0, 0.6);
}

.car-published span {
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .car-specs {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .spec svg {
    width: 32px;
    height: 32px;
  }
  
  .spec span {
    font-size: 0.7rem;
  }
}
</style>

