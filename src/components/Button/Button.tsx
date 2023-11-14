import * as S from './styles'
import { Color } from '../../types/colors'

interface IButtonProps {
  children: React.ReactNode
  color?: Color
  callback?: () => void
}

export const Button = ({ children, color, callback }: IButtonProps) => {
  return (
    <S.Button color={color} onClick={callback}>
      {children}
    </S.Button>
  )
}
