import { useState } from 'react'
import reactLogo from './assets/react.svg'
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