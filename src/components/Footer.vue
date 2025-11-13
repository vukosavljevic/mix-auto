<template>
  <footer class="footer">
    <div class="footer-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Kontaktirajte nas za najbolju ponudu</h2>
          <router-link to="/cars" class="btn-white">Pogledaj automobile</router-link>
        </div>
      </div>
    </div>
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h3>MIX-AUTO</h3>
            <p>Vaš pouzdani partner za kupnju, prodaju i uvoz kvalitetnih automobila.</p>
          </div>
          <div class="footer-col">
            <h3>Kontakt</h3>
            <p>Hrvatska - Osijek</p>
            <a href="mailto:mixautomobili@gmail.com">mixautomobili@gmail.com</a>
            <a href="tel:+385915105829">+385 91 5105 829</a>
          </div>
          <div class="footer-col">
            <h3>Linkovi</h3>
            <ul>
              <li><router-link to="/">Početna</router-link></li>
              <li><router-link to="/cars">Automobili</router-link></li>
              <li><router-link to="/about">O Nama</router-link></li>
              <li><router-link to="/contact">Kontakt</router-link></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Pratite nas</h3>
            <div class="social-links">
              <a href="https://www.facebook.com/p/MIX-AUTO-100057189051256/?locale=hr_HR" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2025 MIX-AUTO. Sva prava pridržana.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1a1a1a;
  color: #fff;
}

.footer-cta {
  background: linear-gradient(135deg, #ffc107 0%, #ffb300 100%);
  padding: 3rem 0;
}

.cta-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.cta-content h2 {
  font-size: 2rem;
  margin: 0;
  color: #1a1a1a;
  font-weight: 700;
}

.btn-white {
  background: #1a1a1a;
  color: #ffc107;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
}

.footer-main {
  padding: 4rem 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer-col h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ffc107;
  font-weight: 700;
}

.footer-col p {
  color: #999;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.footer-col a {
  color: #999;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-col a:hover {
  color: #ffc107;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col ul li {
  margin-bottom: 0.8rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-links a {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: #ffc107;
  transform: translateY(-3px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  text-align: center;
}

.footer-bottom p {
  color: #999;
  margin: 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .cta-content {
    flex-direction: column;
    text-align: center;
  }

  .cta-content h2 {
    font-size: 1.5rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>

