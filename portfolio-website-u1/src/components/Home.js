import React from 'react'
import { AppText } from '../constants'
import { homeImage } from '../assets'


const Home = () => {
  return (
    <div className='mt-5 p-5'>
        <h1 className='text-[40px] font-bold'>{AppText.hello}</h1>
        <h1 className='text-[40px] font-bold'>{AppText.iam} 
        <span className=' text-gray-900'>{AppText.yuvanraj}</span></h1>
        <h1>{AppText.desc}</h1>
        <button>Resume</button>
        <img src={homeImage} alt='home image'/>
    </div>
  )
}

export default Home