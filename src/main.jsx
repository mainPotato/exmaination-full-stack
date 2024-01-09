import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import { Home, Profile, Examination, Login } from './components'
import './index.css'
import LoginLayout from './components/LoginLayout/LoginLayout.jsx'
import MainLayout from './MainLayout.jsx'
import Register from './components/LoginLayout/Register/Register.jsx'
import Courses from './components/Courses/Courses.jsx'

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
          <Route path='examination' element={<Examination />} />
          <Route path='courses' element={<Courses />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

