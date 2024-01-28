import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

function Navbar() {

  //call navigate to change the url via the navbar
  let navigate = useNavigate();

  const mouseIn = (e) =>
  {
    e.target.style.color = 'black';
  }

  const mouseOut = (e) =>
  {
    e.target.style.color = 'white';
  }

  return (
    <div className='navbar'>
        <div className='name'>
        <p>eggscellent</p>
        </div>
        <div className='options'>
          <p onClick={() => navigate('/')} onMouseEnter={mouseIn} onMouseLeave={mouseOut}>Mainpage</p>
          <p onClick={() => navigate('/renders')} onMouseEnter={mouseIn} onMouseLeave={mouseOut}>SFM Renders</p>
        </div>
    </div>
  )
}

export default Navbar