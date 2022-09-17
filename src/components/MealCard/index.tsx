import { useTheme } from 'styled-components/native'

import * as S from './styles'
import { MealCardProps } from './types'

export function MealCard(props: MealCardProps) {
  const { time, label, isDiet = false, ...attrs } = props
  const { COLORS } = useTheme()

  const mealTypeColor = isDiet ? COLORS._GREEN_500 : COLORS._RED_500

  return (
    <S.Container {...attrs}>
      <S.Time>{time}</S.Time>
      <S.VDivider />
      <S.Title>{label}</S.Title>
      <S.MealType styles={{ backgroundColor: mealTypeColor }} />
    </S.Container>
  )
}
