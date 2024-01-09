import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import { Home, Profile, Admission, Login } from './components'
import './index.css'
import LoginLayout from './components/LoginLayout/LoginLayout.jsx'
import MainLayout from './MainLayout.jsx'
import Register from './components/LoginLayout/Register/Register.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />} >
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path="/home" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/admission' element={<Admission />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

