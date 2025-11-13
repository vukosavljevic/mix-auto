<template>
  <div class="contact">
    <section class="page-hero">
      <div class="container">
        <h1>Kontaktirajte <span class="highlight">nas</span></h1>
        <p>Ovdje smo da vam pomognemo - javite nam se!</p>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Information -->
          <div class="contact-info">
            <h2>Pošaljite nam <span class="highlight">poruku</span></h2>
            <p class="contact-intro">
              Imate pitanje? Trebate pomoć? Naš tim je spreman odgovoriti na sva vaša pitanja.
            </p>

            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke-width="2"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Adresa</h3>
                  <p>Ul. Josipa Jurja Strossmayera 131<br />31000 Osijek, Hrvatska</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Telefon</h3>
                  <p><a href="tel:+385915105829">+385 91 5105 829</a></p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Email</h3>
                  <p><a href="mailto:mixautomobili@gmail.com">mixautomobili@gmail.com</a></p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" stroke-width="2"/>
                    <polyline points="12 6 12 12 16 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="info-content">
                  <h3>Radno Vrijeme</h3>
                  <p>Pon - Pet: 08:00 - 20:00<br />Sub: 09:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Image -->
          <div class="contact-image-wrapper">
            <img src="/speed.jpg" alt="Kontakt" class="contact-image" />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// Contact page component
</script>

<style scoped>
.contact {
  padding-top: 100px;
  background: #0a0a0a;
  min-height: 100vh;
}

.container {
  max-width: 1400px;
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

.page-hero h1 .highlight {
  color: #FFB800;
}

.page-hero p {
  font-size: 1.2rem;
  color: #FFB800;
  position: relative;
  z-index: 1;
}

/* Contact Section */
.contact-section {
  padding: 7rem 0;
  background: 
    radial-gradient(ellipse at 50% 50%, rgba(255, 184, 0, 0.05) 0%, transparent 60%),
    linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
}

.contact-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(ellipse at 15% 60%, rgba(255, 255, 255, 0.025) 0%, transparent 25%),
    radial-gradient(circle at 85% 40%, rgba(255, 255, 255, 0.02) 0%, transparent 18%),
    radial-gradient(circle at 30% 70%, rgba(255, 184, 0, 0.03) 0%, transparent 40%);
  animation: shimmerSlow 10s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes shimmerSlow {
  0% { opacity: 0.3; }
  100% { opacity: 0.6; }
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: stretch;
  position: relative;
  z-index: 1;
}

/* Contact Info */
.contact-info h2 {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 600;
}

.contact-info h2 .highlight,
.highlight {
  color: #FFB800;
}

.contact-intro {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  margin-bottom: 3rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 1.5rem;
  background: linear-gradient(135deg, #252525 0%, #1f1f1f 100%);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.info-item:hover {
  border-color: rgba(255, 184, 0, 0.3);
  transform: translateX(10px);
  box-shadow: 0 10px 30px rgba(255, 184, 0, 0.15);
}

.info-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #FFB800 0%, #FFA500 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  flex-shrink: 0;
  box-shadow: 0 8px 25px rgba(255, 184, 0, 0.6);
  transition: all 0.3s ease;
}

.info-item:hover .info-icon {
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(255, 184, 0, 0.8);
}

.info-content h3 {
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.info-content p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.info-content a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-content a:hover {
  color: #FFB800;
}

/* Contact Image */
.contact-image-wrapper {
  background: linear-gradient(135deg, #252525 0%, #1f1f1f 100%);
  padding: 0;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-image-wrapper:hover {
  border-color: rgba(255, 184, 0, 0.2);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);
}

.contact-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.contact-image-wrapper:hover .contact-image {
  transform: scale(1.05);
}

/* Map Section */
.map-section {
  width: 100%;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
}

.map-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 30% 50%, rgba(255, 184, 0, 0.03) 0%, transparent 40%),
    radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 35%);
  pointer-events: none;
  z-index: 1;
}

.map-placeholder {
  width: 100%;
  height: 450px;
  background: #1a1a1a;
  position: relative;
}

.map-placeholder iframe {
  filter: grayscale(30%) brightness(0.85);
  position: relative;
  z-index: 0;
}

.map-link-wrapper {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.map-link-btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #FFB800 0%, #FFA500 100%);
  color: #1a1a1a;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(255, 184, 0, 0.3);
}

.map-link-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 184, 0, 0.5);
}

/* Responsive */
@media (max-width: 1024px) {
  .container {
    padding: 0 2rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contact {
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

  .contact-section {
    padding: 4rem 0;
  }

  .contact-info h2 {
    font-size: 2rem;
  }

  .contact-intro {
    font-size: 1rem;
  }

  .info-items {
    gap: 1.5rem;
  }

  .info-item {
    padding: 1.2rem;
  }

  .info-icon {
    width: 50px;
    height: 50px;
  }

  .contact-image-wrapper {
    height: 100%;
  }

  .map-placeholder {
    height: 300px;
  }
}
</style>

