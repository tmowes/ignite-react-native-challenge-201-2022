import styled, { css } from 'styled-components/native'

import { ContainerProps } from './types'

export const Container = styled.View<ContainerProps>`
  ${({ theme: { COLORS }, type }) => css`
    background-color: ${COLORS._GRAY_100};
    width: 100%;
    margin-bottom: 12px;
    position: relative;
    padding: 20px 16px;
    border-radius: 8px;
    background-color: ${COLORS._GRAY_200};
    ${type === 'offDiet' &&
    css`
      background-color: ${COLORS._RED_300};
      flex: 1;
      max-width: 50%;
      margin-right: 12px;
    `}
    ${type === 'withinDiet' &&
    css`
      background-color: ${COLORS._GREEN_300};
      max-width: 50%;
      flex: 1;
    `}
  `}
`

export const Stats = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    color: ${COLORS._GRAY_700};
    text-align: center;
    font-size: ${SIZE.XXL};
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
