import React from 'react';
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Website Logo.png';
import { useState } from 'react';
import { motion } from "framer-motion";
import '../index.css';

function Navbar() {
  const navigate = useNavigate();  
  const [navOpened, openNav] = useState(false);
  const [animStarted, startAnim] = useState(false);

  const Pagenvigation = (path) => {
     navigate(path);
     DelayClose();
  };
  
  const DelayClose = () => {
    startAnim(prev => !prev)

    // Instant for false to true.
    if (!navOpened) {
      openNav(true);
    } 
    
    // Delays from true to false.
    else {
      // Sets a 500ms delay
      setTimeout(() => openNav(false), 500);
    }
  };
  

  return (

    // Navbar main container
    <div className='z-50 bg-mainThree min-w-[320px] w-full
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
      <ul className="h-full absolute hidden text-center text-white text-[20px] max-w-[1536px]
      w-[50%] left-1/2 translate-x-[-49%]
      lg:flex
      ">

        {/* Navbar Options */}
        <div onClick={() => Pagenvigation('/')} 
        className="w-1/3 h-[80%] mt-[13px] bg-mainThree font-semibold hover:bg-mainTwo cursor-pointer select-none 
        shadow-lg shadow-black/50 active:mt-4 active:shadow-none border-4 border-mainTwo
        leading-[5] ml-[10px] mr-[10px]
        ">
        
          HOME
        
        </div>
        
        <div onClick={() => Pagenvigation('/experience')} 
        className="w-1/3 h-[80%] mt-[13px] bg-mainThree font-semibold hover:bg-mainTwo cursor-pointer select-none 
        shadow-lg shadow-black/50 active:mt-4 active:shadow-none border-4 border-mainTwo
        leading-[5]
        ">
        
          MY EXPERIENCE
        
        </div>
        
        <div onClick={() => Pagenvigation('/projects')} 
        className="w-1/3 h-[80%] mt-[13px] bg-mainThree font-semibold hover:bg-mainTwo cursor-pointer select-none 
        shadow-lg shadow-black/50 active:mt-4 active:shadow-none border-4 border-mainTwo
        leading-[5] ml-[10px] mr-[10px]
        ">
          
          MY PROJECTS
          
        </div>
      </ul>

      {/* Hamburger Icon */}
      <div className="text-white float-right me-[2%] cursor-pointer active:text-gray-500
        text-[60px] mt-[8px]
        sm:text-[80px] sm:mt-[5px] 
        lg:hidden
      \">

          <HiOutlineMenuAlt4 onClick={DelayClose}
      />
      </div>

    {navOpened && (

        <div className='z-50 w-[100%] h-[100%] overflow-hidden
        '>
          {/* Motion Animatior for Side Menu */}
          <motion.div className="z-50 float-right absolute w-[50%] h-[100%] bg-mainThree bor flex flex-col text-center border-4 
          border-mainTwo mt-[12px]
          sm:mt-[11px]
          lg:hidden
          "
            initial={{ right: "-80%" }}
            animate={{ right: animStarted ? 0 : "-80%" }}
            transition={{ duration: 0.4 }}
          >
            {/* Home Option */}
            <div onClick={() => Pagenvigation('/')} 
            className=" mt-[5%] h-[90px] w-[100%] bg-mainThree text-white font-semibold cursor-pointer select-none border-2 
            border-mainTwo shadow-bottom shadow-black/50 active:bg-mainTwo active:mt-[6%] active:shadow-none
            text-[20px] leading-[4.2]
            subAdj1:text-[30px] subAdj1:leading-[2.8]        
            ">
              
              Home
              
            </div>

            {/* Projects Option */}
            <div onClick={() => Pagenvigation('/projects')} 
            className=" mt-[5%] h-[90px] w-[100%] bg-mainThree text-white font-semibold cursor-pointer select-none border-2 
            border-mainTwo shadow-bottom shadow-black/50 active:bg-mainTwo active:mt-[6%] active:shadow-none
            text-[20px] leading-[4.2] 
            subAdj1:text-[30px] subAdj1:leading-[2.8]      
            ">
              My Projects
            
            </div>
            
            {/* Experience Option */} 
            <div onClick={() => Pagenvigation('/experience')} 
            className=" mt-[5%] h-[90px] w-[100%] bg-mainThree text-white font-semibold cursor-pointer select-none border-2 
            border-mainTwo shadow-bottom shadow-black/50 active:bg-mainTwo active:mt-[6%] active:shadow-none
            text-[20px] leading-[4.2]
            subAdj1:text-[30px] subAdj1:leading-[2.8]    
            ">
              My Experience
              
            </div>

            {/* Contacts Option */}
            <div onClick={() => Pagenvigation('/contacts')}
            className=" mt-[5%] h-[90px] w-[100%] bg-mainThree text-white font-semibold cursor-pointer select-none border-2 
            border-mainTwo shadow-bottom shadow-black/50 active:bg-mainTwo active:mt-[6%] active:shadow-none
            text-[20px] leading-[4.2]
            subAdj1:text-[30px] subAdj1:leading-[2.8]    
            ">
              Contacts
            
            </div>

          </motion.div>


          {/* Motion Animatior for Side Menu */}
          <motion.div className="z-40 float-right absolute w-[60%] h-[100%] bg-black/50
          mt-[12px]
          sm:mt-[11px]
          lg:hidden
          "
            initial={{ right: "-60%" }}
            animate={{ right: animStarted ? "45%" : "-60%" }}
            transition={{ duration: animStarted ? 0.6 : 0.3 }}
          />
        </div>

      )}

    </div>
  )
}

export default Navbar