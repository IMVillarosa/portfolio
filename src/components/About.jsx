import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1D263B] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#FFDE59]'>About</p>
          </div>
          <div></div>
          </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div>
            <p className='sm:text-right text-4xl font-bold'>Hi, I'm Ivan, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I'm currently working as a Customer Support in Sydney, AU. With almost 4+ years of experience in web technology as a self-taught Frontend developer, I aim to provide my skills and knowledge as a contribution to the Tech industry.</p>
          </div>
        </div>
        </div>
      </div>
  )
}

export default About