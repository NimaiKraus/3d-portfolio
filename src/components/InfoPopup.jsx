import React from 'react'
import { Link } from 'react-router-dom'

import {arrow} from '../assets/icons'

const Popup = ({text, linkPath, btnText}) => {
  return (
    <div className='bg-blue-500/60 rounded-md px-4 py-2.5 text-white flex flex-col gap-3 text-center max-w-[50%] items-center font-bold backdrop-blur-[9px] shadow-md'>
      {text}
      <Link to={linkPath} className="bg-white flex items-center justify-center text-slate-900 px-4 py-2.5 rounded-md w-fit gap-2 shadow-md">
        {btnText}
        <img src={arrow} alt="arrow" className='w-4 h-4 object-contain text-slate-900' />
      </Link>
    </div>
  )
}

const renderedPopup = {
  1: (
    <div className='bg-blue-500/60 rounded-md px-4 py-2.5 font-bold text-white text-center backdrop-blur-[9px] shadow-md'>
      Hi, I'm <span className="font-bold">Nimai</span> 👋
      <br />
      I'm a software developer and web enthusiast
    </div>
  ),
  2: (
    <Popup
      text={'I worked for several companies that contributes to grow my knowledge'}
      btnText={'Check my experiences'}
      linkPath={'/cv'}
    />
  ),
  3: (
    <Popup
      text={'I realized several professional projects that contributes to grow my knowledge'}
      btnText={'Check my portfolio'}
      linkPath={'/projects'}
    />
  ),
  4: (
    <Popup
      text={`Do you want to start a new project and you are searching for a developer?`}
      btnText={'Contact me'}
      linkPath={'/contacts'}
    />
  )
}

const InfoPopup = ({currentStage}) => {
  return (
    currentStage ? renderedPopup[currentStage] : null
  )
}

export default InfoPopup