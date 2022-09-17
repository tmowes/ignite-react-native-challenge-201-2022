import styled, { css } from 'styled-components/native'

export const Container = styled.TextInput.attrs(({ theme: { COLORS } }) => ({
  placeholderTextColor: COLORS._TRANSPARENT,
}))`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${COLORS._GRAY_100};
    color: ${COLORS._GRAY_700};
    border-radius: 6px;
    padding: 0 16px;
    font-family: ${FONT.REGULAR};
    font-size: ${SIZE.MD};
  `}
`
