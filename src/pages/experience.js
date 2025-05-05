import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import UKG from '../assets/UKGLogo.png'
import UKGTeam from '../assets/UKGTeam.png'
import mercedes from '../assets/mercedesLogo.png'
import mercedesBuilding from '../assets/mercedesBuilding.png'
import MDC from '../assets/MDCLogo.png'
import MDCFriends from '../assets/friends.jpg'
import Footer from '../components/Footer';

function Experience() {  
  const [cardAnimated, setCardAnimation] = useState(false);
  const [cardAnimated2, setCardAnimation2] = useState(false);
  const [cardAnimated3, setCardAnimation3] = useState(false);

  const [visible, setVisibility] = useState(false);
  const [visible2, setVisibility2] = useState(false);
  const [visible3, setVisibility3] = useState(false);

  const [contentDisplayed, setContent] = useState(false);
  const [contentDisplayed2, setContent2] = useState(false);
  const [contentDisplayed3, setContent3] = useState(false);

  const [fitHeight, setFitHeight] = useState(false);
  const [fitHeight2, setFitHeight2] = useState(false);
  const [fitHeight3, setFitHeight3] = useState(false);

  const VisibilityToggle = (num) => {
    switch(num)
    {
      case 1:
        setFitHeight(false);
        setCardAnimation(!cardAnimated)

        if (!visible) 
        {
          // 200ms delay
          setTimeout(() => setVisibility(true), 200);

          // 500ms delay
          setTimeout(() => setContent(true), 400);
        } 
        
        else 
        {
          // Sets a 500ms delay
          setTimeout(() => setVisibility(false), 300);

          setContent(false);
        }
        break;

      case 2:
        setFitHeight2(false);
        setCardAnimation2(!cardAnimated2)      
        
        if (!visible2) 
        {
          // Sets a 200ms delay
          setTimeout(() => setVisibility2(true), 200);

          // 500ms delay
          setTimeout(() => setContent2(true), 400);
        } 
        
        else 
        {
          // Sets a 500ms delay
          setTimeout(() => setVisibility2(false), 300);
        
          setContent2(false);
        }
        break;

      case 3:
        setFitHeight3(false);
        setCardAnimation3(!cardAnimated3)    
        
        if (!visible3) 
        {
          // Sets a 200ms delay
          setTimeout(() => setVisibility3(true), 200);

          // 500ms delay
          setTimeout(() => setContent3(true), 400);
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


  const animation = cardAnimated
  ? {
      y: [-30, -120, -120, 100],
      width: ['60%', '75%', '85%', '100%'],
      height: contentDisplayed ? 'auto' : [190, 190, 650, 1290]
    }
  : {
      y: [100, -120, -120, -30],
      width: ['100%', '85%', '75%', '60%'],
      height: [1290, 650, 190, 190],
    };

    const animation2 = cardAnimated2
    ? {
      y: [-30, -120, -120, 100],
      width: ['60%', '75%', '85%', '100%'],
      height: contentDisplayed2 ? 'auto' : [190, 190, 650, 1290]
    }
  : {
      y: [100, -120, -120, -30],
      width: ['100%', '85%', '75%', '60%'],
      height: [1290, 650, 190, 190],
    };

    const animation3 = cardAnimated3
    ? {
      y: [-30, -120, -120, 100],
      width: ['60%', '75%', '85%', '100%'],
      height: contentDisplayed3 ? 'auto' : [190, 190, 650, 1290]
    }
  : {
      y: [100, -120, -120, -30],
      width: ['100%', '85%', '75%', '60%'],
      height: [1290, 650, 190, 190],
    };
  

  return (
    <div>

      {/*Main Container*/}
      <div className='bg-mainTwo w-screen h-fit flex flex-col overflow-hidden
      lg:grid lg:grid-cols-3 lg:grid-row-1 lg:gap-0
      '>

{/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        {/*UKG Sub Container*/}
        <motion.div className={`z-10 grid place-items-center w-full h-fit
        ${ contentDisplayed ? 'h-auto' : 'h-[400px] lg:h-[550px]' }
        lg:mt-[250px] lg:col-start-1 lg:row-start-1
        `}>
          
          {/* Subject Container */}
          <motion.div className={`bg-mainFour text-MainRedThree cursor-pointer text-center select-none border-black border-4 shadow-xl flex flex-col items-center relative
          ${ visible ? 'z-50' : 'z-0' } ${ cardAnimated ? 'mb-[120px] max-w-[500px] xl:max-w-[650px]' : 'max-w-[350px]' }
          mt-[95px] min-h-0
          w-[70%] leading-[2]
          lg:mt-[-40px]
          `}
          
          onClick={() => VisibilityToggle(1)}

          animate={animation}

            transition={{
              duration: 0.5,
              times: [0, 0.3, 0.6, 0.9],
              ease: "linear",
            }}

            onAnimationComplete={() => {
              setFitHeight(true);
            }}
          >

            {/* Company Name */}
            <div className='font-bold h-[50px] w-full text-MainRedThree bg-black/20 
            text-3xl leading-[1.5]
            lg:h-[80px] lg:text-[30px] lg:leading-[2.5] 
            '> 

              UKG 
            
            </div>

            {/* Divider */}
            <div className='bg-black relative h-[5px] w-full'></div>

            {/* Position */}
            <div className='relative font-semibold h-fit w-full text-MainRedThree bg-black/20 
            text-[16px] 
            lg:text-[25px]
            '> 
            
              Software Engineering Intern 
              
            </div>

            {/* Divider */}
            <div className='bg-black relative h-[5px] w-full'></div>

            {/* Date */}
            <div className='relative italic h-fit w-full text-[16px] bg-black/20 
            lg:text-[20px]
            '> 
            
            09/2024 - 12/2024 
            
            </div>

            {/* Divider */}
            <div className='bg-black relative h-[5px] w-full'></div>

            {/* Image One */}
            { contentDisplayed && (<img src={UKG} alt="ukglog" className='relative w-[90%] aspect-[2/1] border-black border-4 mt-[20px]'/>)}

            {/* Text Container One */}
            { contentDisplayed && (<div className='bg-black/20 relative w-[95%] font-semibold h-fit mt-[20px] mb-[20px]
            lg:text-2xl            
            '>

              In my time on UKG, I collaborated with the finance software development IT team and utilized C# with the ASP.NET MVC framework, 
              and used internal APIs to enhance our Microsoft Dynamics 365 environment. I also designed a solution for efficient customer data 
              management in SQL and even developed an in-house tool to streamline workflows and improve our internal operational efficiency!

            </div>)}

            {/* Divider */}
            <div className='bg-black relative h-[5px] w-full'></div>

            {/* Image Two */}
            { contentDisplayed && (<img src={UKGTeam} alt="ukgteam" className='relative w-[90%] aspect-[2/1] border-black border-4 mt-[20px]' />)}

            {/* Text Container Two */}
            { contentDisplayed && (<div className='bg-black/20 relative w-[95%] font-semibold h-fit mt-[20px] mb-[20px]
            lg:text-2xl
            '>

              I had a wonderful time working with my team! I was treated as if I had been there for years, and I was even asked for advice 
              on several technical design choices for our internal products. My time there felt short, but I decided to continue my college 
              studies so I can graduate and become an official software engineer, hopefully for a company as welcoming as UKG. Or who knows, 
              maybe UKG is my calling!

            </div>)}

          </motion.div>

          {/* UKG Pocket */}
          { !contentDisplayed && (<motion.div className={`bg-mainTwo shadow-top absolute max-w-[400px] mb-[30px] border-black border-2 flex flex-col select-none
          ${ visible ? 'z-0' : 'z-50' }
          justify-center text-MainRedThree items-center 
          w-[70%] h-[200px] text-4xl mt-[180px]
          sm:w-[70%] sm:text-5xl
          lg:h-[300px] lg:mt-[200px] lg:text-6xl lg:max-w-[300px]
          xl:max-w-[400px]
          2xl:max-w-[500px]
          `}
          >
            <div className='text-center p-0 font-bold mb-[5px]  
            '>

              09/2024

            </div>

            {/* Divider */}
            <div className='bg-MainRedTwo relative h-[10px] w-[70%] m-0
            max-w-[150px]
            sm:max-w-[220px]
            '>
            </div>

            <div className='text-center p-0 font-bold outline-black outline-8
            '>

              12/2024 

            </div>

          </motion.div>)}

        </motion.div>

{/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        {/*Mercedes Sub Container*/}
        <motion.div className={`z-10 grid place-items-center w-full h-fit
        ${ contentDisplayed2 ? 'h-auto' : 'h-[300px] lg:h-[550px]' }
        lg:mt-[250px] lg:col-start-2 lg:row-start-1
        `}>
          
          {/* Subject Container */}
          <motion.div className={`bg-mainFour text-MainRedThree cursor-pointer text-center select-none border-black border-4 shadow-xl flex flex-col items-center relative 
          ${ visible2 ? 'z-50' : 'z-0' } ${ cardAnimated2 ? 'mb-[120px] max-w-[500px] xl:max-w-[650px]' : 'max-w-[350px]' }
          mt-[0px]
          w-[70%] leading-[2]
          lg:mt-[-40px]
          `}
          
          onClick={() => VisibilityToggle(2)}

          animate={animation2}
          
          transition={{
            duration: 0.5,
            times: [0, 0.3, 0.6, 0.9],
            ease: "linear",
          }}

          onAnimationComplete={() => {
            setFitHeight2(true);
          }}
          >

            {/* Company Name */}
            <div className='font-bold h-[50px] w-full bg-black/20 
            text-2xl leading-[1.8]
            sm:text-3xl sm:leading-[1.5]
            lg:h-[80px] lg:text-[24px] lg:leading-[3] 
            xl:text-[27px] xl:leading-[2.8] 
            '> 

              Mercedes-Benz 
            
            </div>

            {/* Divider */}
            <div className='bg-black relative h-[5px] w-full'></div>

            {/* Position */}
            <div className='relative font-semibold h-fit text-[16px] w-full bg-black/20 
            lg:text-[25px]
            '> 
            
            System/Network Analyst 

            </div>

            {/* Divider */}
            <div className='bg-black relative h-[5px] w-full'></div>

            {/* Date */}
            <div className='relative italic h-fit text-[16px] w-full bg-black/20 
            lg:text-[20px]
            '> 
            
              08/2023 - 09/2024 
              
            </div>

            {/* Divider */}
            <div className='bg-black relative h-[5px] w-full'></div>

            {/* Image One */}
            { contentDisplayed2 && (<img src={mercedes} alt="ukglog" className='relative w-[90%] aspect-[2/1] border-black border-4 mt-[20px]'/>)}

            {/* Text Container One */}
            { contentDisplayed2 && (<div className='bg-black/20 relative w-[95%] font-semibold h-fit mt-[20px] mb-[20px]
            lg:text-2xl            
            '>

              While working at Mercedes-Benz of Coral Gables, I gained hands on experience in back-end IT, which focused on managing Windows Server environments 
              and ensuring system and network stability. I regularly utilized tools such as Office 365 Admin, Active Directory, and Azure to handle our user management, 
              security policies, and even cloud services. Additionally, I worked with the Kaseya suite of software for endpoint monitoring, mass software deployment, and 
              automating tasks. Even though this position had little to do with software engineering, it helped me sharpen my practical understanding of software engineering 
              concepts like system architecture, API integration, and the role of automation in scalable infrastructure!

            </div>)}

            {/* Divider */}
            <div className='bg-black relative h-[5px] w-full'></div>

            {/* Image Two */}
            { contentDisplayed2 && (<img src={mercedesBuilding} alt="ukgteam" className='relative w-[90%] aspect-[2/1] border-black border-4 mt-[20px]'/>)}

            {/* Text Container Two */}
            { contentDisplayed2 && (<div className='bg-black/20 relative w-[95%] font-semibold h-fit mt-[20px] mb-[20px]
            lg:text-2xl            
            '>

              The story of how I landed this position is pretty interesting! I actually started out as a porter for the company, and after just two months, I had the 
              opportunity to speak with the building's IT team and was transferred over as a trainee. After a couple of weeks, I was considered fit for the role, and 
              ever since then, I worked as IT support for the entire building! I was one of three team members and helped reorganize the company's infrastructure right 
              up until my bittersweet, yet adventurous departure to UKG! I'll never forget how lucky I was to land that position and the incredible chance the Coral Gables 
              branch gave me to join their IT team!

            </div>)}

          </motion.div>

          {/* Mercedes Pocket */}
          { !contentDisplayed2 && (<motion.div className={`bg-mainTwo shadow-top absolute max-w-[400px] mb-[30px] border-black border-2 flex flex-col select-none
          ${ visible2 ? 'z-0' : 'z-50' }
          justify-center text-MainRedThree items-center 
          w-[70%] h-[200px] text-4xl mt-[90px]
          sm:w-[70%] sm:text-5xl
          lg:h-[300px] lg:mt-[200px] lg:text-6xl lg:max-w-[300px]
          xl:max-w-[400px]
          2xl:max-w-[500px]
          `}
          >
            <div className='text-center p-0 font-bold mb-[5px]'>

              08/2023

            </div>

            {/* Divider */}
            <div className='bg-MainRedTwo relative h-[10px] w-[70%] m-0
            max-w-[150px]
            sm:max-w-[220px]
            '>
            </div>

            <div className='text-center p-0 font-bold'>

            09/2024 

            </div>

          </motion.div>)}

        </motion.div>

{/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        {/*Miami-Dade College Sub Container*/}
        <motion.div className={`z-10 grid place-items-center w-full h-fit
        ${ contentDisplayed3 ? 'h-auto' : 'h-[300px] lg:h-[550px]' }
        lg:mt-[250px] lg:col-start-3 lg:row-start-1 
        `}>
          
          {/* Subject Container */}
          <motion.div className={`bg-mainFour text-MainRedThree cursor-pointer text-center select-none border-black border-4 shadow-xl flex flex-col items-center relative
          ${ visible3 ? 'z-50' : 'z-0' } ${ cardAnimated3 ? 'mb-[120px] max-w-[500px] xl:max-w-[650px]' : 'max-w-[350px]' }
          mt-[0px]
          w-[70%] leading-[2]
          lg:mt-[-40px] 
          `}
          
          onClick={() => VisibilityToggle(3)}

          animate={animation3}

            transition={{
              duration: 0.5,
              times: [0, 0.3, 0.6, 0.9],
              ease: "linear",
            }}

            onAnimationComplete={() => {
              setFitHeight3(true);
            }}
          >

            {/* Company Name */}
            <div className='font-bold h-[50px] w-full bg-black/20 
            text-lg leading-[2.5]
            sm:text-3xl sm:leading-[1.5]
            lg:h-[80px] lg:text-[20px] lg:leading-[3.7] 
            xl:text-[27px] xl:leading-[2.8] 
            '> 

              Miami-Dade College
            
            </div>

            {/* Divider */}
            <div className='bg-black relative h-[5px] w-full'></div>

            {/* Position */}
            <div className='relative font-semibold h-fit text-[16px] w-full bg-black/20 
            lg:text-[25px]
            '> 
              
              Teacher's Assistant / CS Tutor 
              
            </div>

            {/* Divider */}
            <div className='bg-black relative h-[5px] w-full'></div>

            {/* Date */}
            <div className='relative italic h-fit w-full text-[16px] bg-black/20 
            lg:text-[20px]
            '> 
            
              08/2022 - 08/2023 
              
            </div>


            {/* Divider */}
            <div className='bg-black relative h-[5px] w-full'></div>

            {/* Image One */}
            { contentDisplayed3 && (<img src={MDC} alt="ukglog"className='relative w-[90%] aspect-[2/1] border-black border-4 mt-[20px]'/>)}

            {/* Text Container One */}
            { contentDisplayed3 && (<div className='bg-black/20 relative w-[95%] font-semibold h-fit mt-[20px] mb-[20px]
            lg:text-2xl           
            '>

              My venture first started in Miami Dade College. I first worked as a teacher's assistant, helping teach basic concepts for languages, such as C++, Java, and Python.
              After the semester ended, I was moved to be a general tutor for Computer Science, in which I tutored students in the same aforementioned languages as well as C and
              frameworks, like java spring and FX. 

            </div>)}

            {/* Divider */}
            <div className='bg-black relative h-[5px] w-full'></div>

            {/* Image Two */}
            { contentDisplayed3 && (<img src={MDCFriends} alt="ukgteam" className='relative w-[90%] aspect-[2/1/5] border-black border-4 mt-[20px]' />)}

            {/* Text Container Two */}
            { contentDisplayed3 && (<div className='bg-black/20 relative w-[95%] font-semibold h-fit mt-[20px] mb-[20px]
            lg:text-2xl            
            '>

              My time tutoring at MDC was fun, but I never would've guessed that it would also connect me with like-minded people, which you can see in the image above. I made 
              great friends with other tutors, and now we occasionally get together to work on all kinds of projects! We even won second place at the 2024 FIU ShellHack, one 
              of the largest hackathons in the nation! I may have taught many people at MDC, but I ended up learning something too; there are networking opportunities 
              everywhere, you just have to put yourself out there!

            </div>)}

          </motion.div>

          {/* Miami-Dade College Pocket */}
          { !contentDisplayed3 && (<motion.div className={`bg-mainTwo shadow-top absolute max-w-[400px] mb-[30px] border-black border-2 flex flex-col select-none
          ${ visible3 ? 'z-0' : 'z-50' }
          justify-center text-MainRedThree items-center 
          w-[70%] h-[200px] text-4xl mt-[90px]
          sm:w-[70%] sm:text-5xl
          lg:h-[300px] lg:mt-[200px] lg:text-6xl lg:max-w-[300px]
          xl:max-w-[400px]
          2xl:max-w-[500px]
          `}
          >
            <div className='text-center p-0 font-bold mb-[5px]'>

              08/2022

            </div>

            {/* Divider */}
            <div className='bg-MainRedTwo relative h-[10px] w-[70%] m-0
            max-w-[150px]
            sm:max-w-[220px]
            '>
            </div>

            <div className='text-center p-0 font-bold'>

              08/2023 

            </div>

          </motion.div>)}

        </motion.div>

          {/* Footer Container */}
          <div className='h-[200px] w-[100%] relative hidden bg-mainThree min-w-[320px] col-span-3
          lg:flex
          '>
          
              <Footer />
          
          </div>

      </div>   

    </div>
  );
}

export default Experience;