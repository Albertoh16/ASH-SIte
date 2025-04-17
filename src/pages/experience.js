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
      <div className='bg-lime-300 w-full h-full absolute flex flex-col'>

        
        <div className='relative h-fit w-fit
        rotate-[20deg] ml-[-5%] mt-[50px]'>

          {/* Card */}
          <div className='z-0 bg-emerald-400 ml-[50px]
          w-[170px] h-[150px]'>

          </div>

          {/* Pocket */}
          <div className='z-30 bg-amber-300 shadow-top absolute
          w-[200px] h-[200px] ml-[30px] mt-[-60px]'>

          </div>

        </div>

        <div className='relative h-fit w-fit
        rotate-[-20deg] mb-[100px]] ml-[55%] mt-[300px]'>

          {/* Pocket */}
          <div className='bg-amber-300 shadow-top
          w-[200px] h-[200px]'>

          </div>

        </div>
      </div>

    </div>
  );
}

export default Experience;