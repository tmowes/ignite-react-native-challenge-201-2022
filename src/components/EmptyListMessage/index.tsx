import * as S from './styles'
import { EmptyListMessageProps } from './types'

export function EmptyListMessage(props: EmptyListMessageProps) {
  const { message } = props
  return (
    <S.Container>
      <S.Title>{message}</S.Title>
    </S.Container>
  )
}
