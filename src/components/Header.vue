<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="header-top">
      <div class="container">
        <div class="header-top-content">
          <div class="logo">
            <router-link to="/">Rentic</router-link>
          </div>
          <nav class="nav" :class="{ 'nav-open': menuOpen }">
            <ul>
              <li>
                <router-link to="/" @click="closeMenu">Home</router-link>
              </li>
              <li>
                <router-link to="/cars" @click="closeMenu">All Cars</router-link>
              </li>
              <li>
                <router-link to="/about" @click="closeMenu">About Us</router-link>
              </li>
            </ul>
          </nav>
          <div class="header-actions">
            <a href="tel:1-800-458-5698" class="phone">1-800-458-5698</a>
            <button class="btn-primary">Let's Talk</button>
            <button class="menu-toggle" @click="toggleMenu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: all 0.4s ease;
}

.header-scrolled {
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.header-top {
  padding: 1.2rem 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header-top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.logo a:hover {
  color: #e63946;
}

.header-scrolled .logo a {
  text-shadow: none;
}

.nav ul {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #ff6347;
  transition: width 0.3s ease;
}

.nav a:hover::after,
.nav a.router-link-active::after {
  width: 100%;
}

.nav a:hover,
.nav a.router-link-active {
  color: #ff6347;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.phone {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.phone:hover {
  color: #ff6347;
}

.btn-primary {
  background: #ff6347;
  color: white;
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.btn-primary:hover {
  background: #ff4500;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 99, 71, 0.4);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.header-scrolled .menu-toggle span {
  background: white;
}

@media (max-width: 968px) {
  .nav {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: white;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-120%);
    transition: transform 0.3s ease;
  }

  .nav-open {
    transform: translateY(0);
  }

  .nav ul {
    flex-direction: column;
    gap: 1.5rem;
  }

  .menu-toggle {
    display: flex;
  }

  .phone {
    display: none;
  }
}

@media (max-width: 640px) {
  .btn-primary {
    display: none;
  }
}
</style>

