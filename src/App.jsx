import { useState } from 'react'

import heroImg from '@/assets/hero_img.jpg'
import '@/App.css'
import { Outlet } from 'react-router'
import Navbar from '@/component/Navbar'

function App() {

  return (
    <>
      <Navbar />
      
      <div className="container px-4">
        <Outlet />
      </div>
    </>
  )
}

export default App
