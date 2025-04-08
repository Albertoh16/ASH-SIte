import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Styles.css'
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />

    
);

function index(){
    return(
        <div>
            <div className='fakeout'>
                <h1 className='HW'>&lt;h1&gt;HELLO WORLD!&lt;/h1&gt;</h1>
                <div className='greeting'>
                    <li className='nah'>Nah,</li>
                    <li className='jk'>just kidding.</li>
                </div>
            </div>

            
            <div className='window'></div>
            <div className='mc'>
                <Footer />
            </div>
            <h2 className='welcome'>Welcome to my website!</h2>
        </div>
    );
}

export default index;
