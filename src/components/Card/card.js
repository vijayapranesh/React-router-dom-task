import React from 'react'
import './card.css'

const Card = (props) => {
const {program} = props
  return (
    <div className='mainContainer'>
        <div><img src={program.imgURL} alt='image'></img></div>
        <div className='content'><h3>{program.content}</h3></div>
    </div>
  )
}

export default Card