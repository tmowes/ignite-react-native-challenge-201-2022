import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo.png'
import * as S from './styles'
import { HeaderProps } from './types'

export function Header(props: HeaderProps) {
  const { showBackButton = false } = props
  const { navigate } = useNavigation()
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={() => navigate('home')}>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={logoImg} />
    </S.Container>
  )
}
