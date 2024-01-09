import React, { useId } from 'react'
import './Login.css'

function Input({label, type, value, setValue}) {
    const handleValueChange = (e) => {
        if (setValue) {
            setValue(e.target.value)
        }
    }
    const id = useId()
  return (
    <div className='input-fields'>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} value={value} onChange={handleValueChange} />
    </div>
  )
}

export default Input