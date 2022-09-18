import * as S from './styles'
import { CustomTextareaProps } from './types'

export function CustomTextarea(props: CustomTextareaProps) {
  const { inputRef, ...attrs } = props
  return <S.Container ref={inputRef} {...attrs} />
}
