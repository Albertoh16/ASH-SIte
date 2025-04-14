import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useState } from 'react';
import Footer from './components/Footer';
import portrait from './assets/ProfessionalPic.jpg'
import logoImage from './assets/Website Logo.png'
import teamPic from './assets/TeamPicture.jpg'
import smallCollage from './assets/smallCollage.png'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Navbar from './components/Navbar';
import largeCollage from './assets/largeCollage.png'

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
            
            <body className='-z-50 bg-mainTwo'></body>

            <h1 className='text-white text-2xl'>Work in progress!</h1>

            {/* Main Image Container */}
            <div className='-z-40 bg-orange-400 w-full absolute 
            h-48 top-20 min-w-[350px]
            sm:top-24 
            '>

                {/* Large Collage */}
                <img src={largeCollage} alt="port" className='h-full blur-sm w-full opacity-0 animate-fadeIn2'/>   
                
            </div>

            {/* Window */}
            <div className='-z-30 bg-window text-white w-full text-center font-bold absolute 
            h-48 top-20 text-3xl min-w-[350px]
            sm:text-5xl sm:top-24
            '>

                {/* Fakout Container */}
                <div className='-z-20 text-white list-none text-center 
                text-2xl
                sm:text-4xl
                '>

                    {/* Hello World Text */}
                    <h1 className=' animate-fadeOut2 aboslute 
                    translate-y-[40%]
                    '>
                     
                        &lt;h1&gt;HELLO WORLD!&lt;/h1&gt;

                    </h1>
                    
                    {/* Fakeout Container */}
                    <div className='flex justify-center 
                    mt-[3%]
                    sm:mt-[11%]
                    md:mt-[8%]
                    '>
                        
                        <li className=' opacity-0 animate-fadeIn08out2'>Nah,</li>
                        <li className=' opacity-0 ml-2 animate-fadeIn15out2'>just kidding.</li>

                    </div>

                </div>
                
                {/* Welcome Text */}
                <div className='-z-20 opacity-0 animate-fadeIn2 w-full absolute 
                top-1/2 left-1/2 translate-y-[-70%] -translate-x-1/2
                '>
                    
                    Welcome to my website!
                </div>
            
            </div>
            
            {/* Main Container */}
            <div className="-z-40 opacity-0 bg-amber-500 w-full absolute flex flex-col animate-fadeIn2
            h-400px top-[272px] min-w-[350px]
            sm:top-[289px]
            ">
                
                {/* About Me Subject Container */}
                <div onClick={() => open(prev => !prev)} className="-z-10 bg-lime-500 font-bold text-mainRed relative left-1/2 
                translate-x-[-55%] h-16 mt-4 ml-[5%] mb-4 max-w-[485px]
                sm:translate-x-[-57%] sm:h-20 sm:ml-[5%] sm:mb-1 sm:mt-4 sm:max-w-[600px]
                md:translate-x-[-58%] md:h-20 md:ml-[5%] md:mb-1 md:mt-4 md:max-w-[700px]
                ">

                    {/* Inner Subject Container */}
                    <div className='relative
                    text-[16px]
                    subAdj1:text-[20px]
                    sm:text-3xl
                    '>
                
                        {/* Subject Title */}
                        <div className='
                        mt-[20px] ml-[5%]
                        subAdj1:mt-[17px]
                        '>
                            "Who are you?"

                        </div>

                        {/* Subject Container Arrow */}
                        {opened ? <FaArrowUp className="absolute float-right 
                        right-2 text-4xl top-[-5px]
                        subAdj1:top-[-3px]
                        sm:right-2 sm:text-6xl sm:top-[-5px]
                        "/> : 

                        <FaArrowDown className="absolute float-right 
                        right-2 text-4xl top-[-5px]
                        subAdj1:top-[-3px]
                        sm:right-2 sm:text-6xl sm:top-[-5px]
                        "/>}

                    </div>
                </div>

                {opened && (

                    // About Me Subject Context Section
                    <div className='-z-20 bg-purple-600 text-mainRed rounded-lg flex flex-col justify-center relative left-1/2 w-[90%] 
                    translate-x-[-55%] h-fit ml-[5%] mb-[30px] mt-[-80px] max-w-[485px]
                    sm:translate-x-[-57%] sm:max-w-[600px]
                    md:translate-x-[-58%] md:max-w-[700px]
                    '>

                        {/* Self Portrait Image */}
                        <img src={portrait} alt="port" className='relative ring-2 ring-black left-1/2 translate-x-[-50%]
                        h-[200px] w-[200px] top-[80px]
                        sm:h-[300px] sm:w-[300px] sm:top-[100px]
                        '/>      
                        
                        {/* "Who Am I" Text Container */}
                        <div className="bg-sky-400 text-center font-semibold w-[90%] 
                        text-[1.3rem] ml-[5%] mt-[115px] mb-[14px]
                        ">

                            My name is Alberto Hernandez, I'm currently a senior in FIU studying for my Bachelor's in Computer Science (CS).
                            While doing my studies, i've made it my mission to dip my thumbs in all sorts of fields relating to tech. Whether 
                            it be software engineering, systems programming, or even my greatest passion, directing, and 
                            engineering, video games! So far it's been a very busy, yet enlightning experience getting to understand such a wide
                            variety of intricacies and I only plan on continuing to span on as much knowledge the CS field has to offer!
                        
                        </div>
            
                    </div>
                )}

                {/* About Site Subject Container */}
                <div onClick={() => open2(prev => !prev)} className="-z-10 bg-lime-500 font-bold text-mainRed relative left-1/2 
                translate-x-[-55%] h-16 ml-[5%] mb-4 max-w-[485px]
                sm:translate-x-[-57%] sm:h-20 sm:ml-[5%] sm:mb-1 sm:mt-4 sm:max-w-[600px]
                md:translate-x-[-58%] md:max-w-[700px]
                ">

                    {/* Inner Subject Container */}
                    <div className='relative
                    text-[16px]
                    subAdj1:text-[20px]
                    sm:text-3xl
                    '>

                    <div className='
                    mt-[20px] ml-[5%]
                    subAdj1:mt-[17px]
                    '>
                        "What's the point of this website?"

                    </div>

                        {/* Subject Container Arrow */}
                        {opened2 ? <FaArrowUp className="absolute float-right 
                        right-2 text-4xl top-[-5px]
                        subAdj1:top-[-3px]
                        sm:right-2 sm:text-6xl sm:top-[-5px]
                        "/> : 

                        <FaArrowDown className="absolute float-right 
                        right-2 text-4xl top-[-5px]
                        subAdj1:top-[-3px]
                        sm:right-2 sm:text-6xl sm:top-[-5px]
                        "/>}

                    </div>                   
                </div>
                
                {opened2 && (

                    // About Me Subject Context Section
                    <div className='-z-20 bg-purple-600 text-mainRed rounded-lg flex flex-col justify-center relative left-1/2 
                    translate-x-[-55%] w-[90%] h-fit ml-[5%] mb-[30px] mt-[-80px] max-w-[485px]
                    sm:translate-x-[-57%] sm:max-w-[600px]
                    md:translate-x-[-58%] md:max-w-[700px]
                    '>

                        {/* Different Teams Image */}
                        <img src={smallCollage} alt="port" className='relative ring-2 ring-black left-1/2 translate-x-[-50%]
                        h-[170px] w-[220px] mt-[80px]
                        sm:h-[250px] sm:w-[300px] sm:mt-[100px]
                        '/>   

                        {/* "What's the point of this website?" Text Container */}
                        <div className="bg-sky-400 text-center font-semibold 
                        w-[90%] text-[1.3rem] ml-[5%] mt-[20px] mb-[14px]
                        ">

                            Well first and foremost I want to leave my own little spec in this gigantic world-wide
                            internet, I just think it's cool to be a part of it in some way. However, I have my other
                            reasons; for instance, I want to have my own unique looking portfolio, something where I can
                            show my personality, expertise, and my overall journey in life. I've been lucky to have the
                            opportunity to work with all kinds of different teams, many of which are my closest friends!
                        </div>
                    
                    </div>
                )}

                {/* About CS Subject Container */}
                <div onClick={() => open3(prev => !prev)} className="-z-10 bg-lime-500 font-bold text-mainRed relative left-1/2 
                translate-x-[-55%] h-16 ml-[5%] mb-4 max-w-[485px]
                sm:translate-x-[-57%] sm:h-20 sm:mb-1 sm:mt-4 sm:max-w-[600px]
                md:translate-x-[-58%] md:mb-1 md:max-w-[700px]
                ">

                    {/* Inner Subject Container */}
                    <div className='relative
                    text-[16px]
                    subAdj1:text-[20px]
                    sm:text-3xl
                    '>
                        
                        {/* Subject Title */}
                        <div className='
                        mt-[20px] ml-[5%]
                        subAdj1:mt-[17px]
                        '>
                            "Why Computer Science?"

                        </div>

                        {/* Subject Container Arrow */}
                        {opened3 ? <FaArrowUp className="absolute float-right 
                        right-2 text-4xl top-[-5px]
                        subAdj1:top-[-3px]
                        sm:right-2 sm:text-6xl sm:top-[-5px]
                        "/> : 

                        <FaArrowDown className="absolute float-right 
                        right-2 text-4xl top-[-5px]
                        subAdj1:top-[-3px]
                        sm:right-2 sm:text-6xl sm:top-[-5px]
                        "/>}

                    </div>
                </div>
                
                {opened3 && (

                    // About Me Subject Context Section
                    <div className='-z-20 bg-purple-600 text-mainRed rounded-lg flex flex-col justify-center relative left-1/2 
                    translate-x-[-55%] w-[90%] h-fit ml-[5%] mb-[30px] mt-[-80px] max-w-[485px]
                    sm:translate-x-[-57%] sm:max-w-[600px]
                    md:translate-x-[-58%] md:max-w-[700px]
                    '>

                        {/* Team Picture Container */}
                        <img src={teamPic} alt="port" className='relative ring-2 ring-black left-1/2 translate-x-[-50%]
                        h-[170px] w-[220px] mt-[80px]
                        sm:h-[250px] sm:w-[300px] sm:mt-[100px]
                        '/>   

                        {/* "What's the point of this website?" Text Container */}
                        <div className="bg-sky-400 text-center font-semibold w-[90%] 
                        text-[1.2rem] ml-[5%] mt-[20px] mb-[14px]
                        sm:text-[1.3rem] sm:ml-[5%] sm:mt-[20px] sm:mb-[14px]
                        ">

                            As a child in the mid 2000s, I used to play with my dad's Dell laptop all
                            the time. Just opening all sorts of random Windows applications and not haveing
                            a clue in the world. I had no idea how any of that worked, but all I knew is that 
                            it was incredibly intriguing. I always compare it to seeing a magic trick unfold 
                            in front of you, except, in this scenario, I wanted to not only learn how the magic 
                            is done, but I wanted to do it myself; bringing me to where I am now. Nowadays, you
                            can find me working on random small projects, working in internships for large tech
                            companies such as Mercedes-Benz and UKG, and even directing and developing on a 
                            large-scale video game slated for commercial release with a sizable team!
                        </div>
                    
                    </div>
                )}

                {/* About Logo Subject Container */}
                <div onClick={() => open4(prev => !prev)} className="-z-10 bg-lime-500 font-bold text-mainRed relative left-1/2 
                translate-x-[-55%] h-16 ml-[5%] mb-4 max-w-[485px]
                sm:translate-x-[-57%] sm:h-20 sm:mb-4 sm:mt-4 sm:max-w-[600px]
                md:translate-x-[-58%] md:mb-4 md:max-w-[700px]
                ">

                    {/* Inner Subject Container */}
                    <div className='relative
                    text-[16px]
                    subAdj1:text-[20px]
                    sm:text-3xl
                    '>

                        {/* Subject Title */}
                        <div className='
                        mt-[20px] ml-[5%]
                        subAdj1:mt-[17px]
                        '>
                            
                            "Where did the logo come from?"
                            
                        </div>

                        {/* Subject Container Arrow */}
                        {opened4 ? <FaArrowUp className="absolute float-right 
                        right-2 text-4xl top-[-5px]
                        subAdj1:top-[-3px]
                        sm:right-2 sm:text-6xl sm:top-[-5px]
                        "/> : 

                        <FaArrowDown className="absolute float-right 
                        right-2 text-4xl top-[-5px]
                        subAdj1:top-[-3px]
                        sm:right-2 sm:text-6xl sm:top-[-5px]
                        "/>}

                    </div>
                </div> 
                
                {opened4 && (
                    // About Logo Subject Context Section
                    <div className='-z-20 bg-purple-600 text-mainRed rounded-lg flex flex-col justify-center relative left-1/2 
                    translate-x-[-55%] w-[90%] h-fit ml-[5%] mb-[80px] mt-[-80px] max-w-[485px]
                    sm:translate-x-[-57%] sm:max-w-[600px]
                    md:translate-x-[-58%] md:max-w-[700px]
                    '>
                    
                        {/* Team Picture Container */}
                        <img src={logoImage} alt="port" className='relative ring-2 ring-black left-1/2 translate-x-[-50%]
                        h-[120px] w-[220px] mt-[80px]
                        sm:h-[200px] sm:w-[320px] sm:mt-[90px]
                        '/>   
                    
                        {/* "Where did the logo come from?" Text Container */}
                        <div className="bg-sky-400 text-center font-semibold w-[90%]
                        text-[1.2rem] ml-[5%] mt-[20px] mb-[14px]
                        sm:text-[1.3rem] sm:ml-[5%] sm:mt-[20px] sm:mb-[14px]
                        ">

                            ASH is the initials of my full name, Alberto Sebastian Hernandez (ASH). The design
                            mimics that of my professional signature, where the S not only ties my first and last 
                            initials together, but also resembles the infinity symbol. Why the infinity symbol?
                            Well, there's an infinite amount of interpretations to that.
                        </div>
                        
                    </div>
                )}
                
            </div>
            
            {/* <Footer /> */}
        </div>
    );
}

export default Index;
