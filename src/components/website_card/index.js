import React from 'react'
import TitleCard from './../title_card';
import Renders from './../renders'
import Aboutme from '../about_me';
import './index.css'

function Card() {
  return (
    <div>
        <TitleCard/>
        <Aboutme/>
        <Renders/>
    </div>
  )
}

export default Card