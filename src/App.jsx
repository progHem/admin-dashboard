import { CssBaseline, ThemeProvider } from '@mui/material'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import {Routes, Route} from 'react-router-dom'
import { theme } from './theme'
import TopBar from './scenes/global/topBar'
import DashBoard  from './scenes/dashboard/index'
import SideBar from './scenes/global/sideBar'
import Team from './scenes/team'
import Calendar from './scenes/dashboard/calender'
import BarChart from './scenes/dashboard/barChart'
import PieChart from './scenes/dashboard/pieChart'
import LineChart from './scenes/dashboard/lineChart'
import GeographyChart from './scenes/dashboard/geographyChart'
import Faq from './scenes/dashboard/faq'
import ProfileForm from './scenes/dashboard/profileForm'

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
            <Route path="/team" element={<Team/> } />
            <Route path="/calender" element={<Calendar/> } />
            <Route path="/profile" element={<ProfileForm/> } />
            <Route path="/faq" element={<Faq/> } />
            <Route path="/bar" element={<BarChart/> } />
            <Route path="/pie" element={<PieChart/> } />
            <Route path="/line" element={<LineChart/> } />
            <Route path="/geography" element={<GeographyChart/> } />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App