import * as S from './styles'
import { StatsCardProps } from './types'

export function StatsCard(props: StatsCardProps) {
  const { stats = 0, subtitle = '', type = 'base' } = props
  return (
    <S.Container type={type}>
      <S.Stats>{stats}</S.Stats>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Container>
  )
}
