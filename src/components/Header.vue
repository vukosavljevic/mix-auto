<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="header-top">
      <div class="container">
        <div class="header-top-content">
          <div class="nav-container">
            <div class="logo">
              <router-link to="/">
                <img src="/croppedin.png" alt="MIX-AUTO Logo" />
              </router-link>
            </div>
            <nav class="nav" :class="{ 'nav-open': menuOpen }">
              <button class="close-menu" @click="closeMenu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <ul>
                <li>
                  <router-link to="/" @click="closeMenu">Početna</router-link>
                </li>
                <li>
                  <router-link to="/cars" @click="closeMenu">Svi Automobili</router-link>
                </li>
                <li>
                  <router-link to="/about" @click="closeMenu">O Nama</router-link>
                </li>
                <li>
                  <router-link to="/contact" @click="closeMenu">Kontakt</router-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="header-actions">
            <a href="tel:+385915105829" class="phone">+385 91 5105 829</a>
            <router-link to="/contact" class="btn-primary">Kontaktirajte nas</router-link>
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
  background: rgba(26, 26, 26, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.header-scrolled .header-top {
  padding: 0.9rem 0;
}

.header-top {
  padding: 1.2rem 0;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 3rem;
}

.header-top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-direction: row;
  transition: opacity 0.3s ease;
  margin-top: 10px;
}

.logo a img {
  height: 60px;
  width: auto;
  filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.3));
  transition: all 0.3s ease;
}

.logo a:hover img {
  filter: drop-shadow(0 2px 10px rgba(255, 184, 0, 0.5));
  transform: scale(1.05);
}

.header-scrolled .logo a img {
  height: 65px;
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.2));
}

.nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 600;
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
  background: #FFB800;
  transition: width 0.3s ease;
}

.nav a:hover::after,
.nav a.router-link-active::after {
  width: 100%;
}

.nav a:hover,
.nav a.router-link-active {
  color: #FFB800;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.phone {
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.phone:hover {
  color: #FFB800;
}

.btn-primary {
  background: #FFB800;
  color: #1a1a1a;
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  background: #FFA500;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 184, 0, 0.5);
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

.close-menu {
  display: none;
}

@media (max-width: 968px) {
  .logo a img {
    height: 55px;
  }

  .nav-container {
    gap: 0;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    height: 100dvh;
    background: rgba(26, 26, 26, 0.98);
    backdrop-filter: blur(10px);
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .nav-open {
    transform: translateY(0);
  }

  .nav ul {
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
    display: flex;
    width: 100%;
  }

  .nav li {
    width: 100%;
    text-align: center;
  }

  .nav a {
    display: block;
    font-size: 1.8rem;
    padding: 1rem 2rem;
    width: 100%;
  }

  .close-menu {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;
  }

  .close-menu:hover {
    color: #FFB800;
    transform: rotate(90deg);
  }

  .close-menu svg {
    width: 28px;
    height: 28px;
  }

  .menu-toggle {
    display: flex;
  }

  .header-actions {
    background: transparent;
    padding: 0;
    gap: 1rem;
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

