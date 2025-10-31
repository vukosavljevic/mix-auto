<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop&q=80" alt="Luxury Car" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-wrapper">
        <div class="hero-text-small animate-fade-in">
          Adipiscing elit, sed do eiusmod<br>
          tempor incididunt ut labore enim<br>
          veniam et dolore magna aliqua.
        </div>
        <div class="hero-content">
          <h1 class="hero-title animate-fade-in-delay">
            <span class="hero-line hero-primary">Rent a car</span>
            <span class="hero-line hero-secondary">and enjoy</span>
            <span class="hero-line hero-secondary">the trip</span>
          </h1>
        </div>
        <div class="scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5v14M19 12l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Recent Cars -->
    <section class="recent-cars">
      <div class="container">
        <div class="section-header">
          <h2>Recent cars</h2>
          <p>Curabitur tellus leo, euismod sit amet gravida at, egestas sed.</p>
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
          <router-link to="/cars" class="btn-secondary">Load More</router-link>
        </div>
      </div>
    </section>

    <!-- Luxury Drive -->
    <section class="luxury-section">
      <div class="container">
        <div class="luxury-wrapper">
          <div class="luxury-image">
            <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=900&fit=crop&q=80" alt="Luxury Car Interior" />
            <div class="luxury-badge">
              <div class="badge-content">
                <span class="badge-number">500+</span>
                <span class="badge-text">Premium Cars</span>
              </div>
            </div>
          </div>
          <div class="luxury-content">
            <h2>Luxuriate in your drive, savor every journey</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste
              perspiciatis ut perspiciatis unde omnis iste natus.
            </p>
            <div class="partners">
              <h4>Check our top clients & partners</h4>
              <div class="partner-logos">
                <div class="partner-logo">
                  <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                    <rect width="60" height="40" fill="#f5f5f5"/>
                    <text x="30" y="24" text-anchor="middle" font-size="12" fill="#999">BMW</text>
                  </svg>
                </div>
                <div class="partner-logo">
                  <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                    <rect width="60" height="40" fill="#f5f5f5"/>
                    <text x="30" y="24" text-anchor="middle" font-size="12" fill="#999">Audi</text>
                  </svg>
                </div>
                <div class="partner-logo">
                  <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                    <rect width="60" height="40" fill="#f5f5f5"/>
                    <text x="30" y="24" text-anchor="middle" font-size="12" fill="#999">Porsche</text>
                  </svg>
                </div>
                <div class="partner-logo">
                  <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                    <rect width="60" height="40" fill="#f5f5f5"/>
                    <text x="30" y="24" text-anchor="middle" font-size="12" fill="#999">Ferrari</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>What clients Say</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae porta.</p>
        </div>
        <div class="testimonials-grid">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="testimonial-card"
          >
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="testimonial-author">
              <img :src="testimonial.avatar" :alt="testimonial.name" />
              <div>
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="process">
      <div class="container">
        <div class="section-header">
          <h2>Simplified car rental process</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste
            perspiciatis ut perspiciatis unde omnis iste natus.
          </p>
        </div>
        <div class="process-grid">
          <div class="process-step">
            <div class="step-number">01</div>
            <h3>Vehicle selection</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste
              perspiciatis ut perspiciatis unde.
            </p>
          </div>
          <div class="process-step">
            <div class="step-number">02</div>
            <h3>Insurance services</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste
              perspiciatis ut perspiciatis unde.
            </p>
          </div>
          <div class="process-step">
            <div class="step-number">03</div>
            <h3>Payment</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste
              perspiciatis ut perspiciatis unde.
            </p>
          </div>
          <div class="process-step">
            <div class="step-number">04</div>
            <h3>Happy driving</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste
              perspiciatis ut perspiciatis unde.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News -->
    <section class="news">
      <div class="container">
        <div class="section-header">
          <h2>Latest news</h2>
          <p>Morbi lorem dolor, congue sed ipsum vel, vulputate sollicitudin ante.</p>
        </div>
        <div class="news-grid">
          <div v-for="article in news" :key="article.id" class="news-card">
            <div class="news-image">
              <img :src="article.image" :alt="article.title" />
              <span class="news-category">{{ article.category }}</span>
            </div>
            <div class="news-content">
              <h3>{{ article.title }}</h3>
              <div class="news-meta">
                <span>{{ article.date }}</span>
                <span>{{ article.comments }} Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CarCard from '../components/CarCard.vue'
import { cars, testimonials as testimonialsData, news as newsData } from '../data/cars'

const recentCars = ref(cars.slice(0, 6))
const testimonials = ref(testimonialsData)
const news = ref(newsData)
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
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(26, 26, 26, 0.75) 0%, rgba(26, 26, 26, 0.45) 50%, rgba(26, 26, 26, 0.7) 100%);
  z-index: 1;
}

.hero-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1600px;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 85vh;
}

