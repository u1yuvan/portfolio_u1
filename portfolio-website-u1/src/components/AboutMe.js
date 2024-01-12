import React from 'react'
import { classroom, graduation, school, graduationIcon, work, workicon } from '../assets'

const AboutMe = () => {
  return (
    <section>

      <h1 className=' gradient-text items-center flex justify-center text-[40px] font-bold mt-5  ' id='aboutme'>
        About Me!
      </h1>
      <div className='flex flex-col justify-center sm:py-12'>
        <div className=' w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
          <div className=' relative text-gray-700 antialiased text-semibold '>
            {/* vertical line running through the middle */}
            <div className=' absolute w-1  gradient_line sm:block  hidden h-full left-1/2 transform -translate-x-1/2'></div>

            {/* left card */}
            <div className=' mt-6 sm:mt-0 sm:mb-12 flex items-center justify-center '>
              <div className='flex items-center flex-col sm:flex-row'>
                <div data-aos="zoom-out-right"
                  className=' flex sm:justify-start md:justify-start justify-center  mx-auto items-center  mb-5'>
                  <div className=' sm:w-[60%] w-[70%] sm:pr-8 sm:-ml-24 '>
                    <div className=' bg-gradient-text  p-4 rounded-lg shadow hover:shadow-2xl hover:scale-105 cursor-pointer '>
                      <h1 className=' font-semibold text-gray-900 text-[25px]  underline text-center'> 2018</h1>
                      <img src={classroom} className=' rounded-full items-center flex justify-center p-7' />
                      <p className=' text-gray-900 text-[15px]'>I accomplished SSLC completion in 2018 from Shree Matriculation School</p>

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
            <div className=' mt-10 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div data-aos="zoom-out-left"
                  className=' flex sm:justify-end md:justify-end justify-center w-full mx-auto items-center  mb-5'>
                  <div className=' sm:w-[60%] w-[70%]  sm:-mr-24  sm:pl-7'>
                    <div className='bg-gradient-text p-4 rounded-lg shadow hover:shadow-2xl hover:scale-105    cursor-pointer'>
                      <h1 className=' font-semibold text-gray-900 text-[25px] text-center underline'> 2022 </h1>
                      <img src={graduation} className=' rounded-full items-center flex justify-center p-6' />
                      <p className=' text-gray-900 text-[15px]'>Graduated with a Diploma in Electronics and Communication Engineering in 2022
                      </p>

                    </div>
                  </div>
                </div>
                <div className=' w-10 h-10 absolute right-1/2  transform -translate-x-1/2 -translate-y-4  sm:translte-y-0 flex items-center justify-center rounded-full '>
                  <figure>
                    <img src={graduationIcon} className='ml-[39px]' />
                  </figure>
                </div>
              </div>
            </div>

            <div className=' mt-6 sm:mt-0 sm:mb-12  '>
              <div className='flex items-center flex-col sm:flex-row '>
                <div
                  data-aos="zoom-out-right"
                  className=' flex sm:justify-start md:justify-start justify-center w-full mx-auto items-center  '>
                  <div className='sm:w-[60%] w-[70%]  sm:-ml-24 sm:pr-8'>
                    <div className='bg-gradient-text p-4 rounded-lg  shadow hover:shadow-2xl hover:scale-105   cursor-pointer '>
                      <h1 className=' font-semibold text-gray-900 text-[25px]  underline text-center'> 2022 - 2023 </h1>
                      <img src={work} className=' rounded-full items-center flex justify-center p-7' />
                      <p className=' text-gray-900 text-[15px]'>I gained valuable experience as a Relationship Manager at Maruti Suzuki NEXA, fostering strong connections with customers and enhancing their automotive experiences.</p>

                    </div>
                  </div>
                </div>
                <div className=' w-11 h-11 absolute left-1/2 primary_gradient  transform -translate-x-1/2 -translate-y-4  sm:translte-y-0 flex items-center justify-center rounded-full '>
                  <figure>
                    <img src={workicon} />
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