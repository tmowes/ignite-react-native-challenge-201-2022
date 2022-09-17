import { useTheme } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'

import { isDietGoal } from '@utils/dietGoal'
import { toPercentage } from '@utils/convertString/toPercentage'
import { StatsCard } from '@components/StatsCard'

import * as S from './styles'

export function Statistics() {
  const { COLORS } = useTheme()
  const subtitle = 'das refeições dentro da dieta'
  const stats = 89.1 / 100
  const containerColor = isDietGoal(stats) ? COLORS._GREEN_300 : COLORS._RED_300
  const iconColor = isDietGoal(stats) ? COLORS._GREEN_700 : COLORS._RED_700

  return (
    <S.Container style={{ backgroundColor: containerColor }}>
      <S.BackIconContainer>
        <ArrowLeft size={24} weight="regular" color={iconColor} />
      </S.BackIconContainer>
      <S.Stats>{toPercentage(stats)}</S.Stats>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <S.Content>
        <S.Title>Estatísticas gerais</S.Title>
        <StatsCard stats={22} subtitle="melhor sequência de pratos dentro da dieta" />
        <StatsCard stats={109} subtitle="refeições registradas" />
        <S.Row>
          <StatsCard stats={99} subtitle="refeições dentro da dieta" type="offDiet" />
          <StatsCard stats={10} subtitle="refeições fora da dieta" type="withinDiet" />
        </S.Row>
      </S.Content>
    </S.Container>
  )
}
