import React, { useState, useEffect } from 'react'
import { portfolio } from '../constants'

const Portfolio = () => {

  const [nextItems, setNextItems] = useState(2)
  const [portfolios, setPortfolios] = useState(portfolio)

  const loadMoreHandler = () => {
    setNextItems(prev => prev + 2)
  }

  return (
    <section id='portfolio'>
      <div className=' container'>
        <div className=' flex items-center justify-between flex-wrap'>
          <div className=' mb-7 sm:mb-0'>
            <h3 className='gradient-text text-[3rem] font-[700] ml-20'>
              My Projects
            </h3>
          </div>

          <div className=' flex gap-3'>
            <button className=' shadow hover:shadow-inner text-white border border-white border-solid py-2 px-4 rounded-[8px]' >
              All
            </button>
            <button className=' shadow hover:shadow-inner text-white border border-white border-solid py-2 px-4 rounded-[8px]' >
              React JS
            </button>
            <button className=' shadow hover:shadow-inner text-white border border-white border-solid py-2 px-4 rounded-[8px] mr-5' >
              Learning Projects
            </button>
          </div>
        </div>

        <div className=' flex items-center gap-4 flex-wrap mt-12'>
          {portfolios?.slice(0, nextItems)?.map((port, index) => (
            <div
            key={index}
              data-aos="zoom-in-up"
              data-aos-delay='50'
              data-aos-duration='1000'
              className='group max-w-full sm:w-[45.5%] md:w-[45.8%] lg:w-[45.2%] relative z-[1] flex justify-center items-center '>
              <figure>
                <img src={port.imageUrl} className=' rounded-[8px] w-full m-10 ml-16' />
              </figure>
              <div className='w-full h-[386px] m-10 ml-16 primary_gradient opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                <div className=' w-full h-full flex items-center justify-center'>
                  <button className=' text-white bg-black  hover:bg-gradient-text  py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>See Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=' text-center mt-6'>
          <button onClick={loadMoreHandler} className=' text-white bg-black  hover:bg-gradient-text  py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
            Load More
          </button>
        </div>

      </div>
    </section>
  )
}

export default Portfolio