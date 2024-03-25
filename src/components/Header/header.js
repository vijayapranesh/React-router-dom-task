import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
   <div>
     <div className='navContainer'>
        <div className='navItem'>
             <Link className='link' to={'./all'}>All</Link>
        </div>
        <div className='navItem'>
              <Link className='link' to={'./fullstack'}>FULL STACK DEVELOPMENT</Link>
        </div>
        <div className='navItem'>
              <Link className='link' to={'./datascience'}>DATA SCIENCE</Link>
        </div>
        <div className='navItem'>
              <Link className='link' to={'./cybersecurity'}>CYBER SECURITY</Link>
        </div>
        <div className='navItem'>
              <Link className='link' to={'./career'}>CAREER</Link>
        </div>
        
     </div>
    <hr></hr>
   </div>
  )
}

export default Header