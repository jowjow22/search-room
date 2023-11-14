import Home from './views/Home/Home'
import { GlobalStyles, LightTheme, DarkTheme } from './styles/globalStyles.ts'
import { ThemeProvider } from 'styled-components'
import { useChangeTheme } from './hooks/useChangeTheme'
import { Button } from './components/Button/Button.tsx'

function App() {
  const [theme, themeToggler] = useChangeTheme()

  const themeMode = theme === 'light' ? LightTheme : DarkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Button color="primary" callback={themeToggler}>
        Change theme
      </Button>
      <Home />
    </ThemeProvider>
  )
}

export default App
