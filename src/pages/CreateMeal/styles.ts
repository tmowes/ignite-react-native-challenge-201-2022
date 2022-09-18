import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  ${({ theme: { COLORS } }) => css`
    flex: 1;
    background-color: ${COLORS._GRAY_300};
    padding: 24px 0 0;
    position: relative;
  `}
`

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 80 },
})`
  width: 100%;
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    text-align: center;
    color: ${COLORS._GRAY_700};
    font-size: ${SIZE.MD};
    font-family: ${FONT.REGULAR};
  `}
`

export const Label = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS._GRAY_700};
    font-size: ${SIZE.MD};
    font-family: ${FONT.BOLD};
    margin-bottom: 4px;
  `}
`

export const Content = styled.View`
  ${({ theme: { COLORS } }) => css`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: ${COLORS._GRAY_100};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 24px;
    margin-top: 24px;
  `}
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Footer = styled.View`
  ${({ theme: { COLORS } }) => css`
    background-color: ${COLORS._GRAY_100};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px 24px;
  `}
`
