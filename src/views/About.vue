<template>
  <div class="about">
    <section class="page-hero">
      <div class="container">
        <h1>O <span class="highlight">nama</span></h1>
        <p>Vaš pouzdani partner za kupnju i prodaju automobila</p>
      </div>
    </section>

    <!-- Company Story -->
    <section class="company-story">
      <div class="container">
        <div class="story-content">
          <div class="story-text">
            <h2>Naša <span class="highlight">priča</span></h2>
            <p>
              Mix Auto je specijalizirana tvrtka za prodaju i kupnju kvalitetnih polovnih automobila. 
              S godinama iskustva u automobilskoj industriji, postali smo pouzdano ime na tržištu, 
              pružajući vrhunsku uslugu i kvalitetna vozila našim klijentima.
            </p>
            <p>
              Naša misija je pružiti vam najbolje vozilo po najpovoljnijoj cijeni, uz transparentnost 
              u svakom koraku procesa kupnje ili prodaje. Također nudimo posredovanje u prodaji automobila, 
              uvoz vozila iz Njemačke po narudžbi te profesionalan otkup automobila.
            </p>
          </div>
          <div class="story-image">
            <img src="/story.jpg" alt="Naša priča" />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">1500+</div>
            <div class="stat-label">Prodanih automobila</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">2000+</div>
            <div class="stat-label">Zadovoljnih kupaca</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">25+</div>
            <div class="stat-label">Godina iskustva</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Povjerenje</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="services">
      <div class="container">
        <div class="section-header">
          <h2>Naše <span class="highlight">usluge</span></h2>
          <p>Pružamo sveobuhvatna rješenja za vaše automobilske potrebe</p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Prodaja automobila</h3>
            <p>
              Pregledajte našu bogatu ponudu kvalitetnih polovnih automobila. Stručno vas vodimo 
              kroz svaki korak vašeg poslovanja.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="9 22 9 12 15 12 15 22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Uvoz iz Njemačke</h3>
            <p>
              Uvoz automobila iz Njemačke po vašoj narudžbi. Pronađemo i uvezemo vozilo koje 
              savršeno odgovara vašim željama.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="12" y1="22.08" x2="12" y2="12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Otkup automobila</h3>
            <p>
              Profesionalan otkup automobila po fer cijeni. Brza procjena i isplata uz svu 
              potrebnu dokumentaciju.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const agents = ref([
  {
    id: 1,
    name: 'Marko Horvat',
    role: 'Voditelj prodaje',
    description: 'Stručnjak za luksuzna vozila s više od 10 godina iskustva u automobilskoj industriji.',
    image: 'https://i.pravatar.cc/300?img=12'
  },
  {
    id: 2,
    name: 'Ana Kovačević',
    role: 'Prodajni savjetnik',
    description: 'Stručnjakinja za sportske i performance automobile sa strašću prema automobilizmu.',
    image: 'https://i.pravatar.cc/300?img=45'
  },
  {
    id: 3,
    name: 'Ivan Novak',
    role: 'Menadžer uvoza',
    description: 'Upravljam uvozom vozila iz Njemačke i osiguravam kvalitetu svakog automobila.',
    image: 'https://i.pravatar.cc/300?img=33'
  },
  {
    id: 4,
    name: 'Petra Jurić',
    role: 'Odnosi s klijentima',
    description: 'Brinem se za iznimno iskustvo svakog kupca i pružam podršku u svakom trenutku.',
    image: 'https://i.pravatar.cc/300?img=47'
  }
])
</script>

