import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './App/logIn.jsx'
import Home from './App/Home/Home.jsx'
import Module from './App/Home/Module/Module.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Layout Home con sidebar */}
        <Route path="/home" element={<Home />} />
          {/* Rotte annidate */}
          <Route path="/home/module" element={<Module />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
