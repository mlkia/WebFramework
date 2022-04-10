import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import ContactUs from './components/ContactUs'
import About from './components/About'
import SignUp from './components/SignUp'


function App() {

  return (
    <Router>
    <div>
      <header>
        <NavLink to=""> Startsida |</NavLink>
        <NavLink to="/sign-up"> Sign UP |</NavLink>
        <NavLink to="/About"> About |</NavLink>
        <NavLink to="/Contact-Us">Contact Us </NavLink>
      </header>

      <main>
          <Routes>
            <Route path="/Contact-Us" element={<ContactUs />} />
            <Route path="/About" element={<About />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
      </main>
    </div>
    </Router>
  )
}

export default App
