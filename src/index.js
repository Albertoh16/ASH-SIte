import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Styles.css'
import Footer from './components/Footer';
import portrait from './assets/ProfessionalPic.jpg'
import logoImage from './assets/Website Logo.png'
import teamPic from './assets/TeamPicture.jpg'
import smallCollage from './assets/smallCollage.png'
import largeCollage from './assets/largeCollage.png'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from 'react';
import Navbar from './components/Navbar';

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
            <div className='fakeout'>
                <h1 className='HW'>&lt;h1&gt;HELLO WORLD!&lt;/h1&gt;</h1>
                <div className='greeting'>
                    <li className='nah'>Nah,</li>
                    <li className='jk'>just kidding.</li>
                </div>
            </div>

            <Navbar />

            <h2 className='welcome'>Welcome to my website!</h2>
            
            <div class="mainContainer">
                <div className='window'></div>
                <img src={largeCollage} alt="port" className='largeCollage'/>   

                <div onClick={() => open(prev => !prev)} class="subjectContainer" id='aboutMe'>
                    <strong>"Who are you?"</strong>

                    {opened ? <FaArrowUp className="arrow" /> : <FaArrowDown className="arrow" />}
                </div>

                {opened && (
                    <div className='contextSection' id='AM'>
                        <h3 class="textContainer" id='who'>
                            My name is Alberto Hernandez, I'm currently a senior in FIU studying for my Bachelor's in Computer Science (CS).
                            While doing my studies, i've made it my mission to dip my thumbs in all sorts of fields relating to tech. Whether 
                            it be software engineering, systems programming, or even my greatest passion, directing, and 
                            engineering, video games! So far it's been a very busy, yet enlightning experience getting to understand such a wide
                            variety of intricacies and I only plan on continuing to span on as much knowledge the CS field has to offer!
                        </h3>
                        
                        <img src={portrait} alt="port" className='imgContainer' id='selfPortrait'/>                        
                    </div>
                )}

                <div onClick={() => open2(prev => !prev)} class="subjectContainer" id='aboutSite'>
                    <strong>"What's the point of this website?"</strong>

                    {opened2 ? <FaArrowUp className="arrow" /> : <FaArrowDown className="arrow" />}
                    
                </div>
                
                {opened2 && (
                    <div className='contextSection' id='AS'>
                        <h3 class="textContainer" id='what'>
                            Well first and foremost I want to leave my own little spec in this gigantic world-wide
                            internet, I just think it's cool to be a part of it in some way. However, I have my other
                            reasons; for instance, I want to have my own unique looking portfolio, something where I can
                            show my personality, expertise, and my overall journey in life. I've been lucky to have the
                            opportunity to work with all kinds of different teams, many of which are my closest friends!
                        </h3>

                        <img src={smallCollage} alt="port" className='imgContainer' id='journeyImg'/>   
                    </div>

                )}

                <div onClick={() => open3(prev => !prev)} class="subjectContainer" id='aboutCS'>
                    <strong>"Why Computer Science?"</strong>

                    {opened3 ? <FaArrowUp className="arrow" /> : <FaArrowDown className="arrow" />}
                    
                </div>
                
                {opened3 && (
                    <div className='contextSection' id='ACS'>
                        <h3 class="textContainer" id='why'>
                            As a child in the mid 2000s, I used to play with my dad's Dell laptop all
                            the time. Just opening all sorts of random Windows applications and not haveing
                            a clue in the world. I had no idea how any of that worked, but all I knew is that 
                            it was incredibly intriguing. I always compare it to seeing a magic trick unfold 
                            in front of you, except, in this scenario, I wanted to not only learn how the magic 
                            is done, but I wanted to do it myself; bringing me to where I am now. Nowadays, you
                            can find me working on random small projects, working in internships for large tech
                            companies such as Mercedes-Benz and UKG, and even directing and developing on a 
                            large-scale video game slated for commercial release with a sizable team!
                        </h3>
                        
                        <img src={teamPic} alt="port" className='imgContainer' id='teamImg'/>
                    </div>
                )}

                <div onClick={() => open4(prev => !prev)} class="subjectContainer" id='aboutLogo'>
                    <strong>"Where did the logo come from?"</strong>

                    {opened4 ? <FaArrowUp className="arrow" /> : <FaArrowDown className="arrow" />}
                    
                </div>
                
                {opened4 && (
                    <div className='contextSection' id='AL'>
                        <h3 class="textContainer" id='where'>
                            ASH is the initials of my full name, Alberto Sebastian Hernandez (ASH). The design
                            mimics that of my professional signature, where the S not only ties my first and last 
                            initials together, but also resembles the infinity symbol. Why the infinity symbol?
                            Well, there's an infinite amount of interpretations to that.
                        </h3>
                        
                        <img src={logoImage} alt="port" className='imgContainer' id='logoImg'/>
                    </div>
                )}
                
                
                <Footer />
            </div>

            
        </div>
    );
}

export default Index;
