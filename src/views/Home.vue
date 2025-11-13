<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <img src="/hero.jpg" alt="MIX AUTO - Prodaja i kupnja polovnih automobila u Osijeku, Hrvatska" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-wrapper">
        <div class="hero-text-small animate-fade-in">
          Prodaja i kupnja automobila.<br>
          Posredovanje u prodaji automobila.<br>
          Uvoz automobila iz Njemačke po narudžbi.<br>
          Otkup automobila. Obratite nam se s povjerenjem!
        </div>
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="hero-line hero-primary animate-slide-in-right" style="animation-delay: 0.2s;">Kvalitetni</span>
            <span class="hero-line hero-secondary animate-slide-in-up" style="animation-delay: 0.4s;">polovni</span>
            <span class="hero-line hero-secondary animate-slide-in-up" style="animation-delay: 0.6s;">automobili</span>
          </h1>
          <div class="hero-arrow" @click="scrollToNext">
            <img src="/bottom.svg" alt="Scroll down" />
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Cars -->
    <section class="recent-cars">
      <div class="container">
        <div class="section-header">
          <h2>Najnoviji <span class="highlight">automobili</span></h2>
          <p>Pregledajte našu ponudu kvalitetnih polovnih automobila po najboljim cijenama.</p>
        </div>
        <div class="cars-grid">
          <CarCard
            v-for="car in recentCars"
            :key="car.id"
            :car="car"
            class="car-item"
          />
        </div>
        <div class="load-more">
          <router-link to="/cars" class="btn-secondary">Pogledaj sve automobile</router-link>
        </div>
      </div>
    </section>

    <!-- Brand Logos Slider -->
    <section class="brands-slider">
      <div class="slider-wrapper">
        <div class="slider-track">
          <div class="logo-slide">
            <img src="/audi-logo-21.png" alt="Audi" />
          </div>
          <div class="logo-slide">
            <img src="/hyundai.png" alt="Hyundai" />
          </div>
          <div class="logo-slide">
            <img src="/nissan.png" alt="Nissan" />
          </div>
          <div class="logo-slide">
            <img src="/skoda.png" alt="Skoda" />
          </div>
          <div class="logo-slide">
            <img src="/audi-logo-21.png" alt="Audi" />
          </div>
          <div class="logo-slide">
            <img src="/hyundai.png" alt="Hyundai" />
          </div>
          <div class="logo-slide">
            <img src="/nissan.png" alt="Nissan" />
          </div>
          <div class="logo-slide">
            <img src="/skoda.png" alt="Skoda" />
          </div>
          <div class="logo-slide">
            <img src="/audi-logo-21.png" alt="Audi" />
          </div>
          <div class="logo-slide">
            <img src="/hyundai.png" alt="Hyundai" />
          </div>
          <div class="logo-slide">
            <img src="/nissan.png" alt="Nissan" />
          </div>
          <div class="logo-slide">
            <img src="/skoda.png" alt="Skoda" />  
          </div>
        </div>
      </div>
    </section>

    <!-- Luxury Drive -->
    <section class="luxury-section">
      <div class="container">
        <div class="luxury-wrapper">
          <div class="luxury-images">
            <div class="luxury-image-main">
              <img :src="selectedLuxuryImage" alt="Kvalitetni polovni automobili - MIX AUTO Osijek" />
            </div>
          </div>
          <div class="luxury-content">
            <h2>Vaš pouzdani partner za kupnju i prodaju automobila</h2>
            <p>
              Specijalizirani smo za prodaju i kupnju kvalitetnih polovnih automobila, posredovanje u prodaji, 
              uvoz vozila iz Njemačke po narudžbi te otkup automobila. S nama ste u sigurnim rukama!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>Što kažu naši <span class="highlight">klijenti</span></h2>
          <p>Pročitajte iskustva naših zadovoljnih kupaca koji su nam ukazali povjerenje.</p>
        </div>
        <div class="testimonials-carousel-wrapper" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
          <div class="testimonials-slider" ref="slider">
            <div class="testimonials-grid" :style="sliderStyle">
              <div
                v-for="(testimonial, index) in displayTestimonials"
                :key="`testimonial-${index}`"
                class="testimonial-item"
                :class="{ 'center-item': isCenterItem(index) }"
              >
                <div :class="['testimonial-card', { 'highlighted': isCenterItem(index) }]">
                  <div class="quote-icon">
                    <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor">
                      <path d="M0 16c0-8.837 7.163-16 16-16v8c-4.418 0-8 3.582-8 8h8v16H0V16zm24 0c0-8.837 7.163-16 16-16v8c-4.418 0-8 3.582-8 8h8v16H24V16z"/>
                    </svg>
                  </div>
                  <p class="testimonial-text">{{ testimonial.text }}</p>
                </div>
                <div class="testimonial-author">
                  <div class="author-avatar" v-if="!testimonial.avatar">
                    <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke-linecap="round" stroke-linejoin="round"/>
                      <circle cx="12" cy="7" r="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <img v-else :src="testimonial.avatar" :alt="testimonial.name" />
                  <div class="author-info">
                    <h4>{{ testimonial.name }}</h4>
                    <p>{{ testimonial.location }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-controls">
            <button class="carousel-btn prev-btn" @click="prevSlide" aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <div class="carousel-dots">
              <button
                v-for="(testimonial, index) in testimonials"
                :key="`dot-${index}`"
                :class="['dot', { 'active': index === currentIndex }]"
                @click="goToSlide(index)"
                :aria-label="`Go to testimonial ${index + 1}`"
              ></button>
            </div>
            <button class="carousel-btn next-btn" @click="nextSlide" aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import CarCard from '../components/CarCard.vue'
import { useCars } from '../composables/useCars'
import { testimonials as testimonialsData, news as newsData } from '../data/cars'

// Koristi shared cars state
const { cars, recentCars, loadCars } = useCars()

const testimonials = ref(testimonialsData)
const news = ref(newsData)

// Učitaj ako još nisu učitani
onMounted(async () => {
  await loadCars()
})

// Luxury section images
const luxuryImages = ref([
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop&q=80' // Orange Porsche with model
])
const selectedLuxuryImage = ref(luxuryImages.value[0])

// Testimonials Carousel
const slider = ref(null)
const currentIndex = ref(0)
const isTransitioning = ref(true)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1400)

