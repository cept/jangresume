import React from 'react'
import ResumeCard from '../components/ResumeCard'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='px-4 sm:px-12 lg:px-24 xl:px-40 py-10'>
      <Link to="/templates" className='text-sm bg-primary text-secondary px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all'>+ Buat Resume</Link>
      <ResumeCard />
      <ResumeCard />
      <ResumeCard />
    </div>
  )
}

export default Dashboard
