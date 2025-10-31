<template>
  <div class="about">
    <section class="page-hero">
      <div class="container">
        <h1>About Rentic</h1>
        <p>Your trusted partner in car rental and sales</p>
      </div>
    </section>

    <!-- Company Story -->
    <section class="company-story">
      <div class="container">
        <div class="story-content">
          <div class="story-text">
            <h2>Our Story</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
          </div>
          <div class="story-image">
            <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop" alt="Our Story" />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">Premium Cars</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">15K+</div>
            <div class="stat-label">Happy Customers</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">25+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Service Locations</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="services">
      <div class="container">
        <div class="section-header">
          <h2>Our Services</h2>
          <p>We provide comprehensive automotive solutions</p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="9" cy="17" r="2" stroke-width="2"/>
                <circle cx="15" cy="17" r="2" stroke-width="2"/>
                <path d="M9 17H4v-7l3-3h10l3 3v7h-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Car Rental</h3>
            <p>
              Rent premium vehicles for any occasion. Flexible terms, competitive rates, and
              exceptional service guaranteed.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Car Sales</h3>
            <p>
              Browse our extensive inventory of luxury and performance vehicles. Expert guidance
              through every step of your purchase.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Insurance Services</h3>
            <p>
              Comprehensive insurance options to protect your investment. Tailored coverage plans
              for peace of mind.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="3" stroke-width="2"/>
                <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2m-6.2-14.2l4.2 4.2m0 6l-4.2 4.2" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Maintenance</h3>
            <p>
              Professional maintenance and repair services. Keep your vehicle in peak condition
              with our expert technicians.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="team">
      <div class="container">
        <div class="section-header">
          <h2>Our Agents</h2>
          <p>Meet the professionals dedicated to serving you</p>
        </div>
        <div class="team-grid">
          <div v-for="agent in agents" :key="agent.id" class="team-member">
            <div class="member-image">
              <img :src="agent.image" :alt="agent.name" />
            </div>
            <h3>{{ agent.name }}</h3>
            <p class="member-role">{{ agent.role }}</p>
            <p class="member-description">{{ agent.description }}</p>
            <div class="member-social">
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose Rentic</h2>
          <p>Experience the difference with our premium service</p>
        </div>
        <div class="reasons-grid">
          <div class="reason-item">
            <div class="reason-number">01</div>
            <h3>Best Prices</h3>
            <p>Competitive rates with no hidden fees. Transparent pricing you can trust.</p>
          </div>
          <div class="reason-item">
            <div class="reason-number">02</div>
            <h3>Wide Selection</h3>
            <p>From economy to luxury, find the perfect vehicle for your needs.</p>
          </div>
          <div class="reason-item">
            <div class="reason-number">03</div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer service whenever you need assistance.</p>
          </div>
          <div class="reason-item">
            <div class="reason-number">04</div>
            <h3>Trusted Quality</h3>
            <p>All vehicles regularly maintained and thoroughly inspected.</p>
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
    name: 'Andrew Walker',
    role: 'Senior Sales Agent',
    description: 'Specialized in luxury vehicles with 10+ years of experience.',
    image: 'https://i.pravatar.cc/300?img=12'
  },
  {
    id: 2,
    name: 'Fiona Lewis',
    role: 'Sales Consultant',
    description: 'Expert in sports cars and performance vehicles.',
    image: 'https://i.pravatar.cc/300?img=45'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Fleet Manager',
    description: 'Managing our extensive inventory with precision.',
    image: 'https://i.pravatar.cc/300?img=33'
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    role: 'Customer Relations',
    description: 'Ensuring exceptional customer experience every time.',
    image: 'https://i.pravatar.cc/300?img=47'
  }
])
</script>

<style scoped>
.about {
  padding-top: 80px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Page Hero */
.page-hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  padding: 4rem 0;
  text-align: center;
}

.page-hero h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 0.5rem;
}

.page-hero p {
  font-size: 1.2rem;
  color: #e63946;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
}

/* Company Story */
.company-story {
  padding: 6rem 0;
}

.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.story-text h2 {
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
}

.story-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1.5rem;
}

.story-image {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
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
  background: linear-gradient(135deg, #e63946 0%, #d62839 100%);
  padding: 4rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
}

.stat-item {
  text-align: center;
  color: white;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Services */
.services {
  padding: 6rem 0;
  background: #f8f9fa;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #e63946 0%, #d62839 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  box-shadow: 0 5px 20px rgba(230, 57, 70, 0.3);
}

.service-card h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.service-card p {
  color: #666;
  line-height: 1.8;
}

/* Team */
.team {
  padding: 6rem 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.team-member {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.member-image {
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #e63946;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-member h3 {
  font-size: 1.3rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.member-role {
  color: #e63946;
  font-weight: 600;
  margin-bottom: 1rem;
}

.member-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.member-social {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.member-social a {
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: all 0.3s ease;
}

.member-social a:hover {
  background: #e63946;
  color: white;
  transform: translateY(-3px);
}

/* Why Choose Us */
.why-choose {
  padding: 6rem 0;
  background: #f8f9fa;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
}

.reason-item {
  text-align: center;
}

.reason-number {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #e63946 0%, #d62839 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
  box-shadow: 0 5px 20px rgba(230, 57, 70, 0.3);
}

.reason-item h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.reason-item p {
  color: #666;
  line-height: 1.8;
}

/* Responsive */
@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2rem;
  }

  .story-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }
}
</style>

