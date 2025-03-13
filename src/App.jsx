import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Navbar/Home'
import Music from './Components/Navbar/Music'
import Navigation from './Components/Navbar/Navigation'
import AnimatedBackground from './Components/Navbar/animatedbg/AnimatedBackground'

function App() {
  return (
    <>
    <AnimatedBackground />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/music' element={<Music />} />
      </Routes>
    </>
  )
}

export default App
