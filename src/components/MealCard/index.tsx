import * as S from './styles'
import { MealCardProps } from './types'

export function MealCard(props: MealCardProps) {
  const { time, label, isDiet = false, ...attrs } = props

  return (
    <S.Container {...attrs}>
      <S.Time>{time}</S.Time>
      <S.VDivider />
      <S.Title numberOfLines={1}>{label}</S.Title>
      <S.MealType isDiet={isDiet} />
    </S.Container>
  )
}
