import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Styles.css'
import Footer from './components/Footer';
import portrait from './assets/ProfessionalPic.jpg'
import logoImage from './assets/Website Logo.png'
import teamPic from './assets/TeamPicture.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />

    
);

function index(){
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

            
            <div className='window'></div>
            <div className='mainContainer'>
                <div className='contextSection'>
                    <div className='divider' id='dividerOne'>
                        <h2> <strong>Who am I?</strong> </h2>      

                        <h3 class="textContainer" id='who'>
                            My name is Alberto Hernandez, I'm currently a senior in FIU studying for my Bachelor's in Computer Science (CS).
                            While doing my studies, i've made it my mission to dip my thumbs in all sorts of fields relating to tech. Whether 
                            it be software development, constructing webapps, systems programming, or even my greatest passion, directing, and 
                            engineering, video games! So far it's been a very busy, yet enlightning experience getting to understand such a wide
                            variety of intricacies and I only plan on continuing to span on as much knowledge the CS field has to offer!
                        </h3>
                        
                        <img src={portrait} alt="port" className='imgContainer' id='selfPortrait'/>
                    </div>

                    <div className='divider' id='dividerTwo'>
                        <h2> <strong>Why Computer Science?</strong> </h2>
                        
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
                    
                    <div className='divider' id='dividerThree'>
                        <h2> <strong>What's with the logo?</strong> </h2>
                        
                        <h3 class="textContainer" id='what'>
                            ASH is the initials of my full name, Alberto Sebastian Hernandez (ASH). The design
                            mimics that of my professional signature, where the S not only ties my first and last 
                            initials together, but also resembles the infinity symbol. Why the infinity symbol?
                            Well, there's an infinite amount of interpretations to that.
                        </h3>
                        
                        <img src={logoImage} alt="port" className='imgContainer' id='logoImg'/>
                    </div>
                </div>

                <Footer />
            </div>
            <h2 className='welcome'>Welcome to my website!</h2>
        </div>
    );
}

export default index;
