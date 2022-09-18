import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    text-align: center;
    color: ${COLORS._GRAY_500};
    font-size: ${SIZE.XLG};
    font-family: ${FONT.REGULAR};
    margin-top: 80px;
  `}
`
