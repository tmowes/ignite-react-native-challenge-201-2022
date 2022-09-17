import * as S from './styles'
import { HighlightProps } from './types'

export function Highlight(props: HighlightProps) {
  const { title = '', subtitle = '' } = props
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Container>
  )
}
