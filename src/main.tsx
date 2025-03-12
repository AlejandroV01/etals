import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'

const root = document.getElementById('root') as HTMLElement

createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* App is used as a layout route; its children will render where <Outlet /> is placed in App */}
        <Route path="/" element={<App />}>
          {/* Home page will render at "/" */}
          <Route index element={<Home />} />
          {/* Additional routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
