import { useTheme } from 'styled-components/native'

import * as S from './styles'
import { CustomButtonProps } from './types'

export function CustomButton(props: CustomButtonProps) {
  const { label, variant = 'PRIMARY', leftIcon: LeftIcon, disabled, ...attrs } = props
  const { COLORS } = useTheme()

  return (
    <S.Container variant={variant} disabled={disabled} {...attrs}>
      {LeftIcon && (
        <LeftIcon
          size={18}
          weight="regular"
          style={{ marginRight: 12 }}
          color={variant === 'PRIMARY' ? COLORS._GRAY_100 : COLORS._GRAY_700}
        />
      )}
      <S.Title variant={variant} disabled={disabled}>
        {label}
      </S.Title>
    </S.Container>
  )
}
