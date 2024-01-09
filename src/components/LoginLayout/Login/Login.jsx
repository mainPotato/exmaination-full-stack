import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import Input from '../Input'

function Login() {
    const [uid, setUid] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const submitForm = () => {
        let login = true
        // Logic of checking the credentials

        if (login) {
            navigate('/home')
        }
    }

    return (
        <>
            <div className='login-info'>
                <h1>Login</h1>
                <p>Login with your UID and password. This wll help you access the your courses and all the exams details.</p>
            </div>
            <form className='login-input-container' onSubmit={(e) => {
                e.preventDefault();
                submitForm();
            }}>
                <Input label="AUID" type='text' value={uid} setValue={setUid} />
                <Input label="Password" type='password' value={password} setValue={setPassword} />
                <input type="submit" name="" id="" value="Login" />
                <p><a href="">Forgot password</a></p>
            </form>
            <div>
                <h1>Don't have an account! Register here</h1>
            </div>
        </>

    )
}

export default Login