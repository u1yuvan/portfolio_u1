import React from 'react';
import { datas } from '../constants';

const Modal = ({ activeID, setShowModal }) => {
  const data = datas.find(data => data.id === activeID)
  return (

    <div className='w-full h-full fixed top-0 left-0 z-10 bg-black bg-opacity-40'>
      <div className=' max-w-[600px] absolute top-1/2 left-1/2 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5'>
        <div>
          <figure>
            <img src={data.imageUrl} className=' rounded-[8px]' />
          </figure>
        </div>
        <div>
          <h2 className=' sm:text-2xl text-lg text-gradient_blue  font-[700] my-5'>{data.title}</h2>

          <p className=' sm:text-[15px] text-[12px] leading-6 tracking-wide text-gray-500 rounded-lg font-[400] '>
            {data.desc}</p>
          <div className=' mt-5 flex items-center gap-3 flex-wrap'>
            <h4 className=' text-gradient_blue text-[18px] text-[700] '>
              Technologies:
            </h4>
            {
              data.technologies.map((item, index) => (
                <span key={index} className=' bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0'>
                  {item}
                </span>
              ))}
          </div>
          <a href={data.link} target='blank'>
            <button className=' bg-gray-500 text-white py-2 px-4 my-8 button-56 rounded-[8px] hover:bg-gray-700 font-[500] '>Live Site</button>
          </a>
        </div>

        <button onClick={() => setShowModal(false)} className='w-[2rem] h-[2rem] bg-red-400 hover:bg-red-500 hover:scale-105 absolute top-[1.7rem] right-[1.7rem] rounded-sm text-[35x] shadow-2xl
         text-white flex items-center justify-center  '>
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Modal