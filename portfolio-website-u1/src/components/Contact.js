import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className=' w-full h-screen  flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/50a3999c-ce98-484c-afcc-f5cb39492605' className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className=' text-gray-300 py-4'>//Submit the form below or shoot me an email -
            <span className=' text-pink-500'> yuvanraj700@gmail.com</span></p>
          </div>
          <input className=' bg-[#ccd6f6] p-1 rounded ' type='text' placeholder='Name' name='name'/>
          <input className=" my-4 p-2 bg-[#ccd6f6] rounded " type='email' placeholder='Email' name='email'/>
          <textarea name='message' placeholder='  Message' rows="10" className=' bg-[#ccd6f6] rounded ' ></textarea>
          <button className=' text-white  btn41-43 btn-42 rounded hover:bg- px-4 py-3 my-8 mx-auto flex items-center'> Send Message</button>
      </form>
    </div>
  )
}

export default Contact