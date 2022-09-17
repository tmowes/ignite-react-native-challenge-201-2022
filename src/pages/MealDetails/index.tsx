import { ArrowLeft, PencilSimpleLine, Trash } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

import { CustomButton } from '@components/CustomButton'
import { Tag } from '@components/Tag'

import { data } from './data'
import * as S from './styles'

export function MealDetails() {
  const { COLORS } = useTheme()
  const { name, description, time, type, date } = data

  const containerColor = type === 'withinDiet' ? COLORS._GREEN_300 : COLORS._RED_300
  const iconColor = type === 'withinDiet' ? COLORS._GREEN_700 : COLORS._RED_700

  return (
    <S.Container style={{ backgroundColor: containerColor }}>
      <S.Header>
        <S.BackIconContainer>
          <ArrowLeft size={24} weight="regular" color={iconColor} />
        </S.BackIconContainer>
        <S.HeaderTitle>Refeição</S.HeaderTitle>
        <S.Placeholder />
      </S.Header>
      <S.Content>
        <S.Title>{name}</S.Title>
        <S.SubTitle>{description}</S.SubTitle>
        <S.Label>Data e hora</S.Label>
        <S.SubTitle>{date}</S.SubTitle>
        <Tag />
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
    </S.Container>
  )
}
