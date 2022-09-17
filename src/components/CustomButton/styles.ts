import styled, { css } from 'styled-components/native'

import { ContainerProps } from './types'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
  // eslint-disable-next-line prettier/prettier
}) <ContainerProps>`
  ${({ theme: { COLORS }, variant, disabled }) => css`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-color: ${COLORS._TRANSPARENT};
    border-width: 1px;
    background-color: ${COLORS._GRAY_600};
    border-radius: 6px;
    margin-top: 8px;
    padding: 0 16px;

    ${variant === 'PRIMARY' &&
    css`
      background-color: ${COLORS._GRAY_600};
    `}

    ${variant === 'OUTlINE' &&
    css`
      background-color: ${COLORS._GRAY_100};
      border-color: ${COLORS._GRAY_700};
    `}

    ${disabled &&
    css`
      opacity: 0.4;
    `}
  `}
`

export const Title = styled.Text<ContainerProps>`
  ${({ theme: { COLORS, FONT, SIZE }, variant }) => css`
    color: ${COLORS._WHITE};
    font-size: ${SIZE.MD};
    font-family: ${FONT.BOLD};
    ${variant === 'PRIMARY' &&
    css`
      color: ${COLORS._WHITE};
    `}
    ${variant === 'OUTlINE' &&
    css`
      color: ${COLORS._GRAY_700};
    `}
  `}
`
