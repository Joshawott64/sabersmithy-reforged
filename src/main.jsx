import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import DraftPostPage from './pages/DraftPostPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import EditPage from './pages/EditPage.jsx'
import ForgePage from './pages/ForgePage.jsx'
import ForumPage from './pages/ForumPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import MinigameSelectPage from './pages/MinigameSelectPage.jsx'
import NewUserPage from './pages/RegisterPage.jsx'
import SaberSelectPage from './pages/SaberSelectPage.jsx'
import SandboxPage from './pages/SandboxPage.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route
        path='login'
        element={<LoginPage />}
      />

      <Route
        path='register'
        element={<NewUserPage />}
      />

      <Route
        path='home'
        element={<HomePage />}
      />

      <Route
        path='forge'
        element={<ForgePage />}
      />

      <Route 
        path='gallery'
        element={<GalleryPage />}
      />

      <Route 
        path='edit/:id'
        element={<EditPage />}
      />

      <Route 
        path='post/:id'
        element={<DraftPostPage />}
      />

      <Route 
        path='forum'
        element={<ForumPage />}
      />

      <Route 
        path='minigames'
        element={<MinigameSelectPage />}
      />

      <Route 
        path='select'
        element={<SaberSelectPage />}
      />

      <Route 
        path='sandbox'
        element={<SandboxPage />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
