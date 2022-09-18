import { TouchableOpacityProps } from 'react-native'

export type MealCardProps = TouchableOpacityProps & {
  label: string
  time: string
  isDiet?: boolean
}

export type StatusProps = {
  isDiet?: boolean
}
