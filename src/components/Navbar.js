import React from 'react';
// import {BiSearch} from 'react-icons/bi'
// import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';

import '../styles/NavbarStyles.css'
import logo from '../assets/Website Logo.png';
import { useState } from 'react';

function Navbar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
     navigate(path);
  };

  const [navOpened, openNav] = useState(false);
  
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className='brandImg'/>
      <ul className="nav-menu">
        <div className="navMenuSelect" onClick={() => handleClick('/')}>HOME</div>
        <div className="navMenuSelect" onClick={() => handleClick('/experience')}>MY EXPERIENCE</div>
        <div className="navMenuSelect" onClick={() => handleClick('/projects')}>MY PROJECTS</div>
      </ul>
      <div className="hamburger">
          <HiOutlineMenuAlt4 className="icon" 
          onClick={() => openNav(prev => !prev)}
      />
      </div>
      <div className={`sideMenu ${navOpened ? 'Opened' : 'Closed'}`}>
        <div class="sideMenuSelect">Home</div>
        <div class="sideMenuSelect">My Projects</div>
        <div class="sideMenuSelect">My Experience</div>
        <div class="sideMenuSelect">Contacts</div>
      </div>

      <div className={`sideBlur ${navOpened ? 'Opened' : 'Closed'}`}> </div>
    </div>
  )
}

export default Navbar