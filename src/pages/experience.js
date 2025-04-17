import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import { motion } from "framer-motion";
import UKG from '../assets/UKGLogo.png'
import mercedes from '../assets/mercedesLogo.png'
import MDC from '../assets/MDCLogo.png'

function Experience() {
  const [index, setIndex] = useState(1);
  const [company, setCompany] = useState("Ultimate Kronos Group");
  const [position, setPosition] = useState("Software Engineer Intern");
  const [date, setDate] = useState("09/2024-12/2024");
  const totalIndexes = 3;

  const ShiftExperience = (right) => {
    if(right)
    {
      setIndex(prev => (prev + 1) % totalIndexes);
    }
  
    else
    {
      setIndex(prev => (prev - 1 + totalIndexes) % totalIndexes);
    }

    switch(index)
    {
      case 0:
        setCompany("Ultimate Kronos Group");
        setPosition("Software Engineer Intern");
        setDate("09/2024-12/2024");
        break;

      case 1:
        setCompany("Mercedes-Benz");
        setPosition("System/Network Analyst");
        setDate("08/2023-09/2024");      
        break;

      case 2:
        setCompany("Miami Dade College");
        setPosition("Computer Science Tutor");
        setDate("08/2022-08/2023");       
        break;
    }

  }
  
  return (
    <div>

      <body className='-z-50 bg-mainTwo m-0 p-0'></body>

      {/* Main Container */}
      <div className='z-0 bg-emerald-300 min-w-[320px] ml-[5%] mt-[20px]
      w-[90%] h-[400px] 
      top-[20px] 
      lg:top-[150px]
      '>
      
      {/* Title */}
      <div className='z-50 w-full h-[50px] text-center text-white bg-slate-600 font-bold 
      text-2xl leading-[2]
      '>

        {company}
      
      </div>

      {/* Date and Title Container */}
      <div className='z-50 w-full h-[30px] text-center text-gray-300 bg-slate-700 italic 
      text-sm leading-[2]
      '>
        
        {/* Job Title */}
        <div className='float-left ml-[2%] w-fit font-semibold'> {position} </div>

        {/* Time Worked */}
        <div className='float-right mr-[2%] w-fit'> {date} </div>

      </div>     

      {/* Image Container */}
      <div className='bg-red-500 h-[169px] w-full '>

        {/* <div className='relative'>
            <img src={UKG} alt="mer" className='h-[169px]'></img>
          </div> */}

        {/* Left Arrow */}
        <div onClick={() => ShiftExperience(false)} className='z-50 bg-black/50 hover:bg-black/60 active:bg-black/70 float-left h-[169px] w-[10%] text-white '>

          <FaArrowLeft className='active:ml-[-2px] h-[100%] w-full' />

        </div>

        {/* Right Arrow */}
        <div onClick={() => ShiftExperience(true)} className='z-50 bg-black/50 hover:bg-black/60 active:bg-black/70 float-right ml-[80%] h-[169px] w-[10%] text-white '>

          <FaArrowRight className='active:ml-[2px] h-[100%] w-full' />

        </div>
        
        
      </div>

      </div>
    </div>
  );
}

export default Experience;