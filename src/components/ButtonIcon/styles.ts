import styled, { css } from 'styled-components/native'

import { ContainerProps } from './types'

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ disabled }) => css`
    width: 56px;
    height: 56px;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    ${disabled &&
    css`
      opacity: 0.5;
    `}
  `}
`
