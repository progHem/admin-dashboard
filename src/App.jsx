import { CssBaseline, ThemeProvider } from '@mui/material'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import {Routes, Route} from 'react-router-dom'
import { theme } from './theme'
import TopBar from './scenes/global/topBar'
import DashBoard  from './scenes/dashboard/index'
import SideBar from './scenes/global/sideBar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <SideBar/>
        <main className="content">
          <TopBar />
          <Routes>
            <Route path="/" element={<DashBoard/> } />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App