<template>
  <div id="app">
    <Header v-if="!isAdminRoute" />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer v-if="!isAdminRoute" />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useCars } from './composables/useCars'
import { useSEO } from './composables/useSEO'

const route = useRoute()
const isAdminRoute = computed(() => route.path === '/admin' || route.path === '/coolpanel97-xyz')

// Initialize SEO
useSEO()

// Učitaj automobile kada se aplikacija učita
const { loadCars } = useCars()
onMounted(async () => {
  await loadCars()
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #FFB800;
  --primary-dark: #FFA500;
  --secondary-color: #FFCC00;
  --text-color: #1a1a1a;
  --text-light: #666;
  --bg-light: #f8f9fa;
  --border-color: #eee;
  --shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  --shadow-hover: 0 10px 40px rgba(0, 0, 0, 0.15);
}

body {
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  line-height: 1.6;
  background: #0f0f0f;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Selection */
::selection {
  background: var(--primary-color);
  color: white;
}

::-moz-selection {
  background: var(--primary-color);
  color: white;
}

/* Scrollbar Styling - Hidden */
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: transparent;
}

/* Hide scrollbar for Firefox */
* {
  scrollbar-width: none;
}

/* Hide scrollbar for IE, Edge */
body {
  -ms-overflow-style: none;
}

/* Focus Styles */
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Image Optimization */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Link Styles */
a {
  color: inherit;
  text-decoration: none;
}

/* Button Reset */
button {
  font-family: inherit;
}

/* Animations */
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

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

.slide-up {
  animation: slideUp 0.6s ease-out;
}

.scale-in {
  animation: scaleIn 0.5s ease-out;
}

/* Utility Classes */
.text-center {
  text-align: center;
}

.text-primary {
  color: var(--primary-color);
}

.bg-light {
  background: var(--bg-light);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Loading State */
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--border-color);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Responsive Typography */
@media (max-width: 768px) {
  body {
    font-size: 0.95rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  .container {
    padding: 0 1.5rem;
  }
}

/* Print Styles */
@media print {
  .header,
  .footer,
  .btn-primary,
  .btn-secondary {
    display: none;
  }

  .main-content {
    padding-top: 0;
  }

  * {
    background: white !important;
    color: black !important;
  }
}

/* Accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  html {
    scroll-behavior: auto;
  }
}

/* High Contrast Mode */
@media (prefers-contrast: high) {
  :root {
    --primary-color: #c00;
    --text-color: #000;
    --bg-light: #fff;
  }

  button,
  a {
    text-decoration: underline;
  }
}

/* Dark Mode Support (Optional - can be enabled later) */
@media (prefers-color-scheme: dark) {
  /* Uncomment to enable dark mode
  body {
    background: #1a1a1a;
    color: #f5f5f5;
  }

  .header {
    background: #2d2d2d;
  }
  */
}

/* Hover Effects Enhancement */
@media (hover: hover) and (pointer: fine) {
  .car-card:hover,
  .news-card:hover,
  .service-card:hover,
  .team-member:hover,
  .testimonial-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
  }
}

/* Mobile Touch Enhancements */
@media (hover: none) and (pointer: coarse) {
  button,
  a {
    min-height: 44px;
    min-width: 44px;
  }

  .car-card,
  .news-card,
  .service-card {
    transition: none;
  }

  .car-card:active,
  .news-card:active,
  .service-card:active {
    transform: scale(0.98);
  }
}

/* Performance Optimizations */
.car-card,
.news-card,
.service-card,
.team-member,
.testimonial-card {
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Grid Fallbacks */
@supports not (display: grid) {
  .cars-grid,
  .services-grid,
  .team-grid,
  .news-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .cars-grid > *,
  .services-grid > *,
  .team-grid > *,
  .news-grid > * {
    flex: 1 1 300px;
  }
}

/* Coming Soon Page */
.coming-soon {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;
}

.coming-soon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 99, 71, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(42, 157, 143, 0.1) 0%, transparent 50%);
  animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.coming-soon-content {
  text-align: center;
  z-index: 1;
  padding: 2rem;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.loader {
  margin-bottom: 3rem;
  position: relative;
  height: 150px;
}

.car-loader {
  position: relative;
  width: 120px;
  height: 60px;
  margin: 0 auto;
  animation: drive 2s ease-in-out infinite;
}

@keyframes drive {
  0%, 100% {
    transform: translateX(-50px);
  }
  50% {
    transform: translateX(50px);
  }
}

.car-body {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 35px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  border-radius: 15px 15px 5px 5px;
  box-shadow: 0 5px 20px rgba(255, 99, 71, 0.3);
}

.car-body::before {
  content: '';
  position: absolute;
  top: -15px;
  left: 20px;
  width: 40px;
  height: 20px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  border-radius: 8px 8px 0 0;
}

.car-body::after {
  content: '';
  position: absolute;
  top: -10px;
  left: 25px;
  width: 30px;
  height: 12px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.car-wheel {
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 20px;
  background: #333;
  border-radius: 50%;
  border: 3px solid #555;
  animation: rotate 0.5s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.wheel-left {
  left: 15px;
}

.wheel-right {
  right: 15px;
}

.coming-soon-title {
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% {
    filter: brightness(1) drop-shadow(0 0 10px rgba(255, 99, 71, 0.5));
  }
  50% {
    filter: brightness(1.2) drop-shadow(0 0 20px rgba(255, 99, 71, 0.8));
  }
}

.coming-soon-subtitle {
  font-size: 2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
}

.coming-soon-text {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 2rem;
  font-weight: 300;
}

.spinner-dots {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
}

.spinner-dots span {
  width: 12px;
  height: 12px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: bounce 1.4s ease-in-out infinite;
  box-shadow: 0 0 10px var(--primary-color);
}

.spinner-dots span:nth-child(1) {
  animation-delay: 0s;
}

.spinner-dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.spinner-dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0.8) translateY(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1.2) translateY(-20px);
    opacity: 1;
  }
}

/* Responsive Design for Coming Soon */
@media (max-width: 768px) {
  .coming-soon-title {
    font-size: 2.5rem;
  }

  .coming-soon-subtitle {
    font-size: 1.5rem;
  }

  .coming-soon-text {
    font-size: 1rem;
  }

  .car-loader {
    width: 80px;
    height: 40px;
  }

  .car-body {
    width: 70px;
    height: 25px;
  }

  .car-body::before {
    width: 30px;
    height: 15px;
    left: 15px;
  }

  .car-wheel {
    width: 15px;
    height: 15px;
  }

  .wheel-left {
    left: 10px;
  }

  .wheel-right {
    right: 10px;
  }
}
</style>
