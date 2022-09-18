import { useCallback, useState } from 'react'
import { Alert } from 'react-native'

import { ArrowLeft, PencilSimpleLine, Trash } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { Meal } from '@models/index'

import { CustomButton } from '@components/CustomButton'
import { Tag } from '@components/Tag'
import { getAllMealById } from '@services/storage/getAllMealById'
import { Loading } from '@components/Loading'
import { toDateDetails } from '@utils/formatDate/toDateDetails'
import { removeMealById } from '@services/storage/removeMealById'

import * as S from './styles'

export function MealDetails() {
  const { COLORS } = useTheme()
  const { navigate, goBack } = useNavigation()
  const { params } = useRoute()
  const { id } = params as { id: string }

  const [isLoading, setIsLoading] = useState(true)
  const [meal, setMeal] = useState<Meal>({} as Meal)

  const loadMeal = useCallback(async () => {
    try {
      setIsLoading(true)
      const data = await getAllMealById(id)
      setMeal(data)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível carregar a refeição.')
    } finally {
      setIsLoading(false)
    }
  }, [id])

  const onRemoveMeal = useCallback(async () => {
    try {
      await removeMealById(id)
      console.log(id)
      goBack()
    } catch (error) {
      Alert.alert('Remover refeição', 'Não foi possível remover a refeição.')
      console.log(error)
    }
  }, [goBack, id])

  const confirmRemoveMeal = useCallback(() => {
    Alert.alert('Deseja realmente excluir o registro da refeição?', '', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => onRemoveMeal(),
      },
    ])
  }, [onRemoveMeal])

  const iconColor = meal.type === 'withinDiet' ? COLORS._GREEN_700 : COLORS._RED_700

  useFocusEffect(
    useCallback(() => {
      loadMeal()
    }, [loadMeal]),
  )

  return (
    <S.Container type={meal.type}>
      <S.Header>
        <S.BackIconContainer onPress={goBack}>
          <ArrowLeft size={24} weight="regular" color={iconColor} />
        </S.BackIconContainer>
        <S.HeaderTitle>Refeição</S.HeaderTitle>
        <S.Placeholder />
      </S.Header>
      {isLoading ? (
        <Loading />
      ) : (
        <S.Content>
          <S.Title>{meal.name}</S.Title>
          <S.SubTitle>{meal.description}</S.SubTitle>
          <S.Label>Data e hora</S.Label>
          <S.SubTitle>{toDateDetails(meal.date)}</S.SubTitle>
          <Tag type={meal.type} />
          <S.Footer>
            <CustomButton
              label="Editar refeição"
              leftIcon={(p) => <PencilSimpleLine {...p} />}
              onPress={() => navigate('new', { mealId: id })}
            />
            <CustomButton
              variant="OUTlINE"
              label="Excluir refeição"
              leftIcon={(p) => <Trash {...p} />}
              onPress={confirmRemoveMeal}
            />
          </S.Footer>
        </S.Content>
      )}
    </S.Container>
  )
}
