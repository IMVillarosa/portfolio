import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo-yellow-1.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#1D263B] text-gray-300'>
      <div>
        <img className='ml-8' src={Logo} alt='Website Log' style={{ width: '135px' }} />
      </div>


      {/* navbar menu */}
        <ul className='hidden md:flex'>
          <li>
            <Link to="home" smooth={true} offset={50} duration={500}>
          Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
          About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
          Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} offset={50} duration={500}>
          Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
          Contact
            </Link>
          </li>
        </ul>

      {/* hamburger menu */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {/* Line 28 - makes the hamburger menu in cross shape onClick */}
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1D263B] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
        Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
        About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
        Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
        Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
        Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-[#FFECD1]-400' href="https://www.linkedin.com/in/ivan-marcial-villarosa-589593111/">
              LinkedIn 
              <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-[#FFECD1]-400' href="https://github.com/IMVillarosa">
              Github 
              <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-[#FFECD1]-400' href="ivanmarcialvillarosa@gmail.com">
              Email 
              <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-[#FFECD1]-400' href="/">
              Resume 
              <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar