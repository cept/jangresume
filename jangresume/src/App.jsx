import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-9xl text-blue-800 font-extrabold flex justify-center underline'>Hello World</h1>
      <div className='h-[1000px]'></div>
    </div>
  )
}

export default App
