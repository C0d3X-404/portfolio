
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Socials from './pages/socials.jsx'



import './App.css'


function App() {


  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/socials" element={<Socials />} />
          

        </Routes>
      </HashRouter>
      

    </>
  )
}

export default App
