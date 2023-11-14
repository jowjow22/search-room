import { MainContainer, ButtonContainer } from './styles'
import { Button } from '../../components/Button/Button'

const Home = () => {
  return (
    <MainContainer>
      <h1>Home</h1>
      <ButtonContainer>
        <Button color="secondary">Im a button</Button>
        <Button color="primary">Im another button</Button>
      </ButtonContainer>
    </MainContainer>
  )
}

export default Home
