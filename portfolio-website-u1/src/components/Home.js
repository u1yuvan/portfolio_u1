import React from 'react'
import { AppText } from '../constants'
import { homeImage } from '../assets'


const Home = () => {
  return (
    <div className='mt-5 p-5 md:px-14 flex flex-col md:flex-row  '>
       <div className=''>
       <h1 className='text-[40px] font-bold'>{AppText.hello}</h1>
        <h1 className='text-[40px] font-bold'>{AppText.iam} 
        <span className='gradient-text '>{AppText.yuvanraj}</span></h1>
        <h1 className=' text-gray-400'>{AppText.desc}</h1>
        <button className=' bg-blue-900 p-2 rounded-lg shadow-md mt-5 px-4 transition-all ease-in-out hover:scale-105 text-white w-24'>Resume</button>
       </div>
        <img src={homeImage} alt='home' className='w-[300px] md:w-[400px] '/>
    </div>
  )
}

export default Home