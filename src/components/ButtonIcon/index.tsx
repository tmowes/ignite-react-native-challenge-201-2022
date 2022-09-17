import * as S from './styles'
import { ButtonIconProps } from './types'

export function ButtonIcon(props: ButtonIconProps) {
  const { children, disabled = false, ...attrs } = props

  return (
    <S.Container disabled={disabled} {...attrs}>
      {children}
    </S.Container>
  )
}
