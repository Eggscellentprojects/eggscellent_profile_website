import React from 'react'
import FunnyGoat from './../../components/funny_goat';
import Card from './../../components/website_card';
import Contacts from './../../components/contacts';
import './index.css'

function MainPage() {
  return (
    <div>
        <div className='card_wrap'>
            <Card/>
        </div>
        <FunnyGoat/>
        <Contacts/>
    </div>
  )
}

export default MainPage