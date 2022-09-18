import { Meal } from '@models/index'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@utils/AppError'

import { MEAL_COLLECTION } from './config'
import { getAllMeals } from './getAllMeals'
import { updateAllStats } from './updateAllStats'

export async function updateMeal(currMeal: Meal) {
  try {
    const storedMeals = await getAllMeals()
    const mealAlreadyExists = storedMeals.filter((m) => m.id === currMeal.id)

    if (mealAlreadyExists) {
      throw new AppError('Já existe uma refeição nesse mesmo horario.')
    }

    const sortedMeals: Meal[] = [...storedMeals, currMeal].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    )
    await updateAllStats(sortedMeals)
    const updatedValue = JSON.stringify(sortedMeals)
    await AsyncStorage.setItem(MEAL_COLLECTION, updatedValue)
  } catch (error) {
    console.log(error)
    throw error
  }
}
