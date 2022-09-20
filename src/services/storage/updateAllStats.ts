import AsyncStorage from '@react-native-async-storage/async-storage'
import { Meal } from '@models/index'

import { calculateSequenceByKeyValue } from '@utils/calculateSequence'

import { STATS_COLLECTION } from './config'

export async function updateAllStats(storedMeals: Meal[]) {
  try {
    const totalMeals = storedMeals.length
    const totalMealsOffDiet = storedMeals.filter((m) => m.type === 'offDiet').length
    const totalMealsWithinDiet = storedMeals.filter((m) => m.type === 'withinDiet').length
    const percentageWithinDiet = totalMealsWithinDiet / Math.max(totalMeals, 1)
    const topSequenceWithinDiet = calculateSequenceByKeyValue(
      storedMeals,
      'type',
      'withinDiet',
    )

    const updatedStats = {
      totalMeals,
      totalMealsOffDiet,
      totalMealsWithinDiet,
      percentageWithinDiet,
      topSequenceWithinDiet,
    }

    const updatedValue = JSON.stringify(updatedStats)

    await AsyncStorage.setItem(STATS_COLLECTION, updatedValue)
  } catch (error) {
    console.error(error)
    throw error
  }
}