// Create infinite loop by duplicating testimonials
const displayTestimonials = computed(() => {
  return [...testimonials.value, ...testimonials.value, ...testimonials.value]
})

const sliderStyle = computed(() => {
  let slideWidth
  
  if (windowWidth.value <= 1024) {
    slideWidth = windowWidth.value * 0.9 + 32 // 90vw + gap
  } else {
    slideWidth = 400 + 32 // Item width (400px) + gap (32px) = 432px
  }
  
  // We want to show 3 items with the current item in the middle (position 1 of 0,1,2)
  // So we need to offset by: (currentIndex + testimonials.length - 1) * slideWidth
  // This will position currentIndex in the middle of the visible area
  const offset = (currentIndex.value + testimonials.value.length - 1) * slideWidth
  
  return {
    transform: `translateX(-${offset}px)`,
    transition: isTransitioning.value ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
  }
})

const isCenterItem = (index) => {
  const centerIndex = currentIndex.value + testimonials.value.length
  return index === centerIndex
}

const nextSlide = () => {
  isTransitioning.value = true
  currentIndex.value++
  
  if (currentIndex.value >= testimonials.value.length) {
    setTimeout(() => {
      isTransitioning.value = false
      currentIndex.value = 0
      setTimeout(() => {
        isTransitioning.value = true
      }, 50)
    }, 500)
  }
}

const prevSlide = () => {
  isTransitioning.value = true
  currentIndex.value--
  
  if (currentIndex.value < 0) {
    setTimeout(() => {
      isTransitioning.value = false
      currentIndex.value = testimonials.value.length - 1
      setTimeout(() => {
        isTransitioning.value = true
      }, 50)
    }, 500)
  }
}

const goToSlide = (index) => {
  isTransitioning.value = true
  currentIndex.value = index
}

// Auto-play
let autoPlayInterval = null

const startAutoPlay = () => {
  stopAutoPlay() // Clear any existing interval
  autoPlayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

const scrollToNext = () => {
  const nextSection = document.querySelector('.recent-cars')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  startAutoPlay()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  stopAutoPlay()
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.home {
  padding-top: 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center left;
  filter: brightness(0.85) contrast(1.1);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(ellipse at 70% 40%, rgba(255, 193, 7, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 30% 70%, rgba(255, 193, 7, 0.08) 0%, transparent 40%),
    linear-gradient(90deg, rgba(15, 15, 15, 0.5) 0%, rgba(0, 0, 0, 0.75) 50%, rgba(0, 0, 0, 0.95) 100%);
  z-index: 1;
}

.hero-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(ellipse at 40% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 20%),
    radial-gradient(circle at 60% 70%, rgba(255, 255, 255, 0.025) 0%, transparent 18%),
    radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.15) 0%, transparent 30%),
    radial-gradient(circle at 20% 80%, rgba(255, 193, 7, 0.1) 0%, transparent 35%);
  animation: shimmer 8s ease-in-out infinite alternate;
  z-index: 1;
}

