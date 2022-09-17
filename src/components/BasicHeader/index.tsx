import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

import * as S from './styles'
import { BasicHeaderProps } from './types'

export function BasicHeader(props: BasicHeaderProps) {
  const { title = '', iconColor } = props
  const { COLORS } = useTheme()

  return (
    <S.Container>
      <S.BackIconContainer>
        <ArrowLeft size={24} weight="regular" color={iconColor ?? COLORS._GRAY_700} />
      </S.BackIconContainer>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.Placeholder />
    </S.Container>
  )
}
