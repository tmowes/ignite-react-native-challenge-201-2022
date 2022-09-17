import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  ${({ theme: { COLORS } }) => css`
    flex: 1;
    background-color: ${COLORS._GRAY_100};
    padding: 24px;
  `}
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS._GRAY_700};
    font-size: ${SIZE.LG};
    font-family: ${FONT.REGULAR};
  `}
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 40px;
`

export const Profile = styled.Image.attrs({
  resizeMode: 'cover',
})`
  ${({ theme: { COLORS } }) => css`
    border-color: ${COLORS._GRAY_600};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border-width: 2px;
  `}
`
