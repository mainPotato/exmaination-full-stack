import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../Input'
import './Register.css'
import './../Login/Login.css'

function Register() {
  const [auid, setAuid] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const navigate = useNavigate()

  const submitForm = () => {
    //add data to database and enter
    navigate('/home')
  }

  return (
    <>
      <div className='login-info'>
        <h1>Regiter</h1>
      </div>
      <form className='login-input-container' onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}>
        <Input label="AUID" type='text' name='auid' value={auid} setValue={setAuid} />
        <Input label="Full Name" type='text' name='fullName' value={fullName} setValue={setFullName} />
        <Input label="Password" type='password' name='password' value={password} setValue={setPassword} />
        <Input label="Phone Number" type='number' name='phoneNumber' value={phoneNumber} setValue={setPhoneNumber} />
        <Input label="Image" type='file' accept="image/*" />
        <input type="submit" name="" id="" value="Register" />
      </form>
    </>
  )
}

export default Register