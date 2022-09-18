import { Meal } from '@models/index'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@utils/AppError'
import { sameDate } from '@utils/formatDate/sameDate'

import { MEAL_COLLECTION } from './config'
import { getAllMeals } from './getAllMeals'
import { updateAllStats } from './updateAllStats'

export async function updateMeal(editedMeal: Meal) {
  try {
    const storedMeals = await getAllMeals()
    const filteredMeals = storedMeals.filter((m) => m.id !== editedMeal.id)
    const mealAtSameHour = filteredMeals.filter((m) => sameDate(m.date, editedMeal.date))
    const mealAlreadyExists = storedMeals.find((m) => m.id === editedMeal.id)

    if (mealAtSameHour.length >= 1) {
      throw new AppError('Já existe uma refeição nesse mesmo horario.')
    }

    if (!mealAlreadyExists) {
      throw new AppError('Refeição não encontrada.')
    }

    const sortedMeals: Meal[] = [...filteredMeals, editedMeal].sort(
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
