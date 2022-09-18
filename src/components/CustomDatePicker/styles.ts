import styled, { css } from 'styled-components/native'

export const Column = styled.View`
  flex: 1;
  max-width: 50%;
  margin-right: 16px;
  min-height: 72px;
  max-height: 72px;
  margin-bottom: 24px;
`
export const Label = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS._GRAY_700};
    font-size: ${SIZE.MD};
    font-family: ${FONT.BOLD};
    margin-bottom: 4px;
  `}
`

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  ${({ theme: { COLORS } }) => css`
    flex: 1;
    justify-content: center;
    min-height: 48px;
    max-height: 48px;
    border-width: 1px;
    border-radius: 6px;
    padding: 0 16px;
    background-color: ${COLORS._GRAY_100};
    border-color: ${COLORS._GRAY_300};
  `}
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS._GRAY_700};
    font-family: ${FONT.REGULAR};
    font-size: ${SIZE.LG};
  `}
`
