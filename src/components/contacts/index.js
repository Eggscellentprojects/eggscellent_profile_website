import React from 'react'
import SteamIcon from './../../icons/steam.png'
import TwitterIcon from './../../icons/twitter.png'
import './index.css'

//Display all available contacts

function Contacts() {

  return (
    <div className='socials_wrap'>

      <div className='react_wrap'>
        <h1 style={{fontSize:"30px"}}>Made with React.js</h1>
      </div>

      <div className='contacts_wrap'>
        <p>Discord: eggscellent</p>
        <a href='https://steamcommunity.com/id/dudewholivesinarock/' target='_blank' rel='noreferrer'>
          <img src={SteamIcon} alt={'Steam icon goes here'} width='40px' height='40px'/>
        </a>
        <a href='https://twitter.com/Eggscellent6' target='_blank' rel='noreferrer'>
          <img src={TwitterIcon} alt={'Twitter icon goes here'} width='40px' height='40px'/>
        </a>
      </div>
    </div>
  )
}

export default Contacts