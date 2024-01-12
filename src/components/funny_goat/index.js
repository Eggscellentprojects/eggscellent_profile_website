import React from 'react'
import FunnyGoatGif from './../../images/funnygoat.gif'
import './index.css'

//This is just to add the Ralsei sprite at the top of the page

function FunnyGoat() {
  return (
    <div className='funny_goat'>
        <img src={FunnyGoatGif} alt='dancing joat'/>
    </div>
  )
}

export default FunnyGoat