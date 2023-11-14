import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h1 {
    color: #444;
    font-size: 4rem;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 40rem;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacings.small};
  justify-content: space-between;
`
