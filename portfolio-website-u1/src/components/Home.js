import React from 'react'
import { AppText } from '../constants'
import { homeImage } from '../assets'
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <div className='mt-5 p-5 md:px-14 flex flex-col md:flex-row '>
       <div className=''>
       <h1 className='text-[40px] gradient-text font-bold '>{AppText.hello}</h1>
        <div className='flex flex-col sm:flex-row '>
        <h1 className='text-[40px]  gradient-text font-bold pr-4'>{AppText.iam} </h1>
        <span className='text-[40px] font-bold'>
        <TypeAnimation
      sequence={[
        'Yuvan Raj',
        2000,
        'Frontend Dev',
        2000,
      ]}

      wrapper="span"
      speed={50}
      className='gradient-text'
      style={{ display: 'inline-block' }}
      repeat={Infinity} />

          </span>
        </div>
        <h1 className=' text-gray-300 flex '>{AppText.desc}</h1>
        <button className=' bg-blue-900 p-2 rounded-lg shadow-md mt-5 px-4 transition-all ease-in-out hover:scale-105 hover:bg-blue-700
        hover:text-black text-white w-24 hover:shadow-inner'>Resume</button>
       </div>
        <img src={homeImage} alt='home' className='w-[300px] md:w-[400px] '/>
    </div>
  )
}

export default Home