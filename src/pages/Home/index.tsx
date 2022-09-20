import { Alert, FlatList } from 'react-native'
import { useCallback, useState } from 'react'

import { Plus } from 'phosphor-react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Meal, StatisticsData } from '@models/index'

import logoImg from '@assets/logo.png'
import { CustomButton } from '@components/CustomButton'
import { Highlight } from '@components/Highlight'
import { getAllMeals } from '@services/storage/getAllMeals'
import { Loading } from '@components/Loading'
import { MealCard } from '@components/MealCard'
import { toDayDots } from '@utils/formatDate/toDayDots'
import { getAllStats } from '@services/storage/getAllStats'
import { EmptyListMessage } from '@components/EmptyListMessage'

import * as S from './styles'

export function Home() {
  const { navigate } = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState<Meal[]>([])
  const [stats, setStats] = useState<StatisticsData>({} as StatisticsData)

  const loadMeals = async () => {
    try {
      setIsLoading(true)
      const data = await getAllMeals()
      if (data) {
        const statsData = await getAllStats()
        setStats(statsData)
      }
      setMeals(data)
    } catch (error) {
      console.error(error)
      Alert.alert('Erro', 'Não foi possível carregar as refeições.')
    } finally {
      setIsLoading(false)
    }
  }

  const mealsByDay = [...new Set(meals.map((meal) => toDayDots(new Date(meal.date))))]

  useFocusEffect(
    useCallback(() => {
      loadMeals()
    }, []),
  )

  return (
    <S.Container>
      <S.Header>
        <S.Logo source={logoImg} />
        <S.Profile source={{ uri: 'https://github.com/tmowes.png' }} />
      </S.Header>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={mealsByDay}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 64 }}
          keyExtractor={(item) => item}
          ListEmptyComponent={
            <EmptyListMessage message="Que tal cadastrar a primeira refeição?" />
          }
          ListHeaderComponent={
            <>
              <Highlight
                stats={stats?.percentageWithinDiet ?? 0}
                subtitle="das refeições dentro da dieta"
              />
              <S.Title>Refeições</S.Title>
              <CustomButton
                label="Nova refeição"
                leftIcon={(p) => <Plus {...p} />}
                onPress={() => navigate('new', { mealId: null })}
              />
            </>
          }
          renderItem={({ item }) => (
            <>
              <S.MealDay>{item}</S.MealDay>
              {meals
                .filter((meal) => toDayDots(new Date(meal.date)) === item)
                .map((meal) => (
                  <MealCard
                    key={meal.id}
                    label={meal.name}
                    time={meal.time}
                    isDiet={meal.type === 'withinDiet'}
                    onPress={() => navigate('details', { id: meal.id })}
                  />
                ))}
            </>
          )}
        />
      )}
    </S.Container>
  )
}
