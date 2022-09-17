import { data } from './data'
import * as S from './styles'
import { DietSelectProps } from './types'

export function DietSelect(props: DietSelectProps) {
  const { type, isActive = false, ...attrs } = props

  return (
    <S.Container type={type} isActive={isActive} {...attrs}>
      <S.Status type={type} />
      <S.Title>{data[type]}</S.Title>
    </S.Container>
  )
}
