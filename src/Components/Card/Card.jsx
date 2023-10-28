import React from 'react'
import './Card.css'
const Card = ({image,heading,detail}) => {
  return (
   <div className="card">
    <img src={image} alt="img" />
    <span>{heading}</span>
    <span>{detail}</span>
    <button className="cardbutton button">
      Source Code
    </button>
   </div>
  )
}

export default Card
