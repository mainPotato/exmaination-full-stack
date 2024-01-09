import React from 'react'
import { useState } from 'react'
import './Login.css'
import Input from './Input'

function Login() {
    const [uid, setUid] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='login-container'>
        <div className='image'>
            <img src="https://auts.ac.in/wp-content/uploads/2023/06/webpage-auts-aboutus-3jun23.png" alt="login" />
        </div>
        <div className='login-details'>
            <div className='login-info'>
                <h1>Login</h1>
                <p>Login with your UID and password. This wll help you access the your courses and all the exams details.</p>
            </div>
            <form className='login-input-container'>
                <Input label="AUID" type='text' value={uid} setValue={setUid} />
                <Input label="Password" type='password' value={password} setValue={setPassword} />
                <input type="submit" name="" id="" />
            </form>
        </div>
    </div>
  )
}

export default Login