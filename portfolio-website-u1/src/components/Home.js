import React from 'react'
import { AppText } from '../constants'
import { TypeAnimation } from 'react-type-animation';
import { coding } from '../assets';


const Home = () => {
  return (
    <div className=' p-5 sm:ml-20 ml-10 md:px-14  flex  sm:mt-14 items-center flex-col md:flex-row justify-center'>
      <div className=' '>
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
        
       
      </div>
          <img src={coding} className='  flex justify-center items-center w-[250px] sm:w-[280px] md:w-[350px] -ml-5 sm:ml-[150px] sm:mr-14 rounded-full shadow-lg shadow-black  ' />
    </div>
  )
}

export default Home