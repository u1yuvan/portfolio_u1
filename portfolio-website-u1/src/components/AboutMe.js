import React from 'react'
import { classroom } from '../assets'

const AboutMe = () => {
  return (
    <section>

      <h1 className=' gradient-text items-center flex justify-center text-[40px] font-bold mt-5 '>
        About Me!
      </h1>
      <div className='flex flex-col justify-center sm:py-12'>
        <div className=' w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
          <div className=' relative text-gray-700 antialiased text-semibold '>
            {/* vertical line running through the middle */}
            <div className=' hidden absolute w-1 sm:block gradient_line h-full left-1/2 transform -translate-x-1/2'></div>

            {/* left card */}
            <div className=' mt-6 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className=' flex justify-start w-full mx-auto items-center'>
                  <div className='w-full sm:w-1/2 sm:pr-8'>
                    <div  className='bg-gradient-text p-4 rounded-lg shadow hover:bg-gradient-text cursor-pointer fade-in-left'>
                          <h4 className='  font-semibold text-gray-900 text-[25px]'>Completed SSLC in 2017</h4>
                          <img  src={classroom} className=' rounded-full items-center flex justify-center p-7 '/>
                         
                    </div>
                  </div>
                </div>
                <div>
                  <figure>
                 
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </section>
  )
}

export default AboutMe