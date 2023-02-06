import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <div className="app">
        <main className="content"></main>
      </div>
    </ThemeProvider>
  )
}

export default App