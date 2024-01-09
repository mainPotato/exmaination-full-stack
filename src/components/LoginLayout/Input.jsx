import React, { useId } from 'react'
import './Input.css'

function Input({ name, label, type, value, setValue }) {
  const handleValueChange = (e) => {
    if (!setValue && type!="file") {
      alert('setValue function not passed!')
      return;
    }
    if (type === 'file') {
      const file = e.target.files[0];
      console.log(file);
      //Upload the file

      return;
    }
    setValue(e.target.value)
    console.log(value);
  }
  const id = useId()
  return (
    <div className='input-fields'>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} value={value} onChange={handleValueChange} />
    </div>
  )
}

export default Input