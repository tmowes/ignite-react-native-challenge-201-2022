import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme: { COLORS } }) => css`
    background-color: ${COLORS._GRAY_200};
    padding: 8px 16px;
    align-items: center;
    flex-direction: row;
    border-radius: 999px;
    margin-right: auto;
  `}
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    text-align: center;
    color: ${COLORS._GRAY_700};
    font-size: ${SIZE.MD};
    font-family: ${FONT.REGULAR};
  `}
`

export const Status = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
`
