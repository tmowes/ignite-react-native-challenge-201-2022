import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

import { FeedbackProps } from './types'

export const Container = styled(SafeAreaView)`
  ${({ theme: { COLORS } }) => css`
    flex: 1;
    background-color: ${COLORS._GRAY_100};
    align-items: center;
    justify-content: center;
    padding: 36px;
  `}
`

export const Title = styled.Text<FeedbackProps>`
  ${({ theme: { COLORS, FONT, SIZE }, type }) => css`
    text-align: center;
    color: ${COLORS._GRAY_700};
    font-size: ${SIZE.XL};
    font-family: ${FONT.BOLD};
    margin-bottom: 8px;
    ${type === 'offDiet' &&
    css`
      color: ${COLORS._RED_700};
    `}
    ${type === 'withinDiet' &&
    css`
      color: ${COLORS._GREEN_700};
    `}
  `}
`

export const SubTitle = styled.Text`
  ${({ theme: { COLORS, FONT, SIZE } }) => css`
    text-align: center;
    color: ${COLORS._GRAY_700};
    font-size: ${SIZE.LG};
    font-family: ${FONT.REGULAR};
    margin-bottom: 40px;
  `}
`

export const Image = styled.Image`
  margin-bottom: 32px;
`
