import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />

    
);

function index(){
    return(
        <div>
            <div className='fakeout'>
                <h1 className='HW'>HELLO WORLD!</h1>
                <div className='greeting'>
                    <li className='nah'>Nah,</li>
                    <li className='jk'>just kidding.</li>
                </div>
            </div>

            <h2 className='welcome'>Welcome to my website!</h2>
        
            <div className='mainBox'>
                    
            </div>
        </div>
    );
}

export default index;
