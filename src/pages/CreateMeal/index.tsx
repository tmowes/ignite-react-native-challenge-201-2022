import { useCallback, useState } from 'react'
import {
  Alert,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'

import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { Meal } from '@models/index'

import { BasicHeader } from '@components/BasicHeader'
import { CustomButton } from '@components/CustomButton'
import { CustomInput } from '@components/CustomInput'
import { DietSelect } from '@components/DietSelect'
import { getAllMealById } from '@services/storage/getAllMealById'
import { Loading } from '@components/Loading'
import { CustomDatePicker } from '@components/CustomDatePicker'
import { CustomTimePicker } from '@components/CustomTimePicker'
import { CustomTextarea } from '@components/CustomTextarea'
import { toDateUID } from '@utils/formatDate/toDateUID'
import { updateMeal } from '@services/storage/updateMeal'
import { toHourDoubleDots } from '@utils/formatDate/toHourDoubleDots'
import { toDayDash } from '@utils/formatDate/toDayDash'
import { createMeal } from '@services/storage/createMeal'
import { AppError } from '@utils/AppError'

import * as S from './styles'

export function CreateMeal() {
  const { navigate } = useNavigation()
  const route = useRoute()
  const { mealId } = route.params as { mealId: string | null }

  const [isLoading, setIsLoading] = useState(true)
  const [meal, setMeal] = useState<Meal>({} as Meal)
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())

  const onCreateMeal = async () => {
    try {
      setIsLoading(true)
      const parsedDate = new Date(`${toDayDash(date)}T${toHourDoubleDots(time)}:00.000Z`) // 2021-08-01T12:00:00.000Z
      if (!mealId) {
        await createMeal({
          id: toDateUID(new Date()),
          name: meal.name,
          description: meal.description,
          type: meal.type,
          date: parsedDate.toISOString(),
          time: toHourDoubleDots(parsedDate),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        })
      } else {
        await updateMeal({
          id: mealId,
          createdAt: meal.createdAt,
          description: meal.description,
          date: parsedDate.toISOString(),
          time: toHourDoubleDots(parsedDate),
          updatedAt: new Date().toISOString(),
          type: meal.type,
          name: meal.name,
        })
      }

      navigate('feedback', { isDiet: meal.type === 'withinDiet' })
    } catch (error) {
      console.error(error)
      if (error instanceof AppError) {
        Alert.alert(`${!mealId ? 'Criar' : 'Editar'} refeição`, error.message)
      } else {
        Alert.alert('Erro', `Não foi possível ${!mealId ? 'criar' : 'editar'} a refeição.`)
      }
    }
  }

  const loadMeal = useCallback(async () => {
    if (!mealId) return
    try {
      setIsLoading(true)
      const data = await getAllMealById(mealId)
      setMeal(data)
      setDate(new Date(data.date))
      setTime(new Date(data.date))
    } catch (error) {
      console.error(error)
      Alert.alert('Erro', 'Não foi possível carregar a refeição.')
    } finally {
      setIsLoading(false)
    }
  }, [mealId])

  useFocusEffect(
    useCallback(() => {
      if (mealId) {
        loadMeal()
      } else {
        setIsLoading(false)
      }
    }, [loadMeal, mealId]),
  )

  return (
    <S.Container>
      <BasicHeader title={!mealId ? 'Nova refeição' : 'Editar refeição'} />

      {isLoading ? (
        <Loading />
      ) : (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <S.Content>
              <S.Scroll>
                <S.Label>Nome</S.Label>
                <CustomInput
                  value={meal.name}
                  onChangeText={(text) => setMeal({ ...meal, name: text })}
                />
                <S.Label>Descrição</S.Label>
                <CustomTextarea
                  value={meal.description}
                  onChangeText={(text) => setMeal({ ...meal, description: text })}
                />
                <S.Row>
                  <CustomDatePicker date={date} onChangeDate={setDate} />
                  <CustomTimePicker time={time} onChangeTime={setTime} />
                </S.Row>
                <S.Label>Está dentro da dieta?</S.Label>
                <S.Row>
                  <DietSelect
                    type="withinDiet"
                    isActive={meal.type === 'withinDiet'}
                    onPress={() => setMeal({ ...meal, type: 'withinDiet' })}
                  />
                  <DietSelect
                    type="offDiet"
                    isActive={meal.type === 'offDiet'}
                    onPress={() => setMeal({ ...meal, type: 'offDiet' })}
                  />
                </S.Row>
              </S.Scroll>
            </S.Content>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
      <S.Footer>
        <CustomButton
          label={!mealId ? 'Cadastrar refeição' : 'Salvar alterações'}
          disabled={!meal.name || !meal.description || !meal.type}
          onPress={onCreateMeal}
        />
      </S.Footer>
    </S.Container>
  )
}
