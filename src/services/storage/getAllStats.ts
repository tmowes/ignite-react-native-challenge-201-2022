import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatisticsData } from '@models/index'

import { seedMealsData } from '@utils/seedData'

import { STATS_COLLECTION } from './config'
import { updateAllStats } from './updateAllStats'

export async function getAllStats(): Promise<StatisticsData> {
  try {
    const data = await AsyncStorage.getItem(STATS_COLLECTION)
    return data !== null ? JSON.parse(data) : await updateAllStats(seedMealsData)
  } catch (error) {
    console.log(error)
    throw error
  }
}
