import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SideNavBar from './components/layout/SideNavBar'
import TopAppBar from './components/layout/TopAppBar'
import Dashboard from './pages/Dashboard'
import Topics from './pages/Topics'
import Timeline from './pages/Timeline'
import Calendar from './pages/Calendar'
import Admin from './pages/Admin'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-on-surface font-body-md min-h-screen selection:bg-primary-container selection:text-on-primary-container">
        <SideNavBar />
        <div className="ml-[280px] flex flex-col min-h-screen">
          <TopAppBar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}
