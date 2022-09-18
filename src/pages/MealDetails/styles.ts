import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type ContainerProps = {
  type: 'offDiet' | 'withinDiet'
}

// eslint-disable-next-line prettier/prettier
export const Container = styled(SafeAreaView) <ContainerProps>`
  ${({ theme: { COLORS }, type }) => css`
    flex: 1;
    background-color: ${COLORS._GRAY_100};
    padding: 24px 0 0;
    position: relative;
    ${type === 'withinDiet' &&
    css`
      background-color: ${COLORS._GREEN_300};
    `}
    ${type === 'offDiet' &&
    css`
      background-color: ${COLORS._RED_300};
    `}
  `}
`

export const Header = styled.View`
  position: absolute;
  top: 32px;
  left: 8px;
  right: 8px;
  height: 56px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 24px;
`

export const BackIconContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 56px;
  height: 56px;
`

export const Placeholder = styled.View`
  width: 56px;
  height: 56px;
`

export const HeaderTitle = styled.Text`
  ${({ theme: { COLORS, FONT } }) => css`
    text-align: center;
    flex: 1;
    color: ${COLORS._GRAY_700};
    font-size: 18px;
    font-family: ${FONT.BOLD};
    height: 56px;
  `}
`

export const Content = styled.View`
  ${({ theme: { COLORS } }) => css`
    flex: 1;
    background-color: ${COLORS._GRAY_100};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 24px;
    margin-top: 32px;
  `}
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS._GRAY_700};
    font-size: ${SIZE.XL};
    font-family: ${FONT.BOLD};
  `}
`

export const SubTitle = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS._GRAY_600};
    font-size: ${SIZE.LG};
    font-family: ${FONT.REGULAR};
    margin-bottom: 24px;
  `}
`

export const Label = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS._GRAY_700};
    font-size: ${SIZE.LG};
    font-family: ${FONT.BOLD};
  `}
`

export const Footer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px 24px;
`
