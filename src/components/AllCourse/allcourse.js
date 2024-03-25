import React from 'react'
import Card from '../Card/card'
import './allcourse.css'

const Allcourse = (props) => {
  return (
    <div className='container'>
        {
            props.allProgram.map((program,index)=>( <Card
                program={program}
                key={index}
                />))
        }
    </div>
  )
}

export default Allcourse