<style scoped>
.about {
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

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.section-header h2 .highlight {
  color: #FFB800;
}

.section-header p {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Company Story */
.company-story {
  padding: 7rem 0;
  background: 
    radial-gradient(ellipse at 50% 50%, rgba(255, 184, 0, 0.05) 0%, transparent 60%),
    linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
}

.company-story::after {
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

.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.story-text h2 {
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.story-text h2 .highlight {
  color: #FFB800;
}

.story-text p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 1.5rem;
}

.story-image {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  height: 500px;
}

.story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.story-image:hover img {
  transform: scale(1.05);
}

/* Stats */
.stats {
  background: linear-gradient(135deg, #FFB800 0%, #FFA500 100%);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.stats::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 35%),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 40%);
  animation: pulse 6s ease-in-out infinite;
  pointer-events: none;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.stats .container {
  position: relative;
  z-index: 1;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
}

.stat-item {
  text-align: center;
  color: #1a1a1a;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.85;
  font-weight: 600;
}

/* Services */
.services {
  padding: 7rem 0;
  background: 
    radial-gradient(ellipse at 50% 0%, rgba(255, 184, 0, 0.04) 0%, transparent 50%),
    linear-gradient(to bottom, #1a1a1a 0%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
}

.services::after {
  content: '';
  position: absolute;
  top: 20%;
  right: 10%;
  width: 40%;
  height: 60%;
  background: radial-gradient(circle, rgba(255, 184, 0, 0.02) 0%, transparent 50%);
  pointer-events: none;
}

.services .container {
  position: relative;
  z-index: 1;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

.service-card {
  background: linear-gradient(135deg, #252525 0%, #1f1f1f 100%);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 50px rgba(255, 184, 0, 0.2);
  border-color: rgba(255, 184, 0, 0.3);
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #FFB800 0%, #FFA500 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #1a1a1a;
  box-shadow: 0 8px 25px rgba(255, 184, 0, 0.6);
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
  box-shadow: 0 12px 35px rgba(255, 184, 0, 0.8);
}

.service-card h3 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 600;
}

.service-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  font-size: 1rem;
}

/* Team */
.team {
  padding: 7rem 0;
  background: 
    radial-gradient(circle at 15% 20%, rgba(255, 184, 0, 0.05) 0%, transparent 35%),
    radial-gradient(circle at 85% 40%, rgba(255, 255, 255, 0.03) 0%, transparent 30%),
    radial-gradient(circle at 50% 80%, rgba(255, 184, 0, 0.04) 0%, transparent 40%),
    #0a0a0a;
  position: relative;
  overflow: hidden;
}

.team::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle at 60% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 25%),
    radial-gradient(circle at 80% 70%, rgba(255, 184, 0, 0.03) 0%, transparent 30%);
  animation: shimmerSlow 10s ease-in-out infinite alternate;
  pointer-events: none;
}

.team .container {
  position: relative;
  z-index: 1;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

.team-member {
  background: linear-gradient(135deg, #252525 0%, #1f1f1f 100%);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 50px rgba(255, 184, 0, 0.2);
  border-color: rgba(255, 184, 0, 0.3);
}

.member-image {
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #FFB800;
  box-shadow: 0 8px 25px rgba(255, 184, 0, 0.4);
  transition: all 0.3s ease;
}

.team-member:hover .member-image {
  border-color: #FFA500;
  box-shadow: 0 12px 35px rgba(255, 184, 0, 0.6);
  transform: scale(1.05);
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-member h3 {
  font-size: 1.3rem;
  color: white;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.member-role {
  color: #FFB800;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.member-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.member-social {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.member-social a {
  width: 45px;
  height: 45px;
  background: rgba(255, 184, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFB800;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 184, 0, 0.2);
}

.member-social a:hover {
  background: linear-gradient(135deg, #FFB800 0%, #FFA500 100%);
  color: #1a1a1a;
  transform: translateY(-3px);
  border-color: #FFB800;
  box-shadow: 0 5px 20px rgba(255, 184, 0, 0.4);
}

/* Why Choose Us */
.why-choose {
  padding: 7rem 0;
  background: 
    radial-gradient(ellipse at 50% 100%, rgba(255, 184, 0, 0.04) 0%, transparent 50%),
    linear-gradient(to bottom, #1a1a1a 0%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
}

.why-choose::before {
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
    radial-gradient(ellipse, rgba(255, 184, 0, 0.02) 0%, transparent 60%);
  pointer-events: none;
}

.why-choose .container {
  position: relative;
  z-index: 1;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
}

.reason-item {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #252525 0%, #1f1f1f 100%);
  border-radius: 16px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.reason-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 50px rgba(255, 184, 0, 0.2);
  border-color: rgba(255, 184, 0, 0.3);
}

.reason-number {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #FFB800 0%, #FFA500 100%);
  color: #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
  box-shadow: 0 8px 25px rgba(255, 184, 0, 0.6);
  position: relative;
  transition: all 0.3s ease;
}

.reason-number::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #FFB800;
  opacity: 0;
  animation: pulseRing 2s infinite;
}

@keyframes pulseRing {
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

.reason-item:hover .reason-number {
  transform: scale(1.1);
  box-shadow: 0 12px 35px rgba(255, 184, 0, 0.8);
}

.reason-item h3 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 600;
}

.reason-item p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .container {
    padding: 0 2rem;
  }

  .story-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .story-image {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .about {
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

  .section-header h2 {
    font-size: 2rem;
  }

  .section-header p {
    font-size: 1rem;
  }

  .story-text h2 {
    font-size: 2rem;
  }

  .story-text p {
    font-size: 1rem;
  }

  .story-image {
    height: 300px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 0.95rem;
  }

  .services-grid,
  .team-grid,
  .reasons-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .service-card,
  .team-member,
  .reason-item {
    padding: 2rem 1.5rem;
  }

  .company-story,
  .services,
  .team,
  .why-choose {
    padding: 4rem 0;
  }

  .stats {
    padding: 3rem 0;
  }
}
</style>

