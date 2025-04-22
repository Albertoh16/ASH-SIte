import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import { motion } from "framer-motion";
import UKG from '../assets/UKGLogo.png'
import UKGTeam from '../assets/UKGTeam.png'
import mercedes from '../assets/mercedesLogo.png'
import MDC from '../assets/MDCLogo.png'
import Footer from '../components/Footer';

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
  
  const [cardAnimated, setCardAnimation] = useState(false);
  const [cardAnimated2, setCardAnimation2] = useState(false);
  const [cardAnimated3, setCardAnimation3] = useState(false);

  const [visible, setVisibility] = useState(false);
  const [visible2, setVisibility2] = useState(false);
  const [visible3, setVisibility3] = useState(false);

  const [contentDisplayed, setContent] = useState(false);
  const [contentDisplayed2, setContent2] = useState(false);
  const [contentDisplayed3, setContent3] = useState(false);

  const VisibilityToggle = (num) => {
    switch(num)
    {
      case 1:
        setCardAnimation(!cardAnimated)

        if (!visible) 
        {
          // 200ms delay
          setTimeout(() => setVisibility(true), 100);

          // 500ms delay
          setTimeout(() => setContent(true), 200);
        } 
        
        else 
        {
          // Sets a 500ms delay
          setTimeout(() => setVisibility(false), 300);

          setContent(false);
        }
        break;

      case 2:
        setCardAnimation2(!cardAnimated2)      
        
        if (!visible2) 
        {
          // Sets a 200ms delay
          setTimeout(() => setVisibility2(true), 100);

          // 500ms delay
          setTimeout(() => setContent2(true), 500);
        } 
        
        else 
        {
          // Sets a 500ms delay
          setTimeout(() => setVisibility2(false), 300);
        
          setContent2(false);
        }
        break;

      case 3:
        setCardAnimation3(!cardAnimated3)    
        
        if (!visible3) 
        {
          // Sets a 200ms delay
          setTimeout(() => setVisibility3(true), 100);

          // 500ms delay
          setTimeout(() => setContent3(true), 500);
        } 
        
        else 
        {
          // Sets a 500ms delay
          setTimeout(() => setVisibility3(false), 300);
        
          setContent3(false);
        }
        break;
    }
  };

  return (
    <div>

      {/*Pocket Container*/}
      <div className='bg-lime-300 w-full h-[1400px] absolute flex overflow-hidden justify-center'>
        
        <motion.div className='z-10 bg-red-600 relative h-full w-full flex justify-center'

        animate={          
          cardAnimated
          ? 
          {
            marginBottom: [0, 800]
          }
          : 
          {
            marginBottom: [800, 0]
          }}

          transition={{
            duration: 1,
            times: [0, 0.5],
            ease: "easeInOut",
          }}
        >

          {/* Card */}
          <motion.div className={`absolute bg-emerald-400 text-white cursor-default text-center select-none border-black shadow-xl
          flex flex-col justify-center
          ${ visible ? 'z-50' : 'z-0' } ${ cardAnimated ? '' : 'lg:hover:mt-[-100px]' }
          mt-[110px] 
          w-[70%] h-fit leading-[2]
          `}
          
          onClick={() => VisibilityToggle(1)}

          animate={          
            cardAnimated
            ? 
            {
              y: [0, -130, -130, -40],
              width: ['60%', '60%', '90%', '90%'],
              height: [100, 100, 1150, 1150],
            }
            : 
            {
              y: [-10, -130, -130, 0],
              width: ['90%', '90%', '60%', '60%'],
              height: [650, 650, 100, 100],
            }}

            transition={{
              duration: 1,
              times: [0, 0.1, 0.3, 0.5],
              ease: "linear",
            }}
          >

            <div className='bg-orange-400 font-bold underline h-fit mt-[12px] 
            mb-[20px] text-3xl
            sm:text-4xl
            '> 

              UKG 
            
            </div>

            <div className='bg-pink-600 font-semibold h-fit text-[16px] mt-[-10px] mb-[10px]'> Software Engineering Intern </div>

            <div className='bg-purple-600 italic h-fit text-[16px] mt-[-10px] mb-[20px]'> 09/2024 - 12/2025 </div>

            { contentDisplayed && (<img src={UKG} alt="ukglog" className='h-[150px] w-[90%] ring-2 ring-black' />)}

            { contentDisplayed && (<div className='bg-red-300 font-semibold w-full h-fit mt-[20px]'>

              In my time on UKG, I collaborated with the finance software development IT team and utilized C# with the ASP.NET MVC framework, 
              and used internal APIs to enhance our Microsoft Dynamics 365 environment. I also designed a solution for efficient customer data 
              management in SQL and even developed an in-house tool to streamline workflows and improve our internal operational efficiency!

            </div>)}

            { contentDisplayed && (<img src={UKGTeam} alt="ukgteam" className='h-[160px] w-[90%] ring-2 ring-black mt-[20px]' />)}


            { contentDisplayed && (<div className='bg-yellow-950 font-semibold w-full h-fit mt-[20px]'>

              I had a wonderful time working with my team! I was treated as if I had been there for years, and I was even asked for advice 
              on several technical design choices for our internal products. My time there felt short, but I decided to continue my college 
              studies so I can graduate and become an official software engineer, hopefully for a company as welcoming as UKG. Or who knows, 
              maybe UKG is my calling!

            </div>)}

          </motion.div>

          {/* Pocket */}
          <motion.div className={`bg-amber-300 shadow-top absolute left-1/2 translate-x-[-50%]
          w-[70%] h-[200px] mt-[130px] ${ visible ? 'z-0' : 'z-50' }
          sm:h-[300px] sm:mt-[145px]
          `}>

          </motion.div>

        </motion.div>

          {/* Footer Container */}
          <div className='h-[200px] w-[100%] relative hidden bg-mainThree min-w-[320px]
          lg:flex
          '>
          
              <Footer />
          
          </div>

      </div>   

    </div>
  );
}

export default Experience;