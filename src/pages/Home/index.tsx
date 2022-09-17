import { PencilSimpleLine, Trash } from 'phosphor-react-native'

import { CustomButton } from '@components/CustomButton'

import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <S.Title>Home</S.Title>
      <CustomButton label="Cadastrar refeição" />
      <CustomButton label="Cadastrar refeição" disabled />
      <CustomButton variant="OUTlINE" label="Cancelar" />
      <CustomButton variant="OUTlINE" label="Cancelar" disabled />
      <CustomButton
        label="Editar refeição"
        leftIcon={(p) => <PencilSimpleLine {...p} />}
      />
      <CustomButton
        variant="OUTlINE"
        label="Excluir refeição"
        leftIcon={(p) => <Trash {...p} />}
      />
    </S.Container>
  )
}
