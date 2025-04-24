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

  const VisibilityToggle = (num) => {
    switch(num)
    {
      case 1:
        setCardAnimation(!cardAnimated)

        if (!visible) 
        {
          // 200ms delay
          setTimeout(() => setVisibility(true), 200);

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
          setTimeout(() => setVisibility2(true), 200);

          // 500ms delay
          setTimeout(() => setContent2(true), 200);
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
          setTimeout(() => setContent3(true), 200);
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

      {/*Main Container*/}
      <div className='bg-lime-300 w-full h-fit relative'>
        
        {/*UKG Sub Container*/}
        <motion.div className='z-10 bg-red-400 relative grid place-items-center h-[400px] w-full mt-[0px]'
        
        animate={          
        cardAnimated
        ? 
        {
          paddingBottom: [0, 1400]
        }
        : 
        {
          paddingBottom: [1400, 0]
        }}

        transition={{
          duration: 1,
          times: [0, 0.5],
          ease: "easeInOut",
        }}

        >
          
          {/* Subject Container */}
          <motion.div className={`bg-emerald-400 text-white cursor-default text-center select-none border-black shadow-xl block justify-center
          ${ visible ? 'z-50' : 'z-0' } ${ cardAnimated ? '' : 'lg:hover:mt-[100px]' }
          mt-[-40px] max-w-[400px]
          w-[70%] h-fit leading-[2]
          `}
          
          onClick={() => VisibilityToggle(1)}

          animate={          
            cardAnimated
            ? 
            {
              y: [0, 40, 40, 100],
              width: ['60%', '60%', '90%', '90%'],
              height: [70, 70, 1290, 1290],
            }
            : 
            {
              y: [100, 40, 40, 0],
              width: ['90%', '90%', '60%', '60%'],
              height: [1290, 650, 70, 70],
            }}

            transition={{
              duration: 1,
              times: [0, 0.1, 0.3, 0.5],
              ease: "linear",
            }}
          >

            {/* Company Name */}
            <div className='bg-orange-400 font-bold underline h-[40px]
            mb-[10px] text-3xl
            '> 

              UKG 
            
            </div>

            {/* Position */}
            <div className='bg-pink-600 relative font-semibold h-fit text-[16px] mt-[-10px] mb-[10px]'> Software Engineering Intern </div>

            {/* Date */}
            <div className='bg-purple-600 relative italic h-fit text-[16px] mt-[-10px] mb-[20px]'> 09/2024 - 12/2024 </div>

            {/* Image One */}
            { contentDisplayed && (<img src={UKG} alt="ukglog" className='w-[90%] ring-2 ring-black ml-[5%] h-[150px] max-w-[300px]'/>)}

            {/* Text Container One */}
            { contentDisplayed && (<div className='bg-red-300 relative w-[95%] ml-[2.5%] font-semibold h-fit mt-[20px]'>

              In my time on UKG, I collaborated with the finance software development IT team and utilized C# with the ASP.NET MVC framework, 
              and used internal APIs to enhance our Microsoft Dynamics 365 environment. I also designed a solution for efficient customer data 
              management in SQL and even developed an in-house tool to streamline workflows and improve our internal operational efficiency!

            </div>)}

            {/* Image Two */}
            { contentDisplayed && (<img src={UKGTeam} alt="ukgteam" className='relative w-[90%] ring-2 ring-black ml-[5%] h-[160px] mt-[20px] max-w-[300px]' />)}

            {/* Text Container Two */}
            { contentDisplayed && (<div className='bg-yellow-950 relative w-[95%] ml-[2.5%] font-semibold h-fit mt-[20px]'>

              I had a wonderful time working with my team! I was treated as if I had been there for years, and I was even asked for advice 
              on several technical design choices for our internal products. My time there felt short, but I decided to continue my college 
              studies so I can graduate and become an official software engineer, hopefully for a company as welcoming as UKG. Or who knows, 
              maybe UKG is my calling!

            </div>)}

          </motion.div>

          {/* UKG Pocket */}
          <motion.div className={`bg-amber-300 shadow-top absolute left-1/2 translate-x-[-50%] max-w-[400px]
          w-[70%] h-[200px] mt-[170px] ${ visible ? 'z-0' : 'z-50' }
          `}>

          </motion.div>

        </motion.div>

        {/*Mercedes Sub Container*/}
        <motion.div className='z-10 bg-red-600 relative grid place-items-center h-[300px] w-full mt-[0px]'
        
        animate={          
        cardAnimated2
        ? 
        {
          paddingBottom: [0, 1950]
        }
        : 
        {
          paddingBottom: [1950, 0]
        }}

        transition={{
          duration: 1,
          times: [0, 0.5],
          ease: "easeInOut",
        }}

        >
          
          {/* Subject Container */}
          <motion.div className={`bg-emerald-400 text-white cursor-default text-center select-none border-black shadow-xl block justify-center
          ${ visible2 ? 'z-50' : 'z-0' } ${ cardAnimated2 ? '' : 'lg:hover:mt-[100px]' }
          mt-[-150px] max-w-[400px]
          w-[70%] h-fit leading-[2]
          `}
          
          onClick={() => VisibilityToggle(2)}

          animate={          
            cardAnimated2
            ? 
            {
              y: [0, 40, 40, 180],
              width: ['60%', '60%', '90%', '90%'],
              height: [70, 70, 1840, 1840],
            }
            : 
            {
              y: [180, 40, 40, 0],
              width: ['90%', '90%', '60%', '60%'],
              height: [1840, 650, 70, 70],
            }}

            transition={{
              duration: 1,
              times: [0, 0.1, 0.3, 0.5],
              ease: "linear",
            }}
          >

            {/* Company Name */}
            <div className='bg-orange-400 font-bold underline h-[40px]
            mb-[10px] text-[25px] leading-[1.5]
            '> 

              Mercedes-Benz 
            
            </div>

            {/* Position */}
            <div className='bg-pink-600 relative font-semibold h-fit text-[16px] mt-[-10px] mb-[10px]'> System/Network Analyst </div>

            {/* Date */}
            <div className='bg-purple-600 relative italic h-fit text-[16px] mt-[-10px] mb-[20px]'> 08/2023 - 09/2024 </div>

            {/* Image One */}
            { contentDisplayed2 && (<img src={mercedes} alt="ukglog" className='w-[90%] ring-2 ring-black ml-[5%] h-[130px] max-w-[300px]'/>)}

            {/* Text Container One */}
            { contentDisplayed2 && (<div className='bg-red-300 relative w-[95%] ml-[2.5%] font-semibold h-fit mt-[20px]'>

              While working at Mercedes-Benz of Coral Gables, I gained hands on experience in back-end IT, which focused on managing Windows Server environments 
              and ensuring system and network stability. I regularly utilized tools such as Office 365 Admin, Active Directory, and Azure to handle our user management, 
              security policies, and even cloud services. Additionally, I worked with the Kaseya suite of software for endpoint monitoring, mass software deployment, and 
              automating tasks. Even though this position had little to do with software engineering, it helped me sharpen my practical understanding of software engineering 
              concepts like system architecture, API integration, and the role of automation in scalable infrastructure!

            </div>)}

            {/* Image Two */}
            { contentDisplayed2 && (<img src={mercedesBuilding} alt="ukgteam" className='relative w-[90%] ring-2 ring-black ml-[5%] h-[150px] mt-[20px] max-w-[300px]' />)}

            {/* Text Container Two */}
            { contentDisplayed2 && (<div className='bg-yellow-950 relative w-[95%] ml-[2.5%] font-semibold h-fit mt-[20px]'>

              The story of how I landed this position is pretty interesting! I actually started out as a porter for the company, and after just two months, I had the 
              opportunity to speak with the building's IT team and was transferred over as a trainee. After a couple of weeks, I was considered fit for the role, and 
              ever since then, I worked as IT support for the entire building! I was one of three team members and helped reorganize the company's infrastructure right 
              up until my bittersweet, yet adventurous departure to UKG! I'll never forget how lucky I was to land that position and the incredible chance the Coral Gables 
              branch gave me to join their IT team!

            </div>)}

          </motion.div>

          {/* Mercedes Pocket */}
          <motion.div className={`bg-amber-300 shadow-top absolute left-1/2 translate-x-[-50%] max-w-[400px]
          w-[70%] h-[200px] mt-[60px] ${ visible2 ? 'z-0' : 'z-50' }
          `}>

          </motion.div>

        </motion.div>

        {/*Miami-Dade College Sub Container*/}
        <motion.div className='z-10 bg-red-800 relative grid place-items-center h-[300px] w-full mt-[0px]'
        
        animate={          
        cardAnimated3
        ? 
        {
          paddingBottom: [0, 1500]
        }
        : 
        {
          paddingBottom: [1830, 0]
        }}

        transition={{
          duration: 1,
          times: [0, 0.5],
          ease: "easeInOut",
        }}

        >
          
          {/* Subject Container */}
          <motion.div className={`bg-emerald-400 text-white cursor-default text-center select-none border-black shadow-xl block justify-center
          ${ visible3 ? 'z-50' : 'z-0' } ${ cardAnimated3 ? '' : 'lg:hover:mt-[100px]' }
          mt-[-150px] max-w-[400px]
          w-[70%] h-fit leading-[2]
          `}
          
          onClick={() => VisibilityToggle(3)}

          animate={          
            cardAnimated3
            ? 
            {
              y: [0, 40, 40, 180],
              width: ['60%', '60%', '90%', '90%'],
              height: [70, 70, 1390, 1390],
            }
            : 
            {
              y: [180, 40, 40, 0],
              width: ['90%', '90%', '60%', '60%'],
              height: [1390, 650, 70, 70],
            }}

            transition={{
              duration: 1,
              times: [0, 0.1, 0.3, 0.5],
              ease: "linear",
            }}
          >

            {/* Company Name */}
            <div className='bg-orange-400 font-bold underline h-[40px]
            mb-[10px] text-[19px] leading-[2]
            '> 

              Miami-Dade College
            
            </div>

            {/* Position */}
            <div className='bg-pink-600 relative font-semibold h-fit text-[16px] mt-[-10px] mb-[10px]'> Teacher's Assistant / CS Tutor </div>

            {/* Date */}
            <div className='bg-purple-600 relative italic h-fit text-[16px] mt-[-10px] mb-[20px]'> 08/2022 - 08/2023 </div>

            {/* Image One */}
            { contentDisplayed3 && (<img src={MDC} alt="ukglog" className='w-[90%] ring-2 ring-black ml-[5%] h-[130px] max-w-[300px]'/>)}

            {/* Text Container One */}
            { contentDisplayed3 && (<div className='bg-red-300 relative w-[95%] ml-[2.5%] font-semibold h-fit mt-[20px]'>

              My venture first started in Miami Dade College. I first worked as a teacher's assistant, helping teach basic concepts for languages, such as C++, Java, and Python.
              After the semester ended, I was moved to be a general tutor for Computer Science, in which I tutored students in the same aforementioned languages as well as C and
              frameworks, like java spring and FX. 

            </div>)}

            {/* Image Two */}
            { contentDisplayed3 && (<img src={MDCFriends} alt="ukgteam" className='relative w-[90%] ring-2 ring-black ml-[5%] h-[180px] mt-[20px] max-w-[300px]' />)}

            {/* Text Container Two */}
            { contentDisplayed3 && (<div className='bg-yellow-950 relative w-[95%] ml-[2.5%] font-semibold h-fit mt-[20px]'>

              My time tutoring at MDC was fun, but I never would've guessed that it would also connect me with like-minded people, which you can see in the image above. I made 
              great friends with other tutors, and now we occasionally get together to work on all kinds of projects! We even won second place at the 2024 FIU ShellHack, one 
              of the largest hackathons in the nation! I may have taught many people at MDC, but I ended up learning something too; there are networking opportunities 
              everywhere, you just have to put yourself out there!

            </div>)}

          </motion.div>

          {/* Miami-Dade College Pocket */}
          <motion.div className={`bg-amber-300 shadow-top absolute left-1/2 translate-x-[-50%] max-w-[400px]
          w-[70%] h-[200px] mt-[60px] ${ visible3 ? 'z-0' : 'z-50' }
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