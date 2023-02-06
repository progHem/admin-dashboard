import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme';
import TopBar from './global/topBar'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className="content">
          <TopBar/>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App