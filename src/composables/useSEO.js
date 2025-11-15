import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useCars } from './useCars'

const siteName = 'MIX AUTO'
const siteUrl = 'https://mix-auto.hr'
const defaultDescription = 'MIX AUTO - Vaš pouzdani partner za prodaju, kupnju i uvoz kvalitetnih polovnih automobila. Posredovanje u prodaji, uvoz iz Njemačke po narudžbi i profesionalan otkup automobila. Osijek, Hrvatska.'
const defaultImage = `${siteUrl}/hero.jpg`

export function useSEO() {
  const route = useRoute()
  const { cars, isLoading, isLoaded } = useCars()

  const updateMetaTags = (meta) => {
    const {
      title,
      description = defaultDescription,
      image = defaultImage,
      url = `${siteUrl}${route.path}`,
      type = 'website'
    } = meta

    // Update document title
    if (title) {
      document.title = `${title} | ${siteName}`
    }

    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Primary meta tags
    updateMetaTag('title', title || `${siteName} - Prodaja i Kupnja Polovnih Automobila`)
    updateMetaTag('description', description)
    updateMetaTag('og:title', title || `${siteName} - Prodaja i Kupnja Polovnih Automobila`, 'property')
    updateMetaTag('og:description', description, 'property')
    updateMetaTag('og:image', image, 'property')
    updateMetaTag('og:url', url, 'property')
    updateMetaTag('og:type', type, 'property')
    updateMetaTag('twitter:title', title || `${siteName} - Prodaja i Kupnja Polovnih Automobila`, 'property')
    updateMetaTag('twitter:description', description, 'property')
    updateMetaTag('twitter:image', image, 'property')
    updateMetaTag('twitter:card', 'summary_large_image', 'property')

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }

  const addStructuredData = (data) => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
    existingScripts.forEach(script => {
      if (script.id === 'dynamic-structured-data') {
        script.remove()
      }
    })

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'dynamic-structured-data'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }

  const getCarStructuredData = (car) => {
    if (!car) return null

    return {
      '@context': 'https://schema.org',
      '@type': 'Vehicle',
      'name': car.name,
      'description': car.description || `${car.name} - ${car.year} - ${car.type}`,
      'image': car.image || defaultImage,
      'brand': {
        '@type': 'Brand',
        'name': car.manufacturer || 'Unknown'
      },
      'vehicleIdentificationNumber': car.id?.toString(),
      'modelDate': car.year?.toString(),
      'numberOfDoors': car.doors || '4',
      'fuelType': car.fuel || 'Gasoline',
      'vehicleTransmission': car.transmission || 'Automatic',
      'mileageFromOdometer': {
        '@type': 'QuantitativeValue',
        'value': car.mileage,
        'unitCode': 'KMT'
      },
      'offers': {
        '@type': 'Offer',
        'price': car.price,
        'priceCurrency': 'EUR',
        'availability': car.status === 'sale' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
        'url': `${siteUrl}/car/${car.id}`
      }
    }
  }

  const setupPageSEO = async () => {
    const path = route.path
    const carId = route.params.id

    // Wait for cars to load if needed
    if ((path === '/cars' || path.startsWith('/car/')) && !isLoaded.value && isLoading.value) {
      await nextTick()
      // Wait for cars to be loaded
      return
    }

    if (path === '/') {
      // Home page
      updateMetaTags({
        title: 'MIX AUTO - Prodaja i Kupnja Polovnih Automobila | Osijek, Hrvatska',
        description: 'MIX AUTO - Vaš pouzdani partner za prodaju, kupnju i uvoz kvalitetnih polovnih automobila. Posredovanje u prodaji, uvoz iz Njemačke po narudžbi i profesionalan otkup automobila. Osijek, Hrvatska.',
        url: siteUrl
      })
    } else if (path === '/cars') {
      // All cars page
      const carCount = cars.value?.length || 0
      updateMetaTags({
        title: 'Svi Automobili - MIX AUTO | Pregled Ponude Polovnih Automobila',
        description: `Pregledajte našu široku ponudu kvalitetnih polovnih automobila. ${carCount > 0 ? `Više od ${carCount} vozila na prodaju i najam.` : 'Automobili različitih marki, godišta i cijena.'} Osijek, Hrvatska.`,
        url: `${siteUrl}/cars`
      })
    } else if (path.startsWith('/car/') && carId) {
      // Car details page
      const car = cars.value?.find(c => c.id === parseInt(carId))
      if (car) {
        const carTitle = `${car.name} ${car.year} - ${car.price.toLocaleString()} € | MIX AUTO`
        const carDescription = `${car.name} ${car.year} - ${car.type} - ${car.mileage}K km - ${car.engine} - ${car.fuel} - ${car.transmission}. Cijena: ${car.price.toLocaleString()} €. ${car.description || 'Kvalitetan polovni automobil na prodaju.'}`
        
        updateMetaTags({
          title: carTitle,
          description: carDescription,
          image: car.image || defaultImage,
          url: `${siteUrl}/car/${carId}`,
          type: 'product'
        })

        // Add vehicle structured data
        const vehicleData = getCarStructuredData(car)
        if (vehicleData) {
          addStructuredData(vehicleData)
        }
      } else {
        // Fallback if car not found yet
        updateMetaTags({
          title: `Automobil #${carId} - MIX AUTO`,
          description: 'Pregledajte detalje automobila - MIX AUTO Osijek',
          url: `${siteUrl}/car/${carId}`
        })
      }
    } else if (path === '/about') {
      // About page
      updateMetaTags({
        title: 'O Nama - MIX AUTO | Vaš Pouzdani Partner za Automobile',
        description: 'Saznajte više o MIX AUTO - vašem pouzdanom partneru za prodaju, kupnju i uvoz kvalitetnih polovnih automobila. Godine iskustva u automobilskoj industriji.',
        url: `${siteUrl}/about`
      })
    } else if (path === '/contact') {
      // Contact page
      updateMetaTags({
        title: 'Kontakt - MIX AUTO | Kontaktirajte Nas',
        description: 'Kontaktirajte MIX AUTO za sve informacije o prodaji, kupnji ili uvozu automobila. Telefon: +385 91 5105 829, Email: mixautomobili@gmail.com. Osijek, Hrvatska.',
        url: `${siteUrl}/contact`
      })
    }
  }

  // Watch for route changes
  watch(() => route.path, () => {
    setupPageSEO()
  }, { immediate: true })

  // Watch for cars loading to update SEO when cars are loaded
  watch(() => cars.value, () => {
    if (route.path === '/cars' || route.path.startsWith('/car/')) {
      setupPageSEO()
    }
  }, { deep: true })

  // Setup on mount
  onMounted(() => {
    setupPageSEO()
  })

  return {
    updateMetaTags,
    addStructuredData,
    getCarStructuredData,
    setupPageSEO
  }
}

