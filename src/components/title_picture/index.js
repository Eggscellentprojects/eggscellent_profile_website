import React from 'react'
import Joy from '../../images/joy.jpg'
import './index.css'

function TitlePicture() {
  return (
    <div>
        <img src={Joy} alt={"berded dergen"} height='250px' width='250px'></img>
        <p>^Art/Character by <a href='https://twitter.com/JDanielOArt' target='_blank' rel='noreferrer'>@JDanielOArt^</a></p>
    </div>
  )
}

export default TitlePicture