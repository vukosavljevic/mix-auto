import { ref, computed } from 'vue'
import { getAllCars } from '../lib/carsService'

// Global state za sve automobile
const cars = ref([])
const isLoading = ref(false)
const isLoaded = ref(false)
const error = ref(null)

/**
 * Composable za upravljanje automobilima
 * Automatski cache-ira podatke nakon prvog učitavanja
 */
export function useCars() {
  /**
   * Učitaj automobile samo ako već nisu učitani
   */
  const loadCars = async (force = false) => {
    // Ako su već učitani i ne forsiramo refresh, ne učitavaj ponovo
    if (isLoaded.value && !force) {
      return { data: cars.value, error: null }
    }

    isLoading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await getAllCars()
      
      if (fetchError) {
        error.value = fetchError
        isLoading.value = false
        return { data: null, error: fetchError }
      }

      cars.value = data || []
      isLoaded.value = true
      isLoading.value = false
      
      return { data: cars.value, error: null }
    } catch (err) {
      error.value = err
      isLoading.value = false
      return { data: null, error: err }
    }
  }

  /**
   * Osvježi podatke (force reload)
   */
  const refreshCars = async () => {
    return await loadCars(true)
  }

  /**
   * Dobavi auto po ID-u iz cache-a
   */
  const getCarById = (id) => {
    return cars.value.find(car => car.id === parseInt(id))
  }

  /**
   * Najnoviji automobili (prvih N)
   */
  const recentCars = computed(() => {
    return cars.value.slice(0, 6)
  })

  return {
    // State (vraćamo direktno refs, ne computed)
    cars,
    isLoading: computed(() => isLoading.value),
    isLoaded: computed(() => isLoaded.value),
    error: computed(() => error.value),
    
    // Methods
    loadCars,
    refreshCars,
    getCarById,
    recentCars,
  }
}

