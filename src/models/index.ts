export type MealsData = Record<string, Meal[]>

export type Meal = {
  id: string
  time: string
  date: string // 2022-09-17T08:30:00.000Z
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
