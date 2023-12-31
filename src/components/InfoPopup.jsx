import { Link } from 'react-router-dom'

import {arrow} from '../assets/icons'

const Popup = ({text, linkPath, btnText}) => {
  return (
    <div className='bg-[#ddeaff99] backdrop-blur-[9px] rounded-md px-4 py-2.5 text-slate-800 flex flex-col gap-3 text-center max-w-[50%] items-center font-[550] shadow-md'>
      {text}
      <Link to={linkPath} className="bg-slate-700 hover:bg-slate-900 transition text-white flex items-center justify-center px-4 py-2.5 rounded-md w-fit mx-auto translate-y-5 gap-2 shadow-md">
        {btnText}
        <img src={arrow} alt="arrow" className='w-4 h-4 object-contain text-slate-900' />
      </Link>
    </div>
  )
}

const renderedPopup = {
  1: (
    <div className='bg-[#ddeaff99] rounded-md px-4 py-2.5 font-[550] text-slate-800 text-center backdrop-blur-[9px] shadow-md'>
      Hi, I&apos;m <span className="font-bold text-xl blue-gradient_text">Nimai</span> 👋
      <br />
      I&apos;m a software developer based in Italy 
      <Link to={'/contacts'} className="bg-slate-700 hover:bg-slate-900 transition text-white flex items-center justify-center px-4 py-2.5 rounded-md w-fit mx-auto translate-y-5 gap-2 shadow-md">
        Get in touch with me
        <img src={arrow} alt="arrow" className='w-4 h-4 object-contain text-slate-900' />
      </Link>
    </div>
  ),
  2: (
    <Popup
      text={'I worked for several companies that contributes to grow my knowledge'}
      btnText={'Check my experiences'}
      linkPath={'/about'}
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