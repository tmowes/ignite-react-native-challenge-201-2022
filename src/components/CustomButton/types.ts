import { TouchableOpacityProps } from 'react-native'
import { ElementType } from 'react'

import { IconProps } from 'phosphor-react-native'

export type CustomButtonProps = TouchableOpacityProps &
  ContainerProps & {
    label: string
    leftIcon?: ElementType<IconProps>
  }

export type ButtonVariantProps = 'PRIMARY' | 'OUTlINE'

export type ContainerProps = {
  variant?: ButtonVariantProps
  disabled?: boolean
}
