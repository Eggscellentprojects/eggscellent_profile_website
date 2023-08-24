import React from 'react'
import heavygetsjumpedposter from './../../images/heavygetsjumped.png'
import merc_has_joined from './../../images/merc_has_joined.png'
import merkinary from './../../images/merkinary.png'
import spy_poster from './../../images/spy_poster.png'
import './index.css'

function Renders () {
  return (
    <div className='render_showcase'>
      <h1>SFM Renders</h1>
      <div className='render_wrap'>
        <img className='render_item' src={heavygetsjumpedposter} alt={"heaver"} width="640px" height="480px"/>
        <img className='render_item' src={merc_has_joined} alt={"heaver"} width="640px" height="480px"/>
        <img className='render_item' src={merkinary} alt={"heaver"} width="640px" height="480px"/>
        <img className='render_item' src={spy_poster} alt={"heaver"} width="640px" height="480px"/>
      </div>
      
    </div>
  )
}

export default Renders 