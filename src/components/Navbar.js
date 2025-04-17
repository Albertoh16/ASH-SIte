import React from 'react';
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Website Logo.png';
import honk from '../assets/honk.mp3';
import { useState, useRef } from 'react';
import { motion } from "framer-motion";
import '../index.css';

function Navbar() {
  const navigate = useNavigate();  
  const [navOpened, openNav] = useState(false);
  const [animStarted, startAnim] = useState(false);
  const [pageTitleText, setTitleText] = useState("HOME");
  const audioRef = useRef(null);
  
  // Routes to respective page.
  const PageNavigation = (path) => {
    navigate(path);
    DelayClose();

  // Checking whether the current page is Home or something else.
   if(path.length === 1)
   {
     setTitleText("HOME");
   }

   else
   {

    // Sets page title variable to match current page.
     let str = path.substring(1, path.length);
     setTitleText(str.toUpperCase());
   }
 };

 // Delays side nav menu container from closing too soon. Avoids animation error.
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

  const PlaySound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  

  return (

    // Navbar main container
    <div className='z-50 bg-mainThree min-w-[320px] w-full
    h-20
    sm:h-24
    lg:h-32 lg:fixed
    '>

        {/* Page Title  */}
        <div class="font-bold text-white text-center w-[50%] left-1/2 absolute min-w-[167.5px]
        tiny:translate-x-[-40%] tiny:text-sm tiny:mt-[30px]
        text-lg mt-[25px] translate-x-[-50%]
        sm:text-5xl sm:mt-[22px]
        lg:float-right lg:mr-[3%] lg:text-4xl lg:mt-[43px] lg:w-auto lg:left-0 lg:relative lg:translate-x-0
        ">
        
        {pageTitleText}

        </div>

      {/* LogoImg */}
      <div className='h-fit w-fit'>
        <img onClick={PlaySound} src={logo} alt="logo" className=' absolute ml-[3%] select-none
          h-[50px] mt-[13px]
          sm:h-[60px] sm:mt-[17px]
          lg:h-[80px] lg:mt-[22px]
        '>
        </img>

        <audio ref={audioRef} src={honk} preload="auto" />
      </div>

      {/* Nav Menu */}
      {/* <ul className="h-full absolute hidden text-center text-white text-[20px] max-w-[1536px]
      w-[50%] left-1/2 translate-x-[-49%]
      lg:flex
      ">

        <div onClick={() => PageNavigation('/')} 
        className="w-1/3 h-[80%] mt-[13px] bg-mainThree font-semibold hover:bg-mainTwo cursor-pointer select-none 
        shadow-lg shadow-black/50 active:mt-4 active:shadow-none border-4 border-mainTwo
        leading-[5] ml-[10px] mr-[10px]
        ">
        
          HOME
        
        </div>
        
        <div onClick={() => PageNavigation('/experience')} 
        className="w-1/3 h-[80%] mt-[13px] bg-mainThree font-semibold hover:bg-mainTwo cursor-pointer select-none 
        shadow-lg shadow-black/50 active:mt-4 active:shadow-none border-4 border-mainTwo
        leading-[5]
        ">
        
          MY EXPERIENCE
        
        </div>
        
        <div onClick={() => PageNavigation('/projects')} 
        className="w-1/3 h-[80%] mt-[13px] bg-mainThree font-semibold hover:bg-mainTwo cursor-pointer select-none 
        shadow-lg shadow-black/50 active:mt-4 active:shadow-none border-4 border-mainTwo
        leading-[5] ml-[10px] mr-[10px]
        ">
          
          MY PROJECTS
          
        </div>
      </ul> */}

      {/* Hamburger Icon */}
      <div className="text-white float-right me-[2%] cursor-pointer active:text-gray-500
        text-[60px] mt-[8px]
        sm:text-[80px] sm:mt-[5px] 
        lg:hidden
      \">

          <HiOutlineMenuAlt4 onClick={() => DelayClose(0)}
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
            animate={{ right: animStarted ?  0 : "-80%" }}
            transition={{ duration: 0.4 }}
          >
            {/* Home Option */}
            <div onClick={() => PageNavigation('/')} 
            className=" mt-[5%] h-[90px] w-[100%] bg-mainThree text-white font-semibold cursor-pointer select-none border-2 
            border-mainTwo shadow-bottom shadow-black/50 active:bg-mainTwo active:mt-[6%] active:shadow-none
            text-[20px] leading-[4.2]
            subAdj1:text-[30px] subAdj1:leading-[2.8]        
            ">
              
              Home
              
            </div>

            {/* Projects Option */}
            {/* <div onClick={() => PageNavigation('/projects')} 
            className=" mt-[5%] h-[90px] w-[100%] bg-mainThree text-white font-semibold cursor-pointer select-none border-2 
            border-mainTwo shadow-bottom shadow-black/50 active:bg-mainTwo active:mt-[6%] active:shadow-none
            text-[20px] leading-[4.2] 
            subAdj1:text-[30px] subAdj1:leading-[2.8]      
            ">
              My Projects
            
            </div> */}
            
            {/* Experience Option */} 
            {/* <div onClick={() => PageNavigation('/experience')} 
            className=" mt-[5%] h-[90px] w-[100%] bg-mainThree text-white font-semibold cursor-pointer select-none border-2 
            border-mainTwo shadow-bottom shadow-black/50 active:bg-mainTwo active:mt-[6%] active:shadow-none
            text-[20px] leading-[4.2]
            subAdj1:text-[30px] subAdj1:leading-[2.8]    
            ">
              My Experience
              
            </div> */}

            {/* Contacts Option */}
            <div onClick={() => PageNavigation('/contacts')}
            className=" mt-[5%] h-[90px] w-[100%] bg-mainThree text-white font-semibold cursor-pointer select-none border-2 
            border-mainTwo shadow-bottom shadow-black/50 active:bg-mainTwo active:mt-[6%] active:shadow-none
            text-[20px] leading-[4.2]
            subAdj1:text-[30px] subAdj1:leading-[2.8]    
            ">
              Contacts
            
            </div>

          </motion.div>


          {/* Motion Animatior for Side Menu Shadow */}
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