.hero-text-small {
  position: absolute;
  bottom: 8rem;
  left: 4rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 300;
  letter-spacing: 0.3px;
}

.hero-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  letter-spacing: -2px;
  line-height: 0.95;
  margin-bottom: 0.1em;
}

.hero-primary {
  font-size: clamp(4rem, 12vw, 9rem);
  color: #ff6347;
  text-shadow: 0 4px 30px rgba(255, 99, 71, 0.5);
}

.hero-secondary {
  font-size: clamp(3.5rem, 10vw, 8rem);
  color: white;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.7);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.3s both;
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
  background: linear-gradient(to bottom, #0f0f0f 0%, #1a1a1a 100%);
}

.recent-cars .section-header h2 {
  color: #fff;
}

.recent-cars .section-header p {
  color: rgba(255, 255, 255, 0.7);
}

.cars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
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
  border: 2px solid #ff6347;
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
  background: linear-gradient(135deg, #ff6347 0%, #ff4500 100%);
  transition: left 0.4s ease;
  z-index: -1;
}

.btn-secondary:hover::before {
  left: 0;
}

.btn-secondary:hover {
  color: white;
  border-color: #ff6347;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 99, 71, 0.6);
}

/* Luxury Section */
.luxury-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #252525 100%);
  padding: 8rem 0;
}

.luxury-wrapper {
  display: grid;
  grid-template-columns: 45% 1fr;
  gap: 6rem;
  align-items: center;
}

.luxury-image {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.luxury-image img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.luxury-image:hover img {
  transform: scale(1.05);
}

.luxury-badge {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #e63946 0%, #d62839 100%);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(230, 57, 70, 0.4);
  text-align: center;
  min-width: 140px;
}

.badge-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.badge-text {
  display: block;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.luxury-content {
  padding-right: 2rem;
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

.partners h4 {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.partner-logos {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.partner-logo {
  transition: transform 0.3s ease;
}

.partner-logo:hover {
  transform: translateY(-5px);
}

/* Testimonials */
.testimonials {
  padding: 6rem 0;
  background: linear-gradient(to bottom, #252525 0%, #1a1a1a 100%);
}

.testimonials .section-header h2 {
  color: #fff;
}

.testimonials .section-header p {
  color: rgba(255, 255, 255, 0.7);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
}

.testimonial-card {
  background: linear-gradient(135deg, #2d2d2d 0%, #1f1f1f 100%);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
  border-top: 3px solid transparent;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(255, 99, 71, 0.2);
  border-top-color: #ff6347;
  border-color: rgba(255, 99, 71, 0.2);
}

.testimonial-text {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.9;
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
  padding-left: 1.5rem;
}

.testimonial-text::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -10px;
  font-size: 3rem;
  color: #ff6347;
  opacity: 0.4;
  font-family: Georgia, serif;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-author img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 99, 71, 0.3);
}

.testimonial-author h4 {
  font-size: 1.1rem;
  color: #fff;
  margin: 0 0 0.3rem 0;
  font-weight: 600;
}

.testimonial-author p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

/* Process */
.process {
  background: linear-gradient(to bottom, #1a1a1a 0%, #0f0f0f 100%);
  padding: 6rem 0;
  position: relative;
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
  background: linear-gradient(135deg, #ff6347 0%, #ff4500 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
  box-shadow: 0 8px 25px rgba(255, 99, 71, 0.6);
  position: relative;
}

.step-number::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #ff6347;
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
  background: linear-gradient(to bottom, #0f0f0f 0%, #1a1a1a 100%);
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
  background: linear-gradient(135deg, #ff6347 0%, #ff4500 100%);
  color: white;
  padding: 0.6rem 1.3rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 5px 15px rgba(255, 99, 71, 0.6);
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
  color: #ff6347;
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

  .luxury-image img {
    height: 400px;
  }

  .luxury-content {
    padding-right: 0;
  }
}

@media (max-width: 1200px) {
  .hero-wrapper {
    padding: 0 2rem;
  }

  .hero-text-small {
    left: 2rem;
  }

  .hero-content {
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 100vh;
  }

  .hero-wrapper {
    padding: 0 1.5rem;
    min-height: 90vh;
  }

  .hero-content {
    justify-content: center;
    text-align: center;
  }

  .hero-title {
    align-items: center;
  }

  .hero-primary {
    font-size: clamp(3rem, 15vw, 5rem);
  }

  .hero-secondary {
    font-size: clamp(2.5rem, 12vw, 4rem);
  }

  .hero-text-small {
    position: static;
    margin-top: auto;
    padding-bottom: 6rem;
    text-align: center;
    font-size: 0.85rem;
  }

  .cars-grid {
    grid-template-columns: 1fr;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .luxury-content h2 {
    font-size: 2rem;
    color: #fff;
  }

  .luxury-image img {
    height: 350px;
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

  .partner-logos {
    justify-content: center;
  }
}
</style>

