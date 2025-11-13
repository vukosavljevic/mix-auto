<template>
  <div class="admin">
    <!-- Login Screen -->
    <div v-if="!isLoggedIn" class="login-section">
      <div class="login-container">
        <div class="login-header">
          <img src="/croppedin.png" alt="Mix Auto Logo" class="logo">
          <h1>Admin <span class="highlight">Panel</span></h1>
          <p>Prijavite se za pristup admin panelu</p>
        </div>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Email adresa</label>
            <input 
              type="email" 
              id="email"
              v-model="credentials.email"
              class="form-input"
              placeholder="Unesite email adresu"
              required
              :disabled="isLoading"
            />
          </div>
          
          <div class="form-group">
            <label for="password">Lozinka</label>
            <input 
              type="password" 
              id="password"
              v-model="credentials.password"
              class="form-input"
              placeholder="Unesite lozinku"
              required
              :disabled="isLoading"
            />
          </div>

          <p v-if="loginError" class="error-message">{{ loginError }}</p>
          
          <button type="submit" class="btn-login" :disabled="isLoading">
            {{ isLoading ? 'Prijavljivanje...' : 'Prijavi se' }}
          </button>
        </form>
      </div>
    </div>

    <!-- Admin Dashboard -->
    <div v-else class="admin-dashboard">
      <!-- Header -->
      <div class="dashboard-header">
        <div class="header-content">
          <h1>Admin <span class="highlight">Dashboard</span></h1>
          <button @click="handleLogout" class="btn-logout">Odjavi se</button>
        </div>
      </div>

      <!-- Stats -->
      <div class="stats-section">
        <div class="stat-card">
          <div class="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="9" cy="17" r="2" stroke-width="2"/>
              <circle cx="15" cy="17" r="2" stroke-width="2"/>
              <path d="M9 17H4v-7l3-3h10l3 3v7h-5" stroke-width="2"/>
            </svg>
          </div>
          <div class="stat-content">
            <h3>{{ totalCars }}</h3>
            <p>Ukupno automobila</p>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke-width="2"/>
            </svg>
          </div>
          <div class="stat-content">
            <h3>{{ carsForSale }}</h3>
            <p>Na prodaju</p>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke-width="2"/>
              <line x1="16" y1="2" x2="16" y2="6" stroke-width="2"/>
              <line x1="8" y1="2" x2="8" y2="6" stroke-width="2"/>
              <line x1="3" y1="10" x2="21" y2="10" stroke-width="2"/>
            </svg>
          </div>
          <div class="stat-content">
            <h3>{{ carsForRent }}</h3>
            <p>Za najam</p>
          </div>
        </div>
      </div>

      <!-- Add/Edit Car Section -->
      <div class="add-car-section">
        <h2>{{ editingCar ? 'Uredi' : 'Dodaj novi' }} <span class="highlight">automobil</span></h2>
        
        <form @submit.prevent="editingCar ? handleUpdateCar() : handleAddCar()" class="add-car-form">
          <div class="form-row">
            <div class="form-group">
              <label>Naziv automobila *</label>
              <input 
                type="text" 
                v-model="newCar.name"
                placeholder="npr. BMW 320d"
                required
              />
            </div>

            <div class="form-group">
              <label>Proizvođač *</label>
              <input 
                type="text" 
                v-model="newCar.manufacturer"
                placeholder="npr. BMW"
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Godina *</label>
              <input 
                type="number" 
                v-model="newCar.year"
                placeholder="2023"
                required
              />
            </div>

            <div class="form-group">
              <label>Cijena (€) *</label>
              <input 
                type="number" 
                v-model="newCar.price"
                placeholder="25000"
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Status *</label>
              <select v-model="newCar.status" required>
                <option value="">Odaberite status</option>
                <option value="sale">Prodaja</option>
                <option value="rent">Najam</option>
              </select>
            </div>

            <div class="form-group">
              <label>Tip vozila *</label>
              <select v-model="newCar.type" required>
                <option value="">Odaberite tip</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Coupe">Coupe</option>
                <option value="Sport">Sport</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Wagon">Wagon</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Kilometraža</label>
              <input 
                type="number" 
                v-model="newCar.mileage"
                placeholder="50000"
              />
            </div>

            <div class="form-group">
              <label>Gorivo</label>
              <input 
                type="text" 
                v-model="newCar.fuel"
                placeholder="Diesel"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Mjenjač</label>
              <input 
                type="text" 
                v-model="newCar.transmission"
                placeholder="Automatic"
              />
            </div>

            <div class="form-group">
              <label>Grad</label>
              <input 
                type="text" 
                v-model="newCar.city"
                placeholder="Zagreb"
              />
            </div>
          </div>

          <div class="form-group">
            <label>Slika automobila</label>
            <input 
              type="file" 
              @change="handleImageSelect"
              accept="image/*"
              class="file-input"
            />
            <div v-if="selectedImage" class="image-preview">
              <img :src="selectedImagePreview" alt="Preview" />
              <button type="button" @click="clearImage" class="btn-remove-image">Ukloni sliku</button>
            </div>
            <div v-else-if="newCar.image" class="image-url-display">
              <p>Trenutna slika:</p>
              <img :src="newCar.image" alt="Current" />
            </div>
            <p class="form-help">Ili unesite URL slike:</p>
            <input 
              type="url" 
              v-model="newCar.image"
              placeholder="https://example.com/car-image.jpg"
            />
          </div>

          <div class="form-group">
            <label>Opis automobila</label>
            <textarea 
              v-model="newCar.description"
              placeholder="Detaljan opis automobila..."
              rows="4"
            ></textarea>
          </div>

          <div class="form-group">
            <label>Motor</label>
            <input 
              type="text" 
              v-model="newCar.engine"
              placeholder="npr. 2.0 L TDI"
            />
          </div>

          <div class="form-group">
            <label>Agent</label>
            <input 
              type="text" 
              v-model="newCar.agent"
              placeholder="npr. John Doe"
            />
          </div>

          <p v-if="addCarMessage" :class="addCarMessageType === 'error' ? 'error-message' : 'success-message'">{{ addCarMessage }}</p>
          
          <div class="form-actions">
            <button type="submit" class="btn-add-car" :disabled="isLoading">
              {{ isLoading ? 'Spremanje...' : (editingCar ? 'Spremi promjene' : 'Dodaj automobil') }}
            </button>
            <button v-if="editingCar" type="button" @click="cancelEdit" class="btn-cancel">
              Odustani
            </button>
          </div>
        </form>
      </div>

      <!-- Cars List -->
      <div class="cars-list-section">
        <h2>Svi <span class="highlight">automobili</span></h2>
        
        <div class="cars-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Naziv</th>
                <th>Godina</th>
                <th>Cijena</th>
                <th>Status</th>
                <th>Tip</th>
                <th>Akcije</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="car in carsList" :key="car.id">
                <td>{{ car.id }}</td>
                <td>{{ car.name }}</td>
                <td>{{ car.year }}</td>
                <td>€{{ car.price.toLocaleString() }}</td>
                <td>
                  <span class="badge" :class="car.status">
                    {{ car.status === 'sale' ? 'Prodaja' : 'Najam' }}
                  </span>
                </td>
                <td>{{ car.type }}</td>
                <td>
                  <div class="action-buttons">
                    <button @click="handleEditCar(car)" class="btn-edit">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Uredi
                    </button>
                    <button @click="handleDeleteCar(car.id)" class="btn-delete">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="3 6 5 6 21 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="10" y1="11" x2="10" y2="17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="14" y1="11" x2="14" y2="17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Obriši
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin {
  background: #0a0a0a;
  min-height: 100vh;
  padding-top: 5rem;
}

