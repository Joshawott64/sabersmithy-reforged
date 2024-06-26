import React, { useState, useEffect } from "react"
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import './App.css'
import sabersmithyTitle from './assets/GUIComponents/Sabersmithy.png'
import reforged from './assets/GUIComponents/Reforged.png'

function App() {

  const navigate = useNavigate()

  // maybe have a conditional that catches whether or not the user 
  // is logged in and navigates them to an appropriate page?

  const userId = useSelector((state) => state.userId)
  
  const dispatch = useDispatch()

  const handleLogout = async () => {
    const res = await axios.get('/api/logout')

    if (res.data.success) {
      dispatch({
        type: "LOGOUT"
      })
      navigate('/login')
    }
  }

  const sessionCheck = async () => {
    const res = await axios.get('/api/session-check')

    if (res.data.success) {
      console.log('sessionCheck: SUCCESS')
      dispatch({
        type: "USER_AUTH",
        payload: res.data.userId
      })
      navigate('/home')
    } else {
      console.log('sessionCheck: FAILURE')
      navigate('/login')
    }
  }

  useEffect(() => {
    sessionCheck()
  }, [])

  return (
    <>
      <nav id="navbar" className="flex-col w-vw bg-black">
        {userId && <button className="float-left p-1 text-red-600 font-bold rounded hover:bg-gray-900 hover:text-white" onClick={handleLogout}>Logout</button>}
        {userId && <button className="float-left p-1 text-gray-500 font-bold rounded hover:bg-gray-900 hover:text-white" onClick={() => navigate('/home')}>Home Page</button>}
        <img className="mx-auto" src={sabersmithyTitle} alt="Sabersmithy" id="sabersmithy" />
        <img className="w-1/4 mx-auto" src={reforged} alt="Reforged" id="reforged" />
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App