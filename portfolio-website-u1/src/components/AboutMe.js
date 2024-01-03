import React from 'react'
import { classroom, graduation, school, graduationIcon } from '../assets'

const AboutMe = () => {
  return (
    <section>

      <h1 className=' gradient-text items-center flex justify-center text-[40px] font-bold mt-5 mb-64 '>
        About Me!
      </h1>
      <div className='flex flex-col justify-center sm:py-12'>
        <div className=' w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
          <div className=' relative text-gray-700 antialiased text-semibold '>
            {/* vertical line running through the middle */}
            <div className=' hidden absolute w-1 sm:block gradient_line h-full left-1/2 transform -translate-x-1/2'></div>

            {/* left card */}
            <div className=' mt-6 sm:mt-0 sm:mb-12  '>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className=' flex justify-start w-full mx-auto items-center animation_hidden show '>
                  <div className='w-full sm:w-1/2 sm:pr-8'>
                    <div className='bg-gradient-text p-4 rounded-lg  shadow hover:bg-gradient-text cursor-pointer '>
                      <h1 className=' font-semibold text-gray-900 text-[25px] ml-20 underline'> 2017</h1>
                      <img src={classroom} className=' rounded-full items-center flex justify-center p-7' />
                      <p className=' text-gray-900 text-[15px]'>Completed SSLC in Shree Matric School</p>

                    </div>
                  </div>
                </div>
                <div className=' w-10 h-10 absolute left-1/2  transform -translate-x-1/2 -translate-y-4  sm:translte-y-0 flex items-center justify-center rounded-full '>
                  <figure>
                    <img src={school} />
                  </figure>
                </div>
              </div>
            </div>
             {/* Right card */}
             <div className=' mt-6 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className=' flex justify-end w-full mx-auto items-center animation_hidden show'>
                  <div className='w-full sm:w-1/2 sm:pl-8'>
                    <div  className='bg-gradient-text p-4 rounded-lg shadow hover:bg-gradient-text  cursor-pointer'>
                      <h1 className=' font-semibold text-gray-900 text-[25px] ml-20 underline'> 2022 </h1>
                          <img  src={graduation} className=' rounded-full items-center flex justify-center p-7'/>
                          <p className=' text-gray-900 text-[15px]'>Diploma ECE Graduate in GRG Polytechnic College</p>
                         
                    </div>
                  </div>
                </div>
                <div className=' w-10 h-10 absolute right-1/2  transform -translate-x-1/2 -translate-y-4  sm:translte-y-0 flex items-center justify-center rounded-full '>
                  <figure>
                  <img src={graduationIcon} className=' ml-[39px] rounded-full m-3' />
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