/* Login Section */
.login-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 184, 0, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.04) 0%, transparent 30%),
    #0a0a0a;
  position: relative;
  overflow: hidden;
}

.login-section::before {
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

.login-container {
  background: linear-gradient(135deg, #252525 0%, #1f1f1f 100%);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  max-width: 450px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.login-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.logo {
  width: 150px;
  margin-bottom: 1.5rem;
}

.login-header h1 {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.highlight {
  color: #FFB800;
}

.login-header p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
}

.form-input,
.form-group input,
.form-group select,
.form-group textarea {
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  color: white;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.form-input::placeholder,
.form-group input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-input:focus,
.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #FFB800;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 4px rgba(255, 184, 0, 0.1);
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 3rem;
}

.form-group select option {
  background: #1a1a1a;
  color: white;
}

.error-message {
  color: #fca5a5;
  background: rgba(220, 38, 38, 0.2);
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(220, 38, 38, 0.3);
  font-size: 0.9rem;
  text-align: center;
}

.success-message {
  color: #86efac;
  background: rgba(34, 197, 94, 0.2);
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(34, 197, 94, 0.3);
  font-size: 0.9rem;
  text-align: center;
}

.btn-login,
.btn-add-car {
  background: linear-gradient(135deg, #FFB800 0%, #FFA500 100%);
  color: #1a1a1a;
  border: none;
  padding: 1.2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(255, 184, 0, 0.4);
}

.btn-login:hover,
.btn-add-car:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 184, 0, 0.6);
}

/* Admin Dashboard */
.admin-dashboard {
  padding: 2rem;
  max-width: 1600px;
  margin: 0 auto;
}

.dashboard-header {
  background: linear-gradient(135deg, #252525 0%, #1f1f1f 100%);
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content h1 {
  font-size: 2.5rem;
  color: white;
  font-weight: 600;
}

.btn-logout {
  background: rgba(220, 38, 38, 0.2);
  color: #fca5a5;
  border: 2px solid rgba(220, 38, 38, 0.3);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-logout:hover {
  background: rgba(220, 38, 38, 0.3);
  border-color: rgba(220, 38, 38, 0.5);
  transform: translateY(-2px);
}

/* Stats Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: linear-gradient(135deg, #252525 0%, #1f1f1f 100%);
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: rgba(255, 184, 0, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 184, 0, 0.15);
}

.stat-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #FFB800 0%, #FFA500 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  box-shadow: 0 8px 25px rgba(255, 184, 0, 0.6);
}

.stat-content h3 {
  font-size: 2.5rem;
  color: white;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.stat-content p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}

/* Add Car Section */
.add-car-section {
  background: linear-gradient(135deg, #252525 0%, #1f1f1f 100%);
  padding: 2.5rem;
  border-radius: 16px;
  margin-bottom: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.add-car-section h2 {
  font-size: 2rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: 600;
}

.add-car-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Cars List Section */
.cars-list-section {
  background: linear-gradient(135deg, #252525 0%, #1f1f1f 100%);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.cars-list-section h2 {
  font-size: 2rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: 600;
}

.cars-table {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: rgba(255, 184, 0, 0.1);
}

th {
  padding: 1rem;
  text-align: left;
  color: #FFB800;
  font-weight: 600;
  font-size: 0.95rem;
  border-bottom: 2px solid rgba(255, 184, 0, 0.3);
}

td {
  padding: 1rem;
  color: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

tbody tr {
  transition: all 0.2s ease;
}

tbody tr:hover {
  background: rgba(255, 184, 0, 0.05);
}

.badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

.badge.sale {
  background: rgba(34, 197, 94, 0.2);
  color: #86efac;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.badge.rent {
  background: rgba(59, 130, 246, 0.2);
  color: #93c5fd;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.btn-delete {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(220, 38, 38, 0.2);
  color: #fca5a5;
  border: 2px solid rgba(220, 38, 38, 0.3);
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.btn-delete:hover {
  background: rgba(220, 38, 38, 0.3);
  border-color: rgba(220, 38, 38, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
}

.btn-delete svg {
  flex-shrink: 0;
}

/* Edit Button */
.btn-edit {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(59, 130, 246, 0.2);
  color: #93c5fd;
  border: 2px solid rgba(59, 130, 246, 0.3);
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  margin-right: 0.5rem;
}

.btn-edit:hover {
  background: rgba(59, 130, 246, 0.3);
  border-color: rgba(59, 130, 246, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.btn-edit svg {
  flex-shrink: 0;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

/* Image Upload */
.file-input {
  padding: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  color: white;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  width: 100%;
  cursor: pointer;
}

.file-input:focus {
  outline: none;
  border-color: #FFB800;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 4px rgba(255, 184, 0, 0.1);
}

.image-preview,
.image-url-display {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 184, 0, 0.1);
}

.image-preview img,
.image-url-display img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.image-url-display p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.btn-remove-image {
  background: rgba(220, 38, 38, 0.2);
  color: #fca5a5;
  border: 2px solid rgba(220, 38, 38, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.btn-remove-image:hover {
  background: rgba(220, 38, 38, 0.3);
  border-color: rgba(220, 38, 38, 0.5);
}

.form-help {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

/* Form Actions */
.form-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn-cancel {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 1.2rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-cancel:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.btn-add-car:disabled,
.btn-login:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 768px) {
  .admin-dashboard {
    padding: 1rem;
  }

  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .header-content h1 {
    font-size: 2rem;
  }

  .stats-section {
    grid-template-columns: 1fr;
  }

  .login-container {
    padding: 2rem;
  }

  .login-header h1 {
    font-size: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  table {
    font-size: 0.85rem;
  }

  th, td {
    padding: 0.75rem 0.5rem;
  }
}
</style>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase } from '../lib/supabase'
import { createCar, updateCar, deleteCar, uploadCarImage } from '../lib/carsService'
import { useCars } from '../composables/useCars'

// Login state
const isLoggedIn = ref(false)
const credentials = ref({
  email: '',
  password: ''
})
const loginError = ref('')
const isLoading = ref(false)

// Koristi shared cars state
const { cars: carsList, refreshCars } = useCars()

// Admin local state
const addCarMessage = ref('')
const addCarMessageType = ref('success')
const editingCar = ref(null)

// Image upload state
const selectedImage = ref(null)
const selectedImagePreview = ref(null)

// New car form
const newCar = ref({
  name: '',
  manufacturer: '',
  year: '',
  price: '',
  status: '',
  type: '',
  mileage: '',
  fuel: '',
  transmission: '',
  city: '',
  image: '',
  description: '',
  engine: '',
  agent: ''
})

// Computed stats
const totalCars = computed(() => carsList.value.length)
const carsForSale = computed(() => carsList.value.filter(car => car.status === 'sale').length)
const carsForRent = computed(() => carsList.value.filter(car => car.status === 'rent').length)

// Check authentication on mount
onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession()
  if (session) {
    isLoggedIn.value = true
    await refreshCars() // Učitaj/osvježi automobile
  }

  // Listen for auth changes
  supabase.auth.onAuthStateChange((event, session) => {
    isLoggedIn.value = !!session
    if (session) {
      refreshCars() // Osvježi automobile kada se korisnik logira
    }
  })
})

// Login handler
const handleLogin = async () => {
  isLoading.value = true
  loginError.value = ''
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email: credentials.value.email,
    password: credentials.value.password
  })

  if (error) {
    loginError.value = 'Netočna email adresa ili lozinka'
    isLoading.value = false
  } else {
    isLoggedIn.value = true
    await refreshCars() // Osvježi shared cache nakon prijave
    isLoading.value = false
  }
}

// Logout handler
const handleLogout = async () => {
  await supabase.auth.signOut()
  isLoggedIn.value = false
  credentials.value = { email: '', password: '' }
  editingCar.value = null
  resetForm()
}

// Handle image selection
const handleImageSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    selectedImage.value = file
    const reader = new FileReader()
    reader.onload = (e) => {
      selectedImagePreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

// Clear selected image
const clearImage = () => {
  selectedImage.value = null
  selectedImagePreview.value = null
  const fileInput = document.querySelector('.file-input')
  if (fileInput) fileInput.value = ''
}

// Reset form
const resetForm = () => {
  newCar.value = {
    name: '',
    manufacturer: '',
    year: '',
    price: '',
    status: '',
    type: '',
    mileage: '',
    fuel: '',
    transmission: '',
    city: '',
    image: '',
    description: '',
    engine: '',
    agent: ''
  }
  clearImage()
  editingCar.value = null
}

// Add car handler
const handleAddCar = async () => {
  isLoading.value = true
  addCarMessage.value = ''
  
  try {
    // Upload image if selected
    let imageUrl = newCar.value.image
    
    if (selectedImage.value) {
      const { url, error: uploadError } = await uploadCarImage(selectedImage.value, null)
      if (uploadError) {
        addCarMessage.value = 'Greška pri uploadu slike: ' + uploadError.message
        addCarMessageType.value = 'error'
        isLoading.value = false
        return
      }
      imageUrl = url
    }

    const carData = {
      name: newCar.value.name,
      manufacturer: newCar.value.manufacturer,
      year: parseInt(newCar.value.year),
      price: parseInt(newCar.value.price),
      status: newCar.value.status,
      type: newCar.value.type,
      mileage: newCar.value.mileage ? parseInt(newCar.value.mileage) : 0,
      fuel: newCar.value.fuel || 'Diesel',
      transmission: newCar.value.transmission || 'Manual',
      city: newCar.value.city || 'Zagreb',
      image: imageUrl || 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&q=80',
      description: newCar.value.description || '',
      engine: newCar.value.engine || '',
      agent: newCar.value.agent || ''
    }

    const { data, error } = await createCar(carData)
    
    if (error) {
      addCarMessage.value = 'Greška pri dodavanju automobila: ' + error.message
      addCarMessageType.value = 'error'
    } else {
      addCarMessage.value = 'Automobil je uspješno dodan!'
      addCarMessageType.value = 'success'
      await refreshCars() // Osvježi shared cache
      resetForm()
      
      setTimeout(() => {
        addCarMessage.value = ''
      }, 3000)
    }
  } catch (error) {
    addCarMessage.value = 'Greška: ' + error.message
    addCarMessageType.value = 'error'
  }
  
  isLoading.value = false
}

// Edit car handler
const handleEditCar = (car) => {
  editingCar.value = car.id
  newCar.value = {
    name: car.name || '',
    manufacturer: car.manufacturer || '',
    year: car.year || '',
    price: car.price || '',
    status: car.status || '',
    type: car.type || '',
    mileage: car.mileage || '',
    fuel: car.fuel || '',
    transmission: car.transmission || '',
    city: car.city || '',
    image: car.image || '',
    description: car.description || '',
    engine: car.engine || '',
    agent: car.agent || ''
  }
  
  // Scroll to form
  document.querySelector('.add-car-section')?.scrollIntoView({ behavior: 'smooth' })
}

// Update car handler
const handleUpdateCar = async () => {
  if (!editingCar.value) return
  
  isLoading.value = true
  addCarMessage.value = ''
  
  try {
    // Upload new image if selected
    let imageUrl = newCar.value.image
    
    if (selectedImage.value) {
      const { url, error: uploadError } = await uploadCarImage(selectedImage.value, editingCar.value)
      if (uploadError) {
        addCarMessage.value = 'Greška pri uploadu slike: ' + uploadError.message
        addCarMessageType.value = 'error'
        isLoading.value = false
        return
      }
      imageUrl = url
    }

    const carData = {
      name: newCar.value.name,
      manufacturer: newCar.value.manufacturer,
      year: parseInt(newCar.value.year),
      price: parseInt(newCar.value.price),
      status: newCar.value.status,
      type: newCar.value.type,
      mileage: newCar.value.mileage ? parseInt(newCar.value.mileage) : 0,
      fuel: newCar.value.fuel || 'Diesel',
      transmission: newCar.value.transmission || 'Manual',
      city: newCar.value.city || 'Zagreb',
      image: imageUrl,
      description: newCar.value.description || '',
      engine: newCar.value.engine || '',
      agent: newCar.value.agent || ''
    }

    const { data, error } = await updateCar(editingCar.value, carData)
    
    if (error) {
      addCarMessage.value = 'Greška pri ažuriranju automobila: ' + error.message
      addCarMessageType.value = 'error'
    } else {
      addCarMessage.value = 'Automobil je uspješno ažuriran!'
      addCarMessageType.value = 'success'
      await refreshCars() // Osvježi shared cache
      resetForm()
      
      setTimeout(() => {
        addCarMessage.value = ''
      }, 3000)
    }
  } catch (error) {
    addCarMessage.value = 'Greška: ' + error.message
    addCarMessageType.value = 'error'
  }
  
  isLoading.value = false
}

// Cancel edit
const cancelEdit = () => {
  resetForm()
}

// Delete car handler
const handleDeleteCar = async (carId) => {
  if (!confirm('Jeste li sigurni da želite obrisati ovaj automobil?')) {
    return
  }
  
  isLoading.value = true
  
  const { error } = await deleteCar(carId)
  
  if (error) {
    addCarMessage.value = 'Greška pri brisanju automobila: ' + error.message
    addCarMessageType.value = 'error'
  } else {
    addCarMessage.value = 'Automobil je uspješno obrisan!'
    addCarMessageType.value = 'success'
    await refreshCars() // Osvježi shared cache
    
    setTimeout(() => {
      addCarMessage.value = ''
    }, 3000)
  }
  
  isLoading.value = false
}
</script>