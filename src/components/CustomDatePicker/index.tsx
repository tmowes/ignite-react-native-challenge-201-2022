import { useCallback, useState } from 'react'

import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import * as S from './styles'
import { CustomDatePickerProps } from './types'

export function CustomDatePicker(props: CustomDatePickerProps) {
  const { date, onChangeDate } = props
  const [show, setShow] = useState(false)

  const onChange = useCallback(
    (_: DateTimePickerEvent, selectedDate?: Date) => {
      if (selectedDate) {
        setShow(false)
        onChangeDate(selectedDate)
      }
    },
    [onChangeDate],
  )

  return (
    <S.Column>
      <S.Label>Data</S.Label>
      <S.Button onPress={() => setShow(true)}>
        <S.Title>{format(date, 'dd/MM/yyyy', { locale: ptBR })}</S.Title>
      </S.Button>
      {show && <DateTimePicker value={date} mode="date" onChange={onChange} />}
    </S.Column>
  )
}
