import React from 'react'
import myLogo from '../assets/images/myLogoWhite.png';

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center p-3 shadow-sm text-white fixed top-0 z-10'>
      <img src={myLogo} alt="my logo" className='w-24 object-contain' />
      <div className='flex items-center gap-2'>
        <span>
          Contatti
        </span>
        <span>
          Progetti
        </span>
      </div>
    </nav>
  )
}

export default Navbar