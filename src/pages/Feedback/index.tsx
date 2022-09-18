import { useNavigation, useRoute } from '@react-navigation/native'

import { CustomButton } from '@components/CustomButton'

import { feedbackData } from './data'
import * as S from './styles'

export function Feedback() {
  const { navigate } = useNavigation()
  const { params } = useRoute()
  const { isDiet } = params as { isDiet: boolean }
  const type = isDiet ? 'withinDiet' : 'offDiet'
  const { title, subtitle, image } = feedbackData[type]

  return (
    <S.Container>
      <S.Title type={type}>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <S.Image source={image} />
      <CustomButton label="Ir para a página inicial" onPress={() => navigate('home')} />
    </S.Container>
  )
}
