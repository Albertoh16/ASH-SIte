import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useState } from 'react';
import Footer from './components/Footer';
import portrait from './assets/ProfessionalPic.jpg'
import logoImage from './assets/Website Logo.png'
import teamPic from './assets/TeamPicture.jpg'
import smallCollage from './assets/smallCollage.png'
import { FaArrowDown } from "react-icons/fa";
import largeCollage from './assets/largeCollage.png'
import { motion } from "framer-motion";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />

    
);

function Index(){
    const [opened, open] = useState(false);
    const [opened2, open2] = useState(false);
    const [opened3, open3] = useState(false);
    const [opened4, open4] = useState(false);

    return(
        <div>
            <title>ASH</title>
            <link rel="shortcut icon" type= 'image/png' href="assets/favicon.png" />

            {/* Main Image Container */}
            <div className='-z-40 w-full absolute min-w-[320px]
            h-48 top-20 
            sm:top-24 
            lg:h-80 lg:top-32
            '>

                {/* Large Collage */}
                <motion.img src={largeCollage} alt="port" className='z-0 h-full blur-sm w-full opacity-0 min-w-[320px]
                '

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2, ease: 'easeOut' }}
                >

                </motion.img>   
                
            </div>

            {/* Window */}
            <div className='z-10 bg-window text-white w-full text-center font-bold absolute min-w-[320px]
            h-52 top-20 text-3xl 
            sm:text-5xl sm:top-24
            lg:h-[340px] lg:top-32 lg:text-6xl 
            '>

                {/* Fakout Container */}
                <div className='z-10 text-white list-none text-center
                text-2xl
                sm:text-4xl
                lg:text-5xl
                '>

                    {/* Hello World Text */}
                    <motion.div className='aboslute select-none
                    translate-y-[150%]
                    sm:translate-y-[80%]
                    md:translate-y-[80%]
                    lg:translate-y-[120%]
                    '
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 2, ease: 'easeOut' }}                   
                    >
                     
                        &lt;h1&gt;HELLO WORLD!&lt;/h1&gt; 

                    </motion.div>
                    
                    {/* Fakeout Container */}
                    <div className='flex justify-center min-w-[320px]
                    mt-[90px]
                    sm:mt-[90px]
                    md:mt-[90px]
                    lg:mt-[170px]
                    '>
                        
                        <li className=' opacity-0 animate-fadeIn08out2 select-none'>Nah,</li>
                        <li className=' opacity-0 ml-2 animate-fadeIn15out2 select-none'>just kidding.</li>

                    </div>

                </div>
                
                {/* Welcome Text */}
                <div className='z-10 opacity-0 animate-fadeIn2 w-full absolute select-none max-w-[1536px] min-w-[320px]
                top-1/2 left-1/2 translate-y-[-70%] -translate-x-1/2
                '>
                    
                    Welcome to my website!
                </div>
            
            </div>
            
            {/* Main Container */}
            <div className='-z-50 bg-mainTwo w-full absolute flex flex-col min-w-[320px] h-fit
            top-[272px] 
            sm:top-[289px]
            lg:top-[448px]
            '>
                
                {/* About Me Subject Container */}
                <div onClick={() => open(prev => !prev)} 
                className='-z-10 bg-main font-bold text-MainRedThree relative left-1/2 top-[-1000px] cursor-pointer shadow-bottom 
                active:mt-1 active:shadow-none active:bg-mainThree translate-x-[-55.5%] h-16 ml-[5%] mb-4 max-w-[485px] animate-moveAMdown 
                sm:translate-x-[-56.5%] sm:h-20 sm:ml-[5%] sm:mb-1 sm:max-w-[600px]
                md:translate-x-[-55.5%] md:max-w-[700px]
                lg:translate-x-[-56%] lg:max-w-[900px]
                xl:max-w-[1100px]
                2xl:max-w-[50%] 2xl:translate-x-[-60%]
                '
                >

                    {/* Inner Subject Container */}
                    <div className='relative
                    text-[16px]
                    subAdj1:text-[20px]
                    sm:text-3xl
                    lg:text-center
                    xl:text-4xl 
                    '>
                
                        {/* Subject Title */}
                        <div className=' select-none
                        mt-[20px] ml-[5%]
                        subAdj1:mt-[17px]
                        sm:mt-[22px]
                        lg:ml-[0%]
                        xl:mt-[19px]
                        '>
                            "Who are you?"

                        </div>

                        {/* Subject Container Arrow */}
                        <motion.div className="absolute float-right 
                        tiny:text-xl tiny:top-[5px]
                        right-2 text-4xl top-[-5px]
                        subAdj1:top-[-3px]
                        sm:text-6xl sm:top-[-10px]
                        xl:text-7xl xl:top-[-14px]
                        "
                        animate={{ rotate: opened ? -180 : 0 }}
                        >
                            <FaArrowDown/>
                            
                        </motion.div>

                    </div>
                </div>

                {opened && (

                    // About Me Subject Context Section
                    <motion.div className='-z-20 bg-mainThree text-MainRedThree rounded-lg flex flex-col justify-center relative 
                    left-1/2 overflow-hidden translate-x-[-55.5%] h-fit ml-[5%] mb-[30px] mt-[-50px] max-w-[485px]
                    sm:translate-x-[-56.5%] sm:max-w-[600px] 
                    md:translate-x-[-55.5%] md:max-w-[700px]
                    lg:translate-x-[-56%] lg:max-w-[900px]
                    xl:max-w-[1100px]
                    2xl:max-w-[50%] 2xl:translate-x-[-60%]
                    '
                        initial={{ height: 0 }}
                        transition={{type: "spring", stiffness: 70}}
                        animate={{ height: opened ? "auto" : 0 }}
                    >

                        {/* Self Portrait Image */}
                        <img src={portrait} alt="port" className='relative ring-2 ring-black left-1/2 translate-x-[-50%]
                        h-[200px] w-[200px] top-[80px]
                        sm:h-[300px] sm:w-[300px] sm:top-[100px]
                        '/>      
                        
                        {/* "Who Am I" Text Container */}
                        <div className="text-center font-bold w-[90%] 
                        text-[1.2rem] ml-[5%] mt-[115px] mb-[14px]
                        sm:text-[1.3rem]
                        lg:text-[1.5rem]
                        xl:text-[1.7rem]
                        ">

                        My name is Alberto Hernandez. I'm currently a senior at FIU, studying for my Bachelor's in Computer Science (CS). 
                        Throughout my studies, I've made it my mission to dip my thumbs into all sorts of tech-related fields; whether it 
                        be software engineering, systems programming, or even my greatest passion: directing and engineering video games! 
                        So far, it's been a very busy, yet enlightening experience, getting to understand such a wide variety of intricacies 
                        and I only plan on continuing to expand my knowledge in everything the CS field has to offer!
                        
                        </div>
            
                    </motion.div>
                )}

                {/* About Site Subject Container */}
                <div onClick={() => open2(prev => !prev)} 
                className="-z-10 bg-main font-bold text-MainRedThree relative left-1/2 top-[-1000px] cursor-pointer shadow-bottom 
                active:mt-5 active:shadow-none active:bg-mainThree translate-x-[-55.5%] h-16 ml-[5%] mb-4 max-w-[485px] animate-moveASdown 
                sm:translate-x-[-56.5%] sm:h-20 sm:ml-[5%] sm:mb-1 sm:mt-4 sm:max-w-[600px]
                md:translate-x-[-55.5%] md:max-w-[700px]
                lg:translate-x-[-56%] lg:max-w-[900px]
                xl:max-w-[1100px]
                2xl:max-w-[50%] 2xl:translate-x-[-60%]
                ">

                    {/* Inner Subject Container */}
                    <div className='relative
                    text-[16px]
                    subAdj1:text-[20px]
                    sm:text-3xl
                    lg:text-center
                    xl:text-4xl
                    '>

                    <div className=' select-none
                    mt-[20px] ml-[5%]
                    subAdj1:mt-[17px]
                    sm:mt-[22px]
                    lg:ml-[0%]
                    xl:mt-[19px]
                    '>

                        "What's the point of this website?"

                    </div>

                        {/* Subject Container Arrow */}
                        <motion.div className="absolute float-right 
                        tiny:text-xl tiny:top-[5px]
                        right-2 text-4xl top-[-5px]
                        subAdj1:top-[-3px]
                        sm:text-6xl sm:top-[-10px]
                        xl:text-7xl xl:top-[-14px]
                        "
                        animate={{ rotate: opened2 ? -180 : 0 }}
                        >
                            <FaArrowDown/>
                            
                        </motion.div>

                    </div>                   
                </div>
                
                {opened2 && (

                    // About Me Subject Context Section
                    <motion.div 
                    className='-z-20 bg-mainThree text-MainRedThree rounded-lg flex flex-col justify-center relative left-1/2 overflow-hidden
                    translate-x-[-55.5%] h-fit ml-[5%] mb-[30px] mt-[-55px] max-w-[485px]
                    sm:translate-x-[-56.5%] sm:max-w-[600px]
                    md:translate-x-[-55.5%] md:max-w-[700px]
                    lg:translate-x-[-56%] lg:max-w-[900px]
                    xl:max-w-[1100px]
                    2xl:max-w-[50%] 2xl:translate-x-[-60%]
                    '
                        initial={{ height: 0 }}
                        transition={{type: "spring", stiffness: 70}}
                        animate={{ height: opened2 ? "auto" : 0 }}
                    >

                        {/* Different Teams Image */}
                        <img src={smallCollage} alt="port" className='relative ring-2 ring-black left-1/2 translate-x-[-50%]
                        h-[170px] w-[240px] mt-[80px]
                        sm:h-[250px] sm:w-[350px] sm:mt-[100px]
                        lg:h-[400px] lg:w-[500px] lg:mt-[100px]
                        '/>   

                        {/* "What's the point of this website?" Text Container */}
                        <div className="text-center font-bold w-[90%] 
                        text-[1.2rem] ml-[5%] mt-[20px] mb-[14px]
                        sm:text-[1.3rem]
                        lg:text-[1.5rem]
                        xl:text-[1.7rem]
                        ">

                        First and foremost, I want to leave my own little speck in this gigantic world-wide internet, I just think 
                        it’s cool to be a part of it in some way. That said, I have other reasons too. For instance, I want to create 
                        a unique-looking portfolio, something that showcases my personality, expertise, and overall journey in life. I’ve 
                        been lucky to work with all kinds of different teams, many of which include my closest friends!
                        
                        </div>
                    
                    </motion.div>
                )}

                {/* About CS Subject Container */}
                <div onClick={() => open3(prev => !prev)} 
                className="-z-10 bg-main font-bold text-MainRedThree relative left-1/2 top-[-1000px] cursor-pointer shadow-bottom 
                active:mt-5 active:shadow-none active:bg-mainThree translate-x-[-55.5%] h-16 ml-[5%] mb-4 max-w-[485px] animate-moveACSdown
                sm:translate-x-[-56.5%] sm:h-20 sm:mb-1 sm:mt-4 sm:max-w-[600px]
                md:translate-x-[-55.5%] md:mb-1 md:max-w-[700px]
                lg:translate-x-[-56%] lg:max-w-[900px]
                xl:max-w-[1100px]
                2xl:max-w-[50%] 2xl:translate-x-[-60%]
                "
                >

                    {/* Inner Subject Container */}
                    <div className='relative
                    text-[16px]
                    subAdj1:text-[20px]
                    sm:text-3xl
                    lg:text-center
                    xl:text-4xl
                    '>
                        
                        {/* Subject Title */}
                        <div className=' select-none
                        mt-[20px] ml-[5%]
                        subAdj1:mt-[17px]
                        sm:mt-[22px]
                        lg:ml-[0%]
                        xl:mt-[19px]
                        '>

                            "Why Computer Science?"

                        </div>

                        {/* Subject Container Arrow */}
                        <motion.div className="absolute float-right 
                        tiny:text-xl tiny:top-[5px]
                        right-2 text-4xl top-[-5px]
                        subAdj1:top-[-3px]
                        sm:text-6xl sm:top-[-10px]
                        xl:text-7xl xl:top-[-14px]
                        "
                        animate={{ rotate: opened3 ? -180 : 0 }}
                        >
                            <FaArrowDown/>
                            
                        </motion.div>

                    </div>
                </div>
                
                {opened3 && (

                    // About Me Subject Context Section
                    <motion.div className='-z-20 bg-mainThree text-MainRedThree rounded-lg flex flex-col justify-center relative left-1/2 overflow-hidden
                    translate-x-[-55.5%] h-fit ml-[5%] mb-[30px] mt-[-58px] max-w-[485px]
                    sm:translate-x-[-56.5%] sm:max-w-[600px]
                    md:translate-x-[-55.5%] md:max-w-[700px]
                    lg:translate-x-[-56%] lg:max-w-[900px]
                    xl:max-w-[1100px]
                    2xl:max-w-[50%] 2xl:translate-x-[-60%]
                    '
                        initial={{ height: 0 }}
                        transition={{type: "spring", stiffness: 70}}
                        animate={{ height: opened3 ? "auto" : 0 }}               
                    >

                        {/* Team Picture Container */}
                        <img src={teamPic} alt="port" className='relative ring-2 ring-black left-1/2 translate-x-[-50%]
                        h-[170px] w-[250px] mt-[80px]
                        sm:h-[250px] sm:w-[350px] sm:mt-[100px]
                        lg:h-[350px] lg:w-[450px]
                        '/>    

                        {/* "What's the point of this website?" Text Container */}
                        <div className=" text-center font-bold w-[90%] 
                        text-[1.2rem] ml-[5%] mt-[20px] mb-[14px]
                        sm:text-[1.3rem]
                        lg:text-[1.5rem]
                        xl:text-[1.7rem]
                        ">

                        As a child in the mid-2000s, I used to play with my dad's Dell laptop all the time, just opening all sorts 
                        of random Windows applications. Even though I had no clue what I was doing, I knew one thing: it was incredibly 
                        intriguing. I always compare it to watching a magic trick unfold in front of you, except, in this scenario, I didn’t 
                        just want to learn how the magic was done; I wanted to perform it myself. That curiosity brought me to where I am now. 
                        These days, you can find me working on small personal projects, interning at major tech companies like Mercedes-Benz 
                        and UKG, and even directing and developing a large-scale video game, slated for commercial release with a sizable team!
                       
                        </div>
                    
                    </motion.div>
                )}

                {/* About Logo Subject Container */}
                <div onClick={() => open4(prev => !prev)} 
                className="-z-10 bg-main font-bold text-MainRedThree relative left-1/2 top-[-1000px] cursor-pointer shadow-bottom 
                active:mt-5 active:shadow-none active:bg-mainThree translate-x-[-55.5%] h-16 ml-[5%] mb-12 max-w-[485px] animate-moveALdown
                sm:translate-x-[-56.5%] sm:h-20 sm:mt-4 sm:max-w-[600px]
                md:translate-x-[-55.5%] md:max-w-[700px]
                lg:translate-x-[-56%] lg:max-w-[900px]
                xl:max-w-[1100px]
                2xl:max-w-[50%] 2xl:translate-x-[-60%]
                ">

                    {/* Inner Subject Container */}
                    <div className='relative
                    text-[16px]
                    subAdj1:text-[20px]
                    sm:text-3xl
                    lg:text-center
                    xl:text-4xl
                    '>

                        {/* Subject Title */}
                        <div className=' select-none
                        mt-[20px] ml-[5%]
                        subAdj1:mt-[17px]
                        sm:mt-[22px]
                        lg:ml-[0%]
                        xl:mt-[19px]
                        '>
                            
                            "Where did the logo come from?"
                            
                        </div>

                        {/* Subject Container Arrow */}
                        <motion.div className="absolute float-right 
                        tiny:text-xl tiny:top-[5px]
                        right-2 text-4xl top-[-5px]
                        subAdj1:top-[-3px]
                        sm:text-6xl sm:top-[-10px]
                        xl:text-7xl xl:top-[-14px]
                        "
                        animate={{ rotate: opened4 ? -180 : 0 }}
                        >
                            <FaArrowDown/>
                            
                        </motion.div>

                    </div>
                </div> 
                
                {opened4 && (
                    // About Logo Subject Context Section
                    <motion.div className='-z-20 bg-mainThree text-MainRedThree rounded-lg flex flex-col justify-center relative 
                    left-1/2 overflow-hidden translate-x-[-55.5%] h-fit ml-[5%] mb-[80px] mt-[-61px] max-w-[485px]
                    sm:translate-x-[-56.5%] sm:max-w-[600px] 
                    md:translate-x-[-55.5%] md:max-w-[700px]
                    lg:translate-x-[-56%] lg:max-w-[900px]
                    xl:max-w-[1100px]
                    2xl:max-w-[50%] 2xl:translate-x-[-60%]
                    '
                        initial={{ height: 0 }}
                        transition={{type: "spring", stiffness: 70}}
                        animate={{ height: opened4 ? "auto" : 0 }}
                    >
                    
                        {/* Logo Picture Container */}
                        <img src={logoImage} alt="port" className='relative left-1/2 translate-x-[-50%]
                        h-[120px] w-[220px] mt-[50px]
                        sm:h-[180px] sm:w-[320px] sm:mt-[60px]
                        lg:mt-[60px]
                        '/>   
                    
                        {/* "Where did the logo come from?" Text Container */}
                        <div className=" text-center font-bold w-[90%]
                        text-[1.2rem] ml-[5%] mt-[20px] mb-[14px]
                        sm:text-[1.3rem]
                        lg:text-[1.5rem]
                        xl:text-[1.7rem]
                        ">

                        ASH represents the initials of my full name: Alberto Sebastian Hernandez. The design mimics my professional 
                        signature, where the “S” not only ties my first and last initials together but also resembles the infinity symbol. 
                        Why the infinity symbol? Well, there's an infinite number of ways to interpret that.
                        
                        </div>
                        
                    </motion.div>
                )}
                

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

export default Index;
