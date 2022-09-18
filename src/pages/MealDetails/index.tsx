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

import * as S from './styles'

export function MealDetails() {
  const { COLORS } = useTheme()
  const { goBack } = useNavigation()
  const { params } = useRoute()
  const { id } = params as { id: string }

  const [isLoading, setIsLoading] = useState(true)
  const [meal, setMeal] = useState<Meal>({} as Meal)

  const { name, description, time, type, date } = meal

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

  const containerColor = type === 'withinDiet' ? COLORS._GREEN_300 : COLORS._RED_300
  const iconColor = type === 'withinDiet' ? COLORS._GREEN_700 : COLORS._RED_700

  useFocusEffect(
    useCallback(() => {
      loadMeal()
    }, [loadMeal]),
  )

  return (
    <S.Container style={{ backgroundColor: containerColor }}>
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
          <S.Title>{name}</S.Title>
          <S.SubTitle>{description}</S.SubTitle>
          <S.Label>Data e hora</S.Label>
          <S.SubTitle>{toDateDetails(date)}</S.SubTitle>
          <Tag type={meal.type} />
          <S.Footer>
            <CustomButton
              label="Editar refeição"
              leftIcon={(p) => <PencilSimpleLine {...p} />}
            />
            <CustomButton
              variant="OUTlINE"
              label="Excluir refeição"
              leftIcon={(p) => <Trash {...p} />}
            />
          </S.Footer>
        </S.Content>
      )}
    </S.Container>
  )
}