@keyframes shimmer {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.6;
  }
}

.hero-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1600px;
  padding: 0 4rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  min-height: 85vh;
}

.hero-text-small {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.75rem;
  line-height: 1.7;
  font-weight: 400;
  letter-spacing: 0.2px;
  max-width: 300px;
  padding-bottom: 2rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-bottom: 2rem;
  padding-right: 2rem;
}

.hero-title {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  margin: 0;
  line-height: 1;
}

.hero-line {
  display: block;
  font-weight: 700;
  letter-spacing: -3px;
  line-height: 0.9;
  margin-bottom: 0;
}

.hero-primary {
  font-size: clamp(4.5rem, 13vw, 10rem);
  color: #FFB800;
  font-weight: 700;
}

.hero-secondary {
  font-size: clamp(4rem, 12vw, 9rem);
  color: white;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  font-weight: 600;
}

.hero-arrow {
  margin-top: 3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 
    fadeIn 0.6s ease-out 0.9s both,
    bounceArrow 2s ease-in-out 1.5s infinite;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hero-arrow:hover {
  opacity: 1;
}

.hero-arrow img {
  width: 52px;
  height: 52px;
  filter: brightness(0) invert(1);
}

@keyframes bounceArrow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}


.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.3s both;
}

.animate-slide-in-right {
  animation: slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-slide-in-up {
  animation: slideInUp 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 3rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.section-header h2 .highlight {
  color: #ffc107;
}

.section-header p {
  font-size: 1.15rem;
  color: #666;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Recent Cars */
.recent-cars {
  padding: 7rem 0;
  background: 
    radial-gradient(ellipse at 50% 0%, rgba(255, 193, 7, 0.05) 0%, transparent 50%),
    linear-gradient(to bottom, #0f0f0f 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
}

.recent-cars::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.02) 0%, transparent 15%),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.015) 0%, transparent 20%),
    radial-gradient(circle, rgba(255, 193, 7, 0.03) 0%, transparent 70%);
  pointer-events: none;
}

.recent-cars .container {
  padding: 0 6rem;
  position: relative;
  z-index: 1;
}

.recent-cars .section-header h2 {
  color: #fff;
}

.recent-cars .section-header p {
  color: rgba(255, 255, 255, 0.7);
}

.cars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 1200px) {
  .recent-cars .container {
    padding: 0 4rem;
  }
  
  .cars-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .recent-cars .container {
    padding: 0 2rem;
  }
  
  .cars-grid {
    grid-template-columns: 1fr;
  }
}

