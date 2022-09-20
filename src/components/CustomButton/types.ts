import { TouchableOpacityProps } from 'react-native'
import { ElementType } from 'react'

import { IconProps } from 'phosphor-react-native'

export type CustomButtonProps = TouchableOpacityProps &
  ButtonVariantProps & {
    label: string
    leftIcon?: ElementType<IconProps>
  }

export type ButtonVariants = 'PRIMARY' | 'OUTlINE'

export type ButtonVariantProps = Pick<TouchableOpacityProps, 'disabled'> & {
  variant?: ButtonVariants
}
