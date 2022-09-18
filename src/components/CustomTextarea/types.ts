import { RefObject } from 'react'
import { TextInput, TextInputProps } from 'react-native'

export type CustomTextareaProps = TextInputProps & {
  inputRef?: RefObject<TextInput>
}
