import { forwardRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { useTheme } from 'styled-components/native'

import * as S from './styles'

export const CustomInput = forwardRef<TextInput, TextInputProps>((props, ref) => {
  const { ...attrs } = props
  const { COLORS } = useTheme()

  return (
    <S.Container
      ref={ref}
      placeholderTextColor={COLORS._TRANSPARENT}
      cursorColor={COLORS._GRAY_700}
      numberOfLines={1}
      multiline={false}
      {...attrs}
    />
  )
})
