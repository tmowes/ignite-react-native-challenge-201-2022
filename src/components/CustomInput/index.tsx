import * as S from './styles'
import { CustomInputProps } from './types'

export function CustomInput(props: CustomInputProps) {
  const { inputRef, ...attrs } = props
  return <S.Container ref={inputRef} {...attrs} />
}
