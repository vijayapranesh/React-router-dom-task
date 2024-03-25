import React from 'react'
import './cybersecurity.css'
import Card from '../Card/card'

const Cybersecurity = (props) => {
  return (
    <div className='container'>
              {
            props.cyberSecurity.map((program,index)=>( <Card
                program={program}
                key={index}
                />))
        }
    </div>
  )
}

export default Cybersecurity