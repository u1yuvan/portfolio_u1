import React, { useState } from 'react'
import { logo1, logo2, U1, U12, U13, U14, U15 } from '../assets'
import { navLinks } from '../constants'

const Navabr = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <div className=' flex justify-between'>
        <img src={U14} alt="logo" className=' h-24 mt-2 ml-1' />
        <div>
          <ul className=' list-none md:flex hidden justify-end items-center flex-row'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={` mt-6 cursor-pointer text-[18px] text-gray-500 transition-all ease-in-out hover:scale-110 ${index === navLinks.lenght - 1 ? 'mr-0' : 'mr-10'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=' md:hidden'>
          {toggle ? <svg xmlns="http://www.w3.org/2000/svg"
        onClick={() => setToggle(false)}
            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ml-[135px] mt-5 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
            : <svg xmlns="http://www.w3.org/2000/svg"
        onClick={() => setToggle(true)}
              fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 m-5 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"  />
            </svg>
          }
          {toggle? <ul className=' list-none md:flex  items-center flex  flex-col bg-black-gradient p-3 mr-3 rounded-xl navbar_swing shadow-xl '>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={` mt-6 cursor-pointer text-[18px] items-center ml-5 flex flex-col justify-center text-white transition-all ease-in-out hover:scale-110 ${index === navLinks.lenght - 1 ? 'mr-0' : 'mr-10'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul> :null }
          
        </div>
      </div>
    </div>
  )
}

export default Navabr