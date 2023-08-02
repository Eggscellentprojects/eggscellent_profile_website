import React from 'react'
import heavygetsjumpedposter from './../../images/heavygetsjumped.png'
import merc_has_joined from './../../images/merc_has_joined.png'
import merkinary from './../../images/merkinary.png'
import spy_poster from './../../images/spy_poster.png'
import './index.css'

function Renders () {
  return (
    <div className='render_showcase'>
      <h1>SFM Renders:</h1>
      <div className="render_wrap">
        <img src={heavygetsjumpedposter} alt={"heaver"} width="1280px" height="720px"/>
        <img src={merc_has_joined} alt={"heaver"} width="1280px" height="720px"/>
        <img src={merkinary} alt={"heaver"} width="1280px" height="720px"/>
        <img src={spy_poster} alt={"heaver"} width="1280px" height="720px"/>
      </div>
      
    </div>
  )
}

export default Renders 