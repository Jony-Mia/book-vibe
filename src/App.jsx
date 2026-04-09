import { createContext, useState, Suspense, use } from 'react'

import '@/App.css'
import { Outlet } from 'react-router'
import Navbar from '@/component/Navbar';


function App() {


  return (
    <>
      <Navbar />
      <div className="container m-auto px-4">
        <Outlet />
      </div>
    </>
  )
}

export default App
