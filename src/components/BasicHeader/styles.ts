import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { COLORS } }) => css`
    position: absolute;
    top: 32px;
    left: 8px;
    right: 8px;
    height: 56px;
    align-items: center;
    flex-direction: row;
    margin-bottom: 24px;
    background-color: ${COLORS._GRAY_300};
  `}
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    text-align: center;
    color: ${COLORS._WHITE};
    font-size: ${SIZE.MD};
    font-family: ${FONT.REGULAR};
  `}
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
