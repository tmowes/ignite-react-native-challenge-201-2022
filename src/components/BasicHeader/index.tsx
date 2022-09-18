import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

import * as S from './styles'
import { BasicHeaderProps } from './types'

export function BasicHeader(props: BasicHeaderProps) {
  const { title = '', iconColor } = props
  const { COLORS } = useTheme()
  const { navigate, goBack } = useNavigation()

  return (
    <S.Container>
      {/* <S.BackIconContainer onPress={() => navigate('home')}> */}
      <S.BackIconContainer onPress={goBack}>
        <ArrowLeft size={24} weight="regular" color={iconColor ?? COLORS._GRAY_700} />
      </S.BackIconContainer>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.Placeholder />
    </S.Container>
  )
}
