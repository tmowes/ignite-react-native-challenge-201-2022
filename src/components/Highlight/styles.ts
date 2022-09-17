import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 100%;
  margin: 8px 0 32px;
  position: relative;
  padding: 20px 16px;
  border-radius: 8px;
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

export const IconContainer = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`
