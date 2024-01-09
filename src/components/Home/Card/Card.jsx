import './Card.css'
import React from 'react'

function Card({img, heading, content}) {
  return (
    <div className='Card border rounded-2xl m-4 shadow-2xl'>
        <img src={img} alt="image" />
        <div className='card-content'>
            <h2>{heading}</h2>
            <p>{content}</p>
            <a href="#">Read more</a>
        </div>
    </div>
  )
}

export default Card