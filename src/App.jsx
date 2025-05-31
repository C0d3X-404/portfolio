import { useState } from 'react'
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'



import './App.css'

function App() {


  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </HashRouter>
      

    </>
  )
}

export default App
