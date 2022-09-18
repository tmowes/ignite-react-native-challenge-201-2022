import { useCallback, useState } from 'react'
import { Alert } from 'react-native'

import { useTheme } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { StatisticsData } from '@models/index'

import { isDietGoal } from '@utils/dietGoal'
import { toPercentage } from '@utils/convertString/toPercentage'
import { StatsCard } from '@components/StatsCard'
import { getAllStats } from '@services/storage/getAllStats'
import { Loading } from '@components/Loading'

import * as S from './styles'

export function Statistics() {
  const { COLORS } = useTheme()
  const { goBack } = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState<StatisticsData>({} as StatisticsData)

  const loadStats = async () => {
    try {
      setIsLoading(true)
      const data = await getAllStats()
      setStats(data)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível carregar as estatisticas.')
    } finally {
      setIsLoading(false)
    }
  }

  const containerColor = isDietGoal(stats.percentageWithinDiet)
    ? COLORS._GREEN_300
    : COLORS._RED_300
  const iconColor = isDietGoal(stats.percentageWithinDiet)
    ? COLORS._GREEN_700
    : COLORS._RED_700

  useFocusEffect(
    useCallback(() => {
      loadStats()
    }, []),
  )

  return (
    <S.Container style={{ backgroundColor: containerColor }}>
      <S.BackIconContainer onPress={goBack}>
        <ArrowLeft size={24} weight="regular" color={iconColor} />
      </S.BackIconContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <S.Stats>{toPercentage(stats.percentageWithinDiet)}</S.Stats>
          <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
          <S.Content>
            <S.Title>Estatísticas gerais</S.Title>
            <StatsCard
              stats={stats.topSequenceWithinDiet}
              subtitle="melhor sequência de pratos dentro da dieta"
            />
            <StatsCard stats={stats.totalMeals} subtitle="refeições registradas" />
            <S.Row>
              <StatsCard
                stats={stats.totalMealsWithinDiet}
                subtitle="refeições dentro da dieta"
                type="withinDiet"
              />
              <StatsCard
                stats={stats.totalMealsOffDiet}
                subtitle="refeições fora da dieta"
                type="offDiet"
              />
            </S.Row>
          </S.Content>
        </>
      )}
    </S.Container>
  )
}
