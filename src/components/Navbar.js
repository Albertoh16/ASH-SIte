import React from 'react';
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Website Logo.png';
import { useState } from 'react';
import { motion } from "framer-motion";
import '../index.css';

function Navbar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
     navigate(path);
  };

  const [navOpened, openNav] = useState(false);

  return (

    // Navbar main container
    <div className='z-50 bg-orange-800 min-w-[335px] w-full
    h-20
    sm:h-24
    lg:h-32 lg:fixed
    '>

      {/* LogoImg */}
      <img src={logo} alt="logo" className=' absolute ml-[3%] select-none
        h-[50px] mt-[13px]
        sm:h-[60px] sm:mt-[17px]
        lg:h-[80px] lg:mt-[22px]
      '/>

      {/* Nav Menu */}
      <ul className="bg-yellow-200 h-full absolute hidden text-center text-white text-[20px]
      w-[50%] left-1/2 translate-x-[-49%]
      lg:flex
      ">

        {/* Navbar Options */}
        <div onClick={() => handleClick('/')} className="w-1/3 h-[80%] mt-[13px] bg-green-800 font-semibold hover:bg-red-400 cursor-pointer
        leading-[5] ml-[10px] mr-[10px]
        ">
        
          HOME
        
        </div>
        
        <div onClick={() => handleClick('/experience')} className="w-1/3 h-[80%] mt-[13px] bg-green-800 font-semibold hover:bg-red-400 cursor-pointer
        leading-[5]
        ">
        
          MY EXPERIENCE
        
        </div>
        
        <div onClick={() => handleClick('/projects')} className="w-1/3 h-[80%] mt-[13px] bg-green-800 font-semibold hover:bg-red-400 cursor-pointer
        leading-[5] ml-[10px] mr-[10px]
        ">
          
          MY PROJECTS
          
        </div>
      </ul>

      {/* Hamburger Icon */}
      <div className="text-white float-right me-[2%] cursor-pointer
        text-[60px] mt-[8px]
        sm:text-[80px] sm:mt-[5px] 
        lg:hidden
      \">

          <HiOutlineMenuAlt4 onClick={() => openNav(prev => !prev)}
      />
      </div>

      {/* <div className={`sideMenu ${navOpened ? 'Opened' : 'Closed'}`}>
        <div class="sideMenuSelect">Home</div>
        <div class="sideMenuSelect">My Projects</div>
        <div class="sideMenuSelect">My Experience</div>
        <div class="sideMenuSelect">Contacts</div>
      </div> */}

      <div style={{ pointerEvents: 'none' }} className='absolute w-[100%] h-[100%]  overflow-hidden' id='obj'>
        {/* Motion Animatior for Side Menu */}
        <motion.div className="z-50 float-right absolute right-[-100%] animate-slideMenuRight w-[50%] h-[100%] bg-slate-700 flex flex-col text-center
        mt-20
        sm:mt-24
        lg:hidden
        "
          animate={{ right: navOpened ? "0%" : "-60%" }}
          transition={{ duration: 0.5}}
        >
          {/* Home Option */}
          <div class=" mt-[5%] h-[10%] w-[100%] bg-teal-400 text-white font-semibold
          text-[20px] leading-[4.2]
          subAdj1:text-[30px] subAdj1:leading-[2.8]        
          ">
            
            Home
            
          </div>

          {/* Projects Option */}
          <div class=" mt-[5%] h-[10%] w-[100%] bg-teal-400 text-white font-semibold 
          text-[20px] leading-[4.2]
          subAdj1:text-[30px] subAdj1:leading-[2.8]      
          ">
            My Projects
          
          </div>
          
          {/* Experience Option */}
          <div class=" mt-[5%] h-[10%] w-[100%] bg-teal-400 text-white font-semibold 
          text-[20px] leading-[4.2]
          subAdj1:text-[30px] subAdj1:leading-[2.8]    
          ">
            My Experience
            
          </div>

          {/* Contacts Option */}
          <div class=" mt-[5%] h-[10%] w-[100%] bg-teal-400 text-white font-semibold 
          text-[20px] leading-[4.2]
          subAdj1:text-[30px] subAdj1:leading-[2.8]    
          ">
            Contacts
          
          </div>

        </motion.div>


        {/* Motion Animatior for Side Menu */}
        <motion.div className="z-40 float-right absolute right-[-100%] animate-slideMenuRight w-[50%] h-[100%] bg-black
        mt-20
        sm:mt-24
        lg:hidden
        "
          animate={{ right: navOpened ? "50%" : "-60%" }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  )
}

export default Navbar