import { useTheme } from 'styled-components/native'

import { tagData } from './data'
import * as S from './styles'
import { TagProps } from './types'

export function Tag(props: TagProps) {
  const { type = 'offDiet' } = props
  const { COLORS } = useTheme()

  const statusColor = type === 'withinDiet' ? COLORS._GREEN_700 : COLORS._RED_700

  return (
    <S.Container>
      <S.Status style={{ backgroundColor: statusColor }} />
      <S.Title>{tagData[type]}</S.Title>
    </S.Container>
  )
}
