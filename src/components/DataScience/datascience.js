import React from 'react'
import './datascience.css'
import Card from '../Card/card'

const Datascience = (props) => {
  return (
    <div className='container'>
              {
            props.dataScience.map((program,index)=>( <Card
                program={program}
                key={index}
                />))
        }
    </div>
  )
}

export default Datascience