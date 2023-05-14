import { useCallback, useState } from 'react'

import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import * as S from './styles'
import { CustomTimePickerProps } from './types'

export function CustomTimePicker(props: CustomTimePickerProps) {
  const { time, onChangeTime } = props
  const [show, setShow] = useState(false)

  const onChange = useCallback(
    (_: DateTimePickerEvent, selectedDate?: Date) => {
      if (selectedDate) {
        setShow(false)
        onChangeTime(selectedDate)
      }
    },
    [onChangeTime],
  )

  return (
    <S.Column>
      <S.Label>Hora</S.Label>
      <S.Button onPress={() => setShow(true)}>
        <S.Title>{format(time, 'HH:mm', { locale: ptBR })}</S.Title>
      </S.Button>
      {show && <DateTimePicker value={time} mode="time" is24Hour onChange={onChange} />}
    </S.Column>
  )
}
