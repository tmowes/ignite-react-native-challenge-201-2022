import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'

export type ButtonIconProps = TouchableOpacityProps & {
  children: ReactNode
}

export type ContainerProps = Pick<TouchableOpacityProps, 'disabled'>
