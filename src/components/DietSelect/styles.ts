import styled, { css } from 'styled-components/native'

import { ContainerProps } from './types'

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme: { COLORS }, isActive }) => css`
    background-color: ${COLORS._GRAY_200};
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border-width: 1px;
    border-color: transparent;
    border-style: solid;
    height: 38px;
    width: 70px;
    margin-right: 12px;
    ${isActive &&
    css`
      border-color: ${COLORS._GREEN_700};
      background-color: ${COLORS._GREEN_300};
    `}
  `}
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    text-align: center;
    color: ${COLORS._GRAY_700};
    font-size: ${SIZE.SM};
    font-family: ${FONT.BOLD};
    text-transform: uppercase;
  `}
`
