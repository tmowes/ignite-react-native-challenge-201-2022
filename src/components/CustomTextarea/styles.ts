import styled, { css } from 'styled-components/native'

export const Container = styled.TextInput.attrs(({ theme: { COLORS } }) => ({
  placeholderTextColor: COLORS._TRANSPARENT,
  cursorColor: COLORS._GRAY_700,
  numberOfLines: 4,
  multiline: true,
}))`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    flex: 1;
    min-height: 120px;
    max-height: 120px;
    background-color: ${COLORS._GRAY_100};
    color: ${COLORS._GRAY_700};
    border-radius: 6px;
    padding: 16px;
    font-family: ${FONT.REGULAR};
    font-size: ${SIZE.LG};
    border-width: 1px;
    border-color: ${COLORS._GRAY_300};
    margin-bottom: 16px;
    text-align-vertical: top;
  `}
`
