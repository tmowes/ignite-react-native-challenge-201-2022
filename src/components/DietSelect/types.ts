import { TouchableOpacityProps } from 'react-native'

export type DietSelectProps = TouchableOpacityProps &
  ContainerProps & {
    label: string
  }

export type ContainerProps = {
  isActive?: boolean
}
