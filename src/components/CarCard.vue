<template>
  <div class="car-card" @click="goToDetails">
    <div class="car-image">
      <img :src="car.image" :alt="car.name" />
      <div v-if="car.status === 'sale'" class="badge sale-badge">Sale</div>
      <div v-else class="badge rent-badge">Rent</div>
    </div>
    <div class="car-content">
      <div class="car-price">
        <span v-if="car.status === 'sale'">${{ car.price.toLocaleString() }}</span>
        <span v-else>
          ${{ car.price.toLocaleString() }}
          <small>/ {{ car.rentPeriod }}</small>
        </span>
      </div>
      <h3 class="car-title">{{ car.name }}</h3>
      <div class="car-meta">
        <span>{{ car.type }} {{ car.year }}</span>
      </div>
      <div class="car-specs">
        <div class="spec">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 11l3 3L22 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ car.mileage }} mi</span>
        </div>
        <div class="spec">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke-width="2"/>
            <path d="M12 6v6l4 2" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>{{ car.engine }}</span>
        </div>
        <div class="spec">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 16v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m16 0v4H4v-4m16 0H4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ car.fuel }}</span>
        </div>
        <div class="spec">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="9" cy="17" r="2" stroke-width="2"/>
            <circle cx="15" cy="17" r="2" stroke-width="2"/>
            <path d="M9 17H4v-7l3-3h10l3 3v7h-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ car.transmission }}</span>
        </div>
      </div>
      <div class="car-footer">
        <div class="car-info">
          <span class="city">{{ car.city }}</span>
          <span class="agent">Agent: {{ car.agent }}</span>
        </div>
        <span class="date">{{ car.date }}</span>
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
</script>

<style scoped>
.car-card {
  background: linear-gradient(135deg, #2d2d2d 0%, #1f1f1f 100%);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.car-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(255, 99, 71, 0.2);
  border-color: rgba(255, 99, 71, 0.3);
}

.car-image {
  position: relative;
  padding-top: 65%;
  overflow: hidden;
  background: #f5f5f5;
}

.car-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.car-card:hover .car-image img {
  transform: scale(1.1);
}

.badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sale-badge {
  background: #e63946;
  color: white;
}

.rent-badge {
  background: #2a9d8f;
  color: white;
}

.car-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.car-price {
  font-size: 1.75rem;
  font-weight: 700;
  color: #e63946;
  margin-bottom: 0.5rem;
}

.car-price small {
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
}

.car-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.5rem 0;
}

.car-meta {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.car-specs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
}

.spec {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
}

.spec svg {
  color: #ff6347;
  flex-shrink: 0;
}

.car-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

.car-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.city {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.agent {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

.date {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 640px) {
  .car-specs {
    grid-template-columns: 1fr;
  }
}
</style>

