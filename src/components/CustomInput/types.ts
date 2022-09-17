import { RefObject } from 'react'
import { TextInput, TextInputProps } from 'react-native'

export type CustomInputProps = TextInputProps & {
  inputRef?: RefObject<TextInput>
}
