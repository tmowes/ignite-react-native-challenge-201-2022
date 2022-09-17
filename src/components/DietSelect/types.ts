import { TouchableOpacityProps } from 'react-native'

export type DietSelectProps = TouchableOpacityProps & ContainerProps

export type ContainerProps = StatusContainerProps & {
  isActive?: boolean
}

export type StatusContainerProps = {
  type: 'offDiet' | 'withinDiet'
}