.car-item {
  animation: slideUp 0.6s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.load-more {
  text-align: center;
}

.btn-secondary {
  display: inline-block;
  padding: 1.2rem 3.5rem;
  background: transparent;
  color: #fff;
  border: 2px solid #ffc107;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ffc107 0%, #ffb300 100%);
  transition: left 0.4s ease;
  z-index: -1;
}

.btn-secondary:hover::before {
  left: 0;
}

.btn-secondary:hover {
  color: #1a1a1a;
  border-color: #ffc107;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.6);
}

/* Luxury Section */
.luxury-section {
  background: 
    radial-gradient(ellipse at 50% 50%, rgba(255, 193, 7, 0.05) 0%, transparent 60%),
    linear-gradient(to bottom, #1a1a1a 0%, #0f0f0f 100%);
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

.luxury-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(ellipse at 15% 60%, rgba(255, 255, 255, 0.025) 0%, transparent 25%),
    radial-gradient(circle at 85% 40%, rgba(255, 255, 255, 0.02) 0%, transparent 18%),
    radial-gradient(circle at 30% 70%, rgba(255, 193, 7, 0.03) 0%, transparent 40%),
    radial-gradient(circle at 70% 30%, rgba(255, 193, 7, 0.02) 0%, transparent 35%);
  animation: shimmerSlow 10s ease-in-out infinite alternate;
  pointer-events: none;
}

.luxury-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.luxury-content {
  padding-left: 2rem;
}

.luxury-images {
  width: 100%;
}

.luxury-image-main {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  height: 600px;
}

.luxury-image-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.luxury-badge {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #ffc107 0%, #ffb300 100%);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(255, 193, 7, 0.5);
  text-align: center;
  min-width: 140px;
}

.badge-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.badge-text {
  display: block;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
}

.luxury-content h2 {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.luxury-content p {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  margin-bottom: 3rem;
} 

/* Testimonials */
.testimonials {
  padding: 4rem 0;
  position: relative;
}

.testimonials .section-header h2 {
  color: #fff;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
}

.testimonials .section-header .highlight {
  color: #FF5722;
}

.testimonials .section-header p {
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin-bottom: 4rem;
}

.testimonials-carousel-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  padding: 0 2rem;
}

.testimonials-slider {
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
}

.testimonials-grid {
  display: flex;
  gap: 2rem;
  width: max-content;
}

.testimonial-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  flex-shrink: 0;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.testimonial-item.center-item {
  opacity: 1;
}

.testimonial-item.center-item .testimonial-card {
  transform: scale(1.05);
}

.testimonial-card {
  background: #252525;
  padding: 3rem 2.5rem;
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease;
  width: 100%;
  margin-bottom: 3rem;
}

.testimonial-card::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #252525;
}

.testimonial-card.highlighted {
  background: linear-gradient(135deg, #FF5722 0%, #F4511E 100%);
}

.testimonial-card.highlighted::after {
  border-top-color: #F4511E;
}

.quote-icon {
  color: #FF5722;
  margin-bottom: 1.5rem;
  display: block;
}

.testimonial-card.highlighted .quote-icon {
  color: rgba(255, 255, 255, 0.3);
}

.testimonial-text {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin: 0;
  font-weight: 400;
}

.testimonial-card.highlighted .testimonial-text {
  color: rgba(255, 255, 255, 0.95);
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
}

.testimonial-author img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #2a2a2a;
  margin-bottom: 1rem;
}

.author-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 4px solid #2a2a2a;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
}

.author-avatar svg {
  width: 50px;
  height: 50px;
}

.author-info h4 {
  font-size: 1.2rem;
  color: #fff;
  margin: 0 0 0.3rem 0;
  font-weight: 600;
}

.author-info p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.carousel-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #252525;
  border: 2px solid rgba(255, 87, 34, 0.3);
  color: #FF5722;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-btn:hover {
  background: linear-gradient(135deg, #FF5722 0%, #F4511E 100%);
  border-color: #FF5722;
  color: white;
  transform: scale(1.1);
}

.carousel-dots {
  display: flex;
  gap: 0.8rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  background: rgba(255, 87, 34, 0.6);
  transform: scale(1.2);
}

.dot.active {
  background: #FF5722;
  width: 30px;
  border-radius: 5px;
}

@media (max-width: 1024px) {
  .testimonials-slider {
    max-width: 100%;
    padding: 2rem 1rem;
  }

  .testimonial-item {
    width: 90vw;
    opacity: 1;
  }

  .testimonial-item.center-item .testimonial-card {
    transform: scale(1);
  }

  .testimonial-card.highlighted {
    transform: scale(1);
  }

  .carousel-controls {
    flex-direction: column;
    gap: 1.5rem;
  }

  .carousel-dots {
    order: -1;
  }

  .prev-btn,
  .next-btn {
    display: inline-flex;
  }
}

@media (max-width: 768px) {
  .testimonials {
    padding: 4rem 0;
  }

  .testimonials .section-header h2 {
    font-size: 2rem;
  }

  .testimonial-card {
    padding: 2rem 1.5rem;
  }

  .testimonial-text {
    font-size: 0.95rem;
  }

  .testimonial-author img,
  .author-avatar {
    width: 70px;
    height: 70px;
  }

  .author-avatar svg {
    width: 40px;
    height: 40px;
  }

  .carousel-btn {
    width: 45px;
    height: 45px;
  }
}

/* Process */
.process {
  background: 
    radial-gradient(ellipse at 50% 100%, rgba(255, 193, 7, 0.04) 0%, transparent 50%),
    linear-gradient(to bottom, #1a1a1a 0%, #0f0f0f 100%);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.process::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 50%;
  background: 
    radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.015) 0%, transparent 20%),
    radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.02) 0%, transparent 25%),
    radial-gradient(ellipse, rgba(255, 193, 7, 0.02) 0%, transparent 60%);
  pointer-events: none;
}

.process .section-header h2 {
  color: #fff;
}

.process .section-header p {
  color: rgba(255, 255, 255, 0.7);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  position: relative;
  z-index: 1;
}

