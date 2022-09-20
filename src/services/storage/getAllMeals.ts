import { Meal } from '@models/index'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { seedMealsData } from '@utils/seedData'

import { MEAL_COLLECTION } from './config'

export async function getAllMeals(): Promise<Meal[]> {
  try {
    const data = await AsyncStorage.getItem(MEAL_COLLECTION)
    if (!data) {
      return seedMealsData.sort(
        (b, a) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      )
    }
    const parsedData = JSON.parse(data) as Meal[]
    return parsedData.sort(
      (b, a) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    )
  } catch (error) {
    console.error(error)
    throw error
  }
}
