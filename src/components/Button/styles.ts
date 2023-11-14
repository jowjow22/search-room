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
  font-size: ${(props) => props.theme.font.sizes.medium};
  font-weight: ${(props) => props.theme.font.weight.bold};
  transition: background 0.2s;
  font-family: ${(props) => props.theme.font.family.body};
  padding-block: ${(props) => props.theme.spacings.xsmall};
  cursor: pointer;
  padding-inline: ${(props) => props.theme.spacings.medium};
  white-space: nowrap;

  &:hover {
    background-color: ${(props) =>
      darken(0.1, props.theme.colors[props.color || 'primary'])};
  }
`
