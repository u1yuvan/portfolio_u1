import React, { useState, useEffect } from 'react'
import { portfolio } from '../constants'
import Modal from './Modal';

const Portfolio = () => {

  const [nextItems, setNextItems] = useState(2);
  const [portfolios, setPortfolios] = useState(portfolio);
  const [selectTab, setSelectTab] = useState('all')
  const [showModal, setShowModal] = useState(false)
  const [activeID, setActiveID] = useState(null)


  const loadMoreHandler = () => {
    setNextItems(prev => prev + 2)
  }

  const showModalHandler =id =>{
    setShowModal(true)
    setActiveID(id)
  }

  useEffect(() => {


      if(selectTab === 'all') {
        setPortfolios(portfolio)
      }
       
      if(selectTab === 'react_js') {
        const filteredPortfolio = portfolio.filter(item => item.type === 'react_js')
        setPortfolios(filteredPortfolio) 
      }
      
      if(selectTab === 'learning_time') {
        const filteredPortfolio = portfolio.filter(item => item.type === 'learning_time')
        setPortfolios(filteredPortfolio) 
      }

  } ,[selectTab])

  return (
    <section id='portfolio'>
      <div className=' container'>
        <div className=' flex items-center justify-evenly flex-wrap'>
          <div className=' mb-7 sm:mb-0'>
            <h3 className='gradient-text text-[3rem]  font-[700]  '>
              My Projects
            </h3>
          </div>

          <div className=' flex gap-3'>
            <button onClick={() => setSelectTab('all')} className=' shadow hover:shadow-inner hover:scale-105 text-white border border-white border-solid py-2 px-4 rounded-[8px]' >
              All
            </button>
            <button onClick={() => setSelectTab('react_js')} className=' shadow hover:shadow-inner hover:scale-105 text-white border border-white border-solid py-2 px-4 rounded-[8px]' >
              React JS
            </button>
            <button onClick={() => setSelectTab('learning_time')} className=' shadow hover:shadow-inner hover:scale-105 text-white border border-white border-solid py-2 px-4 rounded-[8px] mr-5' >
              Learning Projects
            </button>
          </div>
        </div>

        <div className=' flex items-center justify-center gap-4 flex-wrap mt-12'>
          {portfolios?.slice(0, nextItems)?.map((port, index) => (
            <div
            key={index}
              data-aos="zoom-in-up"
              data-aos-delay='50'
              data-aos-duration='1000'
              className='group max-w-full w-[70%] sm:w-[40.5%] md:w-[40.8%] lg:w-[40.2%] relative z-[1]  '>
              <figure>
                <img src={port.imageUrl} className=' rounded-[8px] w-full my-5 ' />
              </figure>
              <div className='w-full h-[343px] primary_gradient my-5 opacity-50 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                <div className=' w-full h-full flex items-center justify-center'>
                  <button onClick={() => showModalHandler(port.id)} className=' text-white bg-black  hover:bg-blue-600 hover:text-white  py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>See Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=' text-center mt-10'>

          {
            nextItems < portfolios.length && portfolio.length > 2 && 
            <button onClick={loadMoreHandler} className=' text-white bg-gray-600  hover:bg-black  py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
            Load More
          </button>
          }
          
        </div>
      </div>

      { showModal && <Modal setShowModal={setShowModal} activeID={activeID}/> }
    </section>
  )
}

export default Portfolio