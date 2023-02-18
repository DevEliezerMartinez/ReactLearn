import React from 'react'
import brawlogo from '../assets/BS-game-icon.png'
function Header() {
  return (
    <header className=' w-full p-4 bg-gradient-to-r from-sky-500 to-indigo-500  flex flex-col items-center '>
        <h1 className='font-Montserrat font-bold text-6xl text-white '>Brawl stars API</h1>
        <img src={brawlogo } alt="brawLogo" className='w-96' />
    </header>
  )
}

export default Header