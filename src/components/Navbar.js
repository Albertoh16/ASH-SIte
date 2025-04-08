import React from 'react';
// import {BiSearch} from 'react-icons/bi'
// import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';

import '../styles/NavbarStyles.css'
import logo from '../assets/Website Logo.png';

function Navbar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
     navigate(path);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className='brandImg'/>
      <ul className="nav-menu">
        <li onClick={() => handleClick('/')}>HOME</li>
        <li onClick={() => handleClick('/experience')}>MY EXPERIENCE</li>
        <li onClick={() => handleClick('/projects')}>MY PROJECTS</li>
      </ul>
      <div className="hamburger">
        <HiOutlineMenuAlt4 className="icon" />
      </div>
    </div>
  )
}

export default Navbar