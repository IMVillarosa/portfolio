import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1D263B] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/bbac4f94-7f88-4ee8-81bc-5000f53b2913" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#FFDE59] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form or connect with me in this email - ivanmarcialvillarosa@gmail.com</p>
        </div>

        <input className='bg-[#CCD6F6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#CCD6F6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#CCD6F6] p-2' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#FFDE59] hover:border-[#FFDE59] hover:text-[#1D263B] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>

      </form>
    </div>
  )
}

export default Contact