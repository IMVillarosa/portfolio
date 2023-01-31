import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (

    // name property is for the react smooth scroll
    <div name='home' className='w-full h-screen bg-[#1D263B]'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#FFDE59]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#CCD6F6]'>Ivan Villarosa</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892B0]'>I'm a Frontend Developer</h2>
        <p className='text-[#8892B0] py-4 max-w-[700px]'>I'm a Frontend Developer who builds </p>

        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FFDE59] duration-300 hover:text-[#1D263B] hover:border-[#FFDE59]'>
          <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
            View Work
          </Link> 
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-4' />
          </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home