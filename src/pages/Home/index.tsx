import { Plus } from 'phosphor-react-native'

import logoImg from '@assets/logo.png'
import { CustomButton } from '@components/CustomButton'
import { Highlight } from '@components/Highlight'

import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo source={logoImg} />
        <S.Profile source={{ uri: 'https://github.com/tmowes.png' }} />
      </S.Header>
      <Highlight stats={89.1 / 100} subtitle="das refeições dentro da dieta" />
      <S.Title>Refeições</S.Title>
      <CustomButton label="Nova refeição" leftIcon={(p) => <Plus {...p} />} />
    </S.Container>
  )
}
