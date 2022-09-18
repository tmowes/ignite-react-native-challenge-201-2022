import AsyncStorage from '@react-native-async-storage/async-storage'
import { Meal } from '@models/index'

import { getAllMeals } from './getAllMeals'
import { MEAL_COLLECTION } from './config'
import { updateAllStats } from './updateAllStats'

export async function removeMealById(mealId: string) {
  try {
    const data = await getAllMeals()
    const filteredMeals = data.filter((m) => m.id !== mealId)
    const sortedMeals: Meal[] = filteredMeals.sort(
      (b, a) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    )
    await updateAllStats(sortedMeals)
    const updatedValue = JSON.stringify(sortedMeals)
    await AsyncStorage.setItem(MEAL_COLLECTION, updatedValue)
  } catch (error) {
    console.log(error)
    throw error
  }
}
