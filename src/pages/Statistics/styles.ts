import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  ${({ theme: { COLORS } }) => css`
    flex: 1;
    background-color: ${COLORS._GRAY_100};
    padding: 24px 0 0;
    position: relative;
  `}
`

export const Stats = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS._GRAY_700};
    text-align: center;
    font-size: ${SIZE.XXL};
    font-family: ${FONT.BOLD};
  `}
`

export const SubTitle = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS._GRAY_600};
    text-align: center;
    font-size: ${SIZE.MD};
    font-family: ${FONT.REGULAR};
  `}
`
export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    text-align: center;
    color: ${COLORS._GRAY_700};
    font-size: ${SIZE.MD};
    font-family: ${FONT.BOLD};
    margin: 16px 0;
  `}
`
export const BackIconContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  position: absolute;
  top: 32px;
  left: 8px;
  width: 56px;
  height: 56px;
`

export const Content = styled.View`
  ${({ theme: { COLORS } }) => css`
    flex: 1;
    background-color: ${COLORS._GRAY_100};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 8px 24px;
    margin-top: 24px;
  `}
`

export const Row = styled.View`
  flex-direction: row;
`
