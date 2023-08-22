import React from 'react'
import { Link } from 'react-router-dom'
import SteamIcon from './../../icons/steam.png'
import TwitterIcon from './../../icons/twitter.png'
import './index.css'
function Contacts() {

  return (
    <div className='contacts_wrap'>
        <h1>Socials:</h1>
        <div className='socials_wrap'>
            <p>Discord: eggscellent</p>
            <a href='https://steamcommunity.com/id/dudewholivesinarock/'>
              <img src={SteamIcon} alt={'Steam icon goes here'} width='40px' height='40px'/>
            </a>
            <a href='https://twitter.com/Eggscellent6'>
              <img src={TwitterIcon} alt={'Twitter icon goes here'} width='40px' height='40px'/>
            </a>
        </div>
    </div>
  )
}

export default Contacts