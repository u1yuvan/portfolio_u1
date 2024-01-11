import React, { useState } from 'react'
import { U15 } from '../assets'
import { navLinks } from '../constants'

const Navabr = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <div className=' flex justify-between'>
        <img src={U15} alt="logo" className=' h-[100px] sm:h-[140px] ml-2 rounded-full cursor-pointer p-5  ' />
        <div>
          <ul className=' list-none md:flex hidden justify-end items-center flex-row'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={` mt-6 cursor-pointer text-[18px] text-white transition-all ease-in-out hover:scale-110   ${index === navLinks.lenght - 1 ? 'mr-0' : 'mr-10'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=' md:hidden '>
          {toggle ? <svg xmlns="http://www.w3.org/2000/svg"
            onClick={() => setToggle(false)}
            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ml-[130px] mt-5 mr-[17px] cursor-pointer text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
            : <svg xmlns="http://www.w3.org/2000/svg"
              onClick={() => setToggle(true)}
              fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mt-5 cursor-pointer mr-[17px] text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          }
          {toggle ? <ul className=' list-none md:flex  items-center flex absolute flex-col bg-black-gradient p-3 mr-3 rounded-xl navbar_swing shadow-xl '>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={` mt-3 cursor-pointer text-[18px] items-center mx-6 flex flex-col align-middle justify-start text-white transition-all ease-in-out hover:scale-110  ${index === navLinks.lenght - 1 ? 'mb-0' : 'mb-3'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul> : null}

        </div>
      </div>


      <div className=' flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className=' w-[160px] h-[70px] flex justify-between items-center mb-[-20px]'>
            <a href="https://www.linkedin.com/in/yuvan-raj-374b26244/" target='blank' className=' flex justify-start items-center w-[138px] 
              ml-[-85px] pl-2 hover:ml-[-10px] bg-linkedin   text-white duration-300'>
              <span className='font-[500] ml-2 mr-3 text-[16px]'>Linkedin</span>
              <svg xmlns="http://www.w3.org/2000/svg" height={50} width={50} viewBox="0 0 448 512" className=' p-[5px]'><path fill="#FFFFFF" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
            </a>
          </li>
          <li className=' w-[160px] h-[70px] flex justify-between items-center'>
            <a href="https://github.com/u1yuvan" target='blank' className='  flex justify-start items-center w-[125px] ml-[-71px] pl-2  hover:ml-[-10px] bg-github   text-white duration-300'>
              <span className='font-[500] ml-2 mr-3 text-[16px]'>Github</span>
              <svg xmlns="http://www.w3.org/2000/svg" height={50} width={47} className=' p-[5px]' viewBox="0 0 496 512"><path fill="#ffffff" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </a>
          </li>
          <li className=' w-[160px] h-[60px] flex justify-between items-center'>
            <a href="https://www.linkedin.com/in/yuvan-raj-374b26244/"  target='blank' className='  flex justify-start items-center w-[138px] ml-[-85px] mt-[-35px] pl-2  hover:ml-[-10px] bg-linkedin   text-white duration-300'>
              <span className='font-[500] ml-2 mr-8 text-[16px]'>GMail</span>
              <svg xmlns="http://www.w3.org/2000/svg" height={45} width={50} className=' p-[5px] mr-1' viewBox="0 0 512 512"><path fill="#ffffff" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

  )
}


export default Navabr