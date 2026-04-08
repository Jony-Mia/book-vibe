import { useState } from 'react'

import heroImg from '@/assets/hero_img.jpg'
import '@/App.css'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <Navbar />
      
      <Outlet />
    </>
  )
}

export default App
