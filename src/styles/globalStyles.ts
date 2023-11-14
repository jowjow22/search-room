import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  :root {
	font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
  }
`

export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff0080',
    white: '#fff'
  }
}
