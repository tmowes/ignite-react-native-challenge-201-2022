export type MealsData = Record<string, DayMeals>

export type DayMeals = {
  id: string
  time: string
  date: Date
  name: string
  description: string
  type: 'offDiet' | 'withinDiet'
  createdAt: string
  updatedAt: string
}

export type StatisticsData = {
  totalMeals: number
  totalMealsOffDiet: number
  totalMealsWithinDiet: number
  percentageWithinDiet: number
  topSequenceWithinDiet: number
}
