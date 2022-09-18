import { Meal } from '@models/index'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@utils/AppError'
import { sameDate } from '@utils/formatDate/sameDate'

import { MEAL_COLLECTION } from './config'
import { getAllMeals } from './getAllMeals'
import { updateAllStats } from './updateAllStats'

export async function createMeal(newMeal: Meal) {
  try {
    const storedMeals = await getAllMeals()
    const mealAtSameHour = storedMeals.filter((m) => sameDate(m.date, newMeal.date))

    if (mealAtSameHour.length >= 1) {
      throw new AppError('Já existe uma refeição nesse mesmo horario.')
    }

    const sortedMeals: Meal[] = [...storedMeals, newMeal].sort(
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
