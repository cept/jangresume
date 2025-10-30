import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import DashboardPage from './pages/Dashboard'
import TemplatesPage from './pages/Templates'
import ResumePreview from './pages/ResumePreview'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/templates' element={<TemplatesPage />} />
        <Route path="/dashboard/:slug" element={<ResumePreview />} />
      </Routes>
    </div>
  )
}

export default App
