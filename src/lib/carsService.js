import { supabase } from './supabase'

/**
 * Get all cars from Supabase
 */
export async function getAllCars() {
  try {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error fetching cars:', error)
    return { data: null, error }
  }
}

/**
 * Get a single car by ID
 */
export async function getCarById(id) {
  try {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error fetching car:', error)
    return { data: null, error }
  }
}

/**
 * Create a new car
 */
export async function createCar(carData) {
  try {
    const { data, error } = await supabase
      .from('cars')
      .insert([carData])
      .select()
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error creating car:', error)
    return { data: null, error }
  }
}

/**
 * Update a car by ID
 */
export async function updateCar(id, carData) {
  try {
    const { data, error } = await supabase
      .from('cars')
      .update(carData)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error updating car:', error)
    return { data: null, error }
  }
}

/**
 * Delete a car by ID
 */
export async function deleteCar(id) {
  try {
    const { data, error } = await supabase
      .from('cars')
      .delete()
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error deleting car:', error)
    return { data: null, error }
  }
}

/**
 * Upload image to Supabase Storage
 */
export async function uploadCarImage(file, carId) {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${carId || Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
    const filePath = `car-images/${fileName}`

    const { data, error } = await supabase.storage
      .from('car-images')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) throw error

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('car-images')
      .getPublicUrl(filePath)

    return { url: urlData.publicUrl, error: null }
  } catch (error) {
    console.error('Error uploading image:', error)
    return { url: null, error }
  }
}

/**
 * Delete image from Supabase Storage
 */
export async function deleteCarImage(imageUrl) {
  try {
    // Extract file path from URL
    const urlParts = imageUrl.split('/')
    const fileName = urlParts[urlParts.length - 1]
    const filePath = `car-images/${fileName}`

    const { error } = await supabase.storage
      .from('car-images')
      .remove([filePath])

    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('Error deleting image:', error)
    return { error }
  }
}

