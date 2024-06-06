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
          <p>Navebar goes here</p>
          <img src={sabersmithyTitle} alt="Sabersmithy" />
        </div>
        <ul>
          <li>Username Form goes here</li>
          <li>Password Form goes here</li>
        </ul>
        <div>
          <button onClick={() => navigate('/home')}>Login</button>
          <button onClick={() => navigate('/new')}>New User</button>
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