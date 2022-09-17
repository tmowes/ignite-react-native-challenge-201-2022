import * as S from './styles'
import { DietSelectProps } from './types'

export function DietSelect(props: DietSelectProps) {
  const { label, isActive = false, ...attrs } = props
  return (
    <S.Container isActive={isActive} {...attrs}>
      <S.Title>{label}</S.Title>
    </S.Container>
  )
}
