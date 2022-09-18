import styled, { css } from 'styled-components/native'

import { StatusProps } from './types'

export const Container = styled.TouchableOpacity`
  ${({ theme: { COLORS } }) => css`
    width: 100%;
    background-color: ${COLORS._TRANSPARENT};
    border-color: ${COLORS._GRAY_300};
    border-width: 1px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    margin-bottom: 12px;
  `}
`

export const Title = styled.Text`
  ${({ theme: { COLORS, SIZE, FONT } }) => css`
    color: ${COLORS._GRAY_600};
    font-size: ${SIZE.LG};
    font-family: ${FONT.REGULAR};
    flex: 1;
    padding-right: 12px;
  `}
`

export const Time = styled.Text`
  ${({ theme: { COLORS, SIZE, FONT } }) => css`
    color: ${COLORS._GRAY_700};
    font-size: ${SIZE.SM};
    font-family: ${FONT.BOLD};
  `}
`

export const VDivider = styled.View`
  ${({ theme: { COLORS } }) => css`
    width: 1px;
    height: 70%;
    background-color: ${COLORS._GRAY_400};
    margin: 0 12px;
  `}
`

export const MealType = styled.View<StatusProps>`
  ${({ theme: { COLORS }, isDiet }) => css`
    width: 14px;
    height: 14px;
    border-radius: 999px;
    margin-left: auto;
    background-color: ${COLORS._RED_500};
    ${isDiet &&
    css`
      background-color: ${COLORS._GREEN_500};
    `}
  `}
`
