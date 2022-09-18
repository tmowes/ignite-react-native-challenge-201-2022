import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@pages/Home'
import { Feedback } from '@pages/Feedback'
import { CreateMeal } from '@pages/CreateMeal'
import { Statistics } from '@pages/Statistics'
import { MealDetails } from '@pages/MealDetails'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={CreateMeal} />
      <Screen name="details" component={MealDetails} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  )
}
