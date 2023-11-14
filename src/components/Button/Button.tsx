import * as S from './styles'
import { Color } from '../../types/colors'

interface IButtonProps {
  children: React.ReactNode
  color?: Color
}

export const Button = ({ children, color }: IButtonProps) => {
  return <S.Button color={color}>{children}</S.Button>
}
