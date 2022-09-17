import { ArrowUpRight } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

import { toPercentage } from '@utils/convertString/toPercentage'
import { isDietGoal } from '@utils/dietGoal'

import * as S from './styles'
import { HighlightProps } from './types'

export function Highlight(props: HighlightProps) {
  const { stats = 0, subtitle = '' } = props
  const { COLORS } = useTheme()

  const containerColor = isDietGoal(stats) ? COLORS._GREEN_300 : COLORS._RED_300
  const iconColor = isDietGoal(stats) ? COLORS._GREEN_700 : COLORS._RED_700

  return (
    <S.Container style={{ backgroundColor: containerColor }}>
      <S.Stats>{toPercentage(stats)}</S.Stats>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <S.IconContainer>
        <ArrowUpRight size={24} weight="regular" color={iconColor} />
      </S.IconContainer>
    </S.Container>
  )
}
