import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import DashboardPage from './pages/Dashboard'
import TemplatesPage from './pages/Templates'
import ResumePreview from './pages/ResumePreview'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/templates' element={<TemplatesPage />} />
        <Route path="/dashboard/:slug" element={<ResumePreview />} />
      </Routes>
      <div className='h-[1000px]'></div>
    </div>
  )
}

export default App
