import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS._WHITE};
    text-align: center;
    font-size: ${SIZE.LG};
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
