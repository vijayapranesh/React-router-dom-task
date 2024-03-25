import React from 'react'
import './fullsatck'
import Card from '../Card/card'
// import '../AllCourse/allcourse.css'


const Fullsatck = (props) => {
  return (
    <div className='container'>
        {
            props.fullStack.map((program,index)=>( <Card
                program={program}
                key={index}
                />))
        }
    </div>
  )
}

export default Fullsatck