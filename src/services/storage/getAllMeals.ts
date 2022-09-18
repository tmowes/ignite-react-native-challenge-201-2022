import { Meal } from '@models/index'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { seedMealsData } from '@utils/seedData'

import { MEAL_COLLECTION } from './config'

export async function getAllMeals(): Promise<Meal[]> {
  try {
    const data = await AsyncStorage.getItem(MEAL_COLLECTION)
    return data !== null ? JSON.parse(data) : seedMealsData
  } catch (error) {
    console.log(error)
    throw error
  }
}
