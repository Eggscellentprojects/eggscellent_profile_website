import React from 'react'
import TitleCard from './../title_card';
import Renders from './../renders'
import Contacts from './../contacts';
import Aboutme from '../about_me';
import './index.css'

function Card() {
  return (
    <div>
        <TitleCard/>
        <Aboutme/>
        <Renders/>
        <Contacts/>
    </div>
  )
}

export default Card