.process-step {
  text-align: center;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #252525 0%, #1f1f1f 100%);
  border-radius: 16px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.process-step:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 50px rgba(255, 99, 71, 0.2);
  border-color: rgba(255, 99, 71, 0.3);
}

.step-number {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #ffc107 0%, #ffb300 100%);
  color: #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.6);
  position: relative;
}

.step-number::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #ffc107;
  opacity: 0;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.process-step h3 {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 600;
}

.process-step p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  font-size: 1rem;
}

/* News */
.news {
  padding: 6rem 0;
  background: 
    radial-gradient(ellipse at 50% 0%, rgba(255, 193, 7, 0.04) 0%, transparent 50%),
    linear-gradient(to bottom, #0f0f0f 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
}

.news::after {
  content: '';
  position: absolute;
  top: 20%;
  right: 10%;
  width: 40%;
  height: 60%;
  background: radial-gradient(circle, rgba(255, 193, 7, 0.02) 0%, transparent 50%);
  pointer-events: none;
}

.news .section-header h2 {
  color: #fff;
}

.news .section-header p {
  color: rgba(255, 255, 255, 0.7);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  position: relative;
  z-index: 1;
}

.news-card {
  background: linear-gradient(135deg, #2d2d2d 0%, #1f1f1f 100%);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.news-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 50px rgba(255, 99, 71, 0.2);
  border-color: rgba(255, 99, 71, 0.3);
}

.news-image {
  position: relative;
  padding-top: 65%;
  overflow: hidden;
  background: #f5f5f5;
}

.news-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.15);
}

.news-category {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: linear-gradient(135deg, #ffc107 0%, #ffb300 100%);
  color: #1a1a1a;
  padding: 0.6rem 1.3rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.6);
}

.news-content {
  padding: 2rem;
}

.news-content h3 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1.2rem;
  line-height: 1.5;
  font-weight: 600;
  transition: color 0.3s ease;
}

.news-card:hover .news-content h3 {
  color: #ffc107;
}

.news-meta {
  display: flex;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 1024px) {
  .luxury-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .luxury-image-main {
    height: 500px;
  }

  .luxury-content {
    padding-left: 0;
  }
}

/* Brand Logos Slider */
.brands-slider {
  background: #1a1a1a;
  padding: 1rem 0;
  overflow: hidden;
  position: relative;
}

.slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider-track {
  display: flex;
  gap: 8rem;
  animation: scroll 30s linear infinite;
  width: max-content;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.logo-slide {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  min-width: 150px;
  padding: 10px;
  filter: grayscale(100%) brightness(0.5);
  transition: all 0.3s ease;
  overflow: hidden;
}

.logo-slide:hover {
  filter: grayscale(0%) brightness(1);
  transform: scale(1.1);
}

.logo-slide img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .brands-slider {
    padding: 3rem 0;
  }

  .slider-track {
    gap: 4rem;
  }

  .logo-slide {
    height: 60px;
    min-width: 120px;
    padding: 8px;
  }

  .logo-slide img {
    max-width: 100%;
    max-height: 100%;
  }
}

@media (max-width: 768px) {
  .luxury-image-main {
    height: 400px;
  }

  .luxury-badge {
    bottom: 1rem;
    right: 1rem;
    padding: 1.5rem;
    min-width: 120px;
  }

  .badge-number {
    font-size: 2rem;
  }
}

@media (max-width: 1200px) {
  .hero-wrapper {
    padding: 0 2rem;
    gap: 2rem;
  }

  .hero-content {
    padding-right: 0;
  }
  
  .hero-primary {
    font-size: clamp(4rem, 10vw, 8rem);
  }

  .hero-secondary {
    font-size: clamp(3.5rem, 9vw, 7rem);
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 100vh;
  }

  .hero-wrapper {
    padding: 0 1.5rem;
    min-height: 90vh;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }

  .hero-content {
    padding-right: 1.5rem;
    justify-content: flex-end;
    text-align: right;
    order: 1;
    margin-bottom: 1rem;
  }

  .hero-title {
    align-items: flex-end;
  }

  .hero-primary {
    font-size: clamp(3.5rem, 18vw, 7rem);
  }

  .hero-secondary {
    font-size: clamp(3rem, 15vw, 6rem);
  }

  .hero-text-small {
    padding-bottom: 2rem;
    padding-right: 1.5rem;
    text-align: right;
    font-size: 0.85rem;
    line-height: 1.6;
    order: 2;
  }

  .hero-arrow {
    margin-top: 1.5rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .luxury-content h2 {
    font-size: 2rem;
    color: #fff;
  }
}
</style>

