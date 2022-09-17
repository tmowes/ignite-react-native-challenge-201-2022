import { BasicHeader } from '@components/BasicHeader'
import { CustomButton } from '@components/CustomButton'
import { CustomInput } from '@components/CustomInput'
import { DietSelect } from '@components/DietSelect'

import * as S from './styles'

export function CreateMeal() {
  return (
    <S.Container>
      <BasicHeader title="Editar refeição" />
      <S.Content>
        <S.Label>Nome</S.Label>
        <CustomInput />
        <S.Label>Descrição</S.Label>
        <CustomInput />
        <S.Row>
          <S.Column>
            <S.Label>Data</S.Label>
            <CustomInput />
          </S.Column>
          <S.Column>
            <S.Label>Hora</S.Label>
            <CustomInput />
          </S.Column>
        </S.Row>
        <S.Label>Está dentro da dieta?</S.Label>
        <S.Row>
          <DietSelect type="withinDiet" isActive />
          <DietSelect type="offDiet" isActive />
        </S.Row>
        <S.Footer>
          <CustomButton label="Salvar alterações" />
        </S.Footer>
      </S.Content>
    </S.Container>
  )
}
