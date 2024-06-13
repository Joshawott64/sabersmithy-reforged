import React, { useState } from "react"
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import sabersmithyTitle from './assets/GUIComponents/Sabersmithy.png'

function App() {

  const navigate = useNavigate()

  // maybe have a conditional that catches whether or not the user 
  // is logged in and navigates them to an appropriate page?

  return (
    <>
      <nav>
        <div>
          <p>Navbar goes here</p>
          <img src={sabersmithyTitle} alt="Sabersmithy" />
        </div>
        <div>
          <button onClick={() => navigate('/login')}>/login</button>
          <button onClick={() => navigate('/register')}>/register</button>
          <button onClick={() => navigate('/home')}>/home</button>
          <button onClick={() => navigate('/forge')}>/forge</button>
          <button onClick={() => navigate('/gallery')}>/gallery</button>
          <button onClick={() => navigate('/forum')}>/forum</button>
          <button onClick={() => navigate('/minigames')}>/minigames</button>
          <button onClick={() => navigate('/select')}>/select</button>
        </div>
      </nav>

      <hr />

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App