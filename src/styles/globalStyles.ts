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
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    transition: background 0.3s;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme.colors.text};
  }
`

const defaultTheme = {
  font: {
    family: {
      body: "'Open Sans', sans-serif",
      heading: "'Poppins', sans-serif"
    },
    sizes: {
      small: '1.6rem',
      medium: '1.8rem',
      large: '2.0rem',
      xlarge: '2.2rem',
      xxlarge: '2.4rem'
    },
    weight: {
      normal: 400,
      bold: 700
    }
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '3.2rem',
    large: '4.8rem',
    xlarge: '6.4rem',
    xxlarge: '8.0rem'
  }
}

export const LightTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff0080',
    white: '#fff',
    background: '#fff',
    text: '#292929'
  },
  ...defaultTheme
}

export const DarkTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff0080',
    white: '#fff',
    background: '#292929',
    text: '#fff'
  },
  ...defaultTheme
}
