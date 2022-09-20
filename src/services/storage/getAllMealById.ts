import { Meal } from '@models/index'

import { AppError } from '@utils/AppError'

import { getAllMeals } from './getAllMeals'

export async function getAllMealById(mealId: string): Promise<Meal> {
  try {
    const data = await getAllMeals()
    const meal = data.find((m) => m.id === mealId)
    if (!meal) {
      throw new AppError('Refeição não encontrada.')
    }
    return meal
  } catch (error) {
    console.error(error)
    throw error
  }
}
