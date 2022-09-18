import styled, { css } from 'styled-components/native'

import { ContainerProps, StatusContainerProps } from './types'

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme: { COLORS }, isActive, type }) => css`
    flex: 1;
    background-color: ${COLORS._GRAY_200};
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border-width: 1px;
    border-color: transparent;
    border-style: solid;
    height: 50px;
    max-width: 48%;
    flex-direction: row;
    ${isActive &&
    type === 'withinDiet' &&
    css`
      border-color: ${COLORS._GREEN_700};
      background-color: ${COLORS._GREEN_300};
    `}
    ${isActive &&
    type === 'offDiet' &&
    css`
      border-color: ${COLORS._RED_700};
      background-color: ${COLORS._RED_300};
    `}
  `}
`

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    text-align: center;
    color: ${COLORS._GRAY_700};
    font-size: ${SIZE.MD};
    font-family: ${FONT.BOLD};
  `}
`

export const Status = styled.View<StatusContainerProps>`
  ${({ theme: { COLORS }, type }) => css`
    width: 10px;
    height: 10px;
    background-color: ${COLORS._RED_700};
    margin-right: 8px;
    border-radius: 999px;
    ${type === 'withinDiet' &&
    css`
      background-color: ${COLORS._GREEN_700};
    `}
  `}
`
