import React from 'react'
import { GlobalStyles, theme } from './styles/globalStyles.ts'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
