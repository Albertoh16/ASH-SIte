import React from 'react';
import resume from '../assets/Alberto_S_Hernandez_Resume.pdf'
import LetterOfRec from '../assets/ASH_UKG_LetterOfReccomendation.pdf'
import { motion } from "framer-motion"

function Contacts() {
  return (
    <div>
      
      <body className='-z-50 bg-mainTwo m-0 p-0'></body>

        {/* Main Contacts Container */}
      <div className='w-full h-fit absolute min-w-[320px] text-center
        top-20
        sm:top-24 
        lg:top-32
      '>

          <motion.div className='bg-main 0 relative w-[90%] text-center text-white max-w-[768px]
          h-[200px] ml-[5%] mt-[5%]
          sm:h-[250px] 
          md:ml-0 md:translate-x-[-50%] md:left-1/2
          '

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            
            {/* Title  */}
            <div class="font-bold underline text-MainRedThree 
            text-2xl pt-[10px] mb-[20px]
            sm:text-4xl sm:pt-[20px]
            ">
            
            Direct Contacts

            </div>

            <a href="mailto:albertohern1116@gmail.com" className=' font-semibold underline
            text-[20px]
            sm:text-[25px]
            '>
                
                albertohern1116@gmail.com
                
            </a>
            
            <div className=' font-semibold
            text-[20px] mt-[15px] 
            sm:text-[25px]
            '>
                
                Mobile Number:<br />(786) 479-1686 
            
            </div>

          </motion.div>

          <motion.div className='bg-main relative w-[90%] text-center text-white underline max-w-[768px]
          h-[200px] ml-[5%] mt-[5%]
          sm:h-[250px] 
          md:ml-0 md:translate-x-[-50%] md:left-1/2
          '
          
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            
            {/* Title  */}
            <div class="font-bold underline text-MainRedThree 
            text-2xl pt-[10px] mb-[20px]
            sm:text-4xl sm:pt-[20px]
            ">

            External Sites

            </div>

            <a href="https://www.linkedin.com/in/albertoh16/" target="_blank" className='font-semibold block underline
            text-[20px]
            sm:text-[25px]
            '>
            
                LinkedIn
            
            </a>

            <a href="https://github.com/Albertoh16" target="_blank" className='font-semibold block underline
            text-[20px] mt-[15px]
            sm:text-[25px]
            '>
                
                GitHub
                
            </a>

        </motion.div>

        <motion.div className='bg-main relative w-[90%] text-center text-white max-w-[768px]
        h-[200px] ml-[5%] mt-[5%] mb-[10%]
        sm:h-[250px] 
        md:ml-0 md:translate-x-[-50%] md:left-1/2
        '
          
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        >
            
            {/* Title  */}
            <div class="font-bold underline text-MainRedThree 
            text-2xl pt-[10px] mb-[20px]
            sm:text-4xl sm:pt-[20px]
            ">

            Documents

            </div>

            <a href={resume} download='Alberto_S_Hernandez_Resume.pdf' className='font-semibold underline block
            text-[20px] mt-[15px]
            sm:text-[25px]
            '>

                Resume
            
            </a>

            <a href={LetterOfRec} download='ASH_UKG_LetterOfReccomendation.pdf' className=' font-semibold underline block
            text-[20px] mt-[15px]
            sm:text-[25px]
            '>
                
                UKG Letter of Reccomendation
                
            </a>

        </motion.div>

      </div>

    </div>
  );
}

export default Contacts;