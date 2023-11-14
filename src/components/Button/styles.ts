import styled from 'styled-components'
import { Color } from '../../types/colors'
import { darken } from 'polished'

interface ButtonProps {
  color?: Color
  children: React.ReactNode
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 5rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors[props.color || 'primary']};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.8rem;
  font-weight: 700;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) =>
      darken(0.1, props.theme.colors[props.color || 'primary'])};
  }
`
