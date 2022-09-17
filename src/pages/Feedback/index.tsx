import { CustomButton } from '@components/CustomButton'

import { feedbackData } from './data'
import * as S from './styles'

const type: 'offDiet' | 'withinDiet' = 'withinDiet'

export function Feedback() {
  const { title, subtitle, image } = feedbackData[type]
  return (
    <S.Container>
      <S.Title type={type}>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <S.Image source={image} />
      <CustomButton label="Ir para a página inicial" />
    </S.Container>
  )
}
