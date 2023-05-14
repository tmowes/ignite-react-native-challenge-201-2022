import styled, { css } from 'styled-components/native'

export const Container = styled.TextInput`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    flex: 1;
    min-height: 48px;
    max-height: 48px;
    background-color: ${COLORS._GRAY_100};
    color: ${COLORS._GRAY_700};
    border-radius: 6px;
    padding: 0 16px;
    font-family: ${FONT.REGULAR};
    font-size: ${SIZE.LG};
    border-width: 1px;
    border-color: ${COLORS._GRAY_300};
    margin-bottom: 16px;
  `}
`
