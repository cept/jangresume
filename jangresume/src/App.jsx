import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import DashboardPage from './pages/Dashboard'
import TemplatesPage from './pages/Templates'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/templates' element={<TemplatesPage />} />
      </Routes>
      <div className='h-[1000px]'></div>
    </div>
  )
}

export default App
