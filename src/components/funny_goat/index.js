import React from 'react'
import FunnyGoatGif from './../../images/bluesei.gif'
import './index.css'

//This is just to add the Ralsei sprite at the top of the page

function FunnyGoat() {
  return (
    <div className='funny_goat'>
      <a href='https://gamebanana.com/members/2559360' target='_blank' rel='noreferrer'>
        <img src={FunnyGoatGif} alt='joat'/>
      </a>
    </div>
  )
}

export default FunnyGoat