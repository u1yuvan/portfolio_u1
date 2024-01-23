import React, { useState, useEffect } from 'react'
import { portfolio } from '../constants'
import Modal from './Modal';
import Button from './Button.css'

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
          <div >
            <h3 className='gradient-text text-[3rem]  font-[700]  '>
              My Projects
            </h3>
          </div>

          <div className=' flex gap-3'>
            <button onClick={() => setSelectTab('all')} className='btn2 hover:scale-105' >
              All
            </button>
            <button onClick={() => setSelectTab('react_js')} className=' btn2 hover:scale-105' >
              React JS
            </button>
            <button onClick={() => setSelectTab('learning_time')} className='btn2 hover:scale-105' >
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
              className='group max-w-full w-[70%] sm:w-[40.5%] md:w-[40.8%] lg:w-[40.2%]  relative z-[1]  '>
              <figure>
                <img src={port.imageUrl} className=' rounded-[8px] w-full my-5 shadow-md shadow-black ' />
              </figure>
              <div className='w-full h-[344px] primary_gradient my-5 opacity-50 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                <div className=' w-full h-full flex items-center justify-center'>
                  <button onClick={() => showModalHandler(port.id)} className='btn'><span>See Details</span></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=' text-center mt-10'>

          {
            nextItems < portfolios.length && portfolio.length > 2 && 
            <button onClick={loadMoreHandler} className=' btn41-43 btn-42 rounded'>
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