import React from 'react';
import './topbar.css';
import { motion } from 'motion/react';
import {Link} from 'react-scroll';
import chatbubble from '../../Assets/nav/chatting.png';

function Navbar(){
  return (
    <div className="topbar-container">
      <nav className="topbar">
          <motion.a 
          animate
          href="index.html" className="top_logo">Rudraksha</motion.a>
          <div className="topcontent">
              <Link to="home" className="topcontent_item" offset={-140}>Home</Link>
              <Link to='about' className="topcontent_item" offset={-140}>About</Link>
              <Link to="skills" className="topcontent_item" offset={-140}>Skills</Link>
              <Link to='projects' className="topcontent_item" offset={-140}>Projects</Link>
          </div>
          <Link to='contact' offset={-140}>
          <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} className="contact"><img src={chatbubble} alt="chaticon" className='chaticon' />Contact Me</motion.button>
          </Link>
      </nav>
    </div>
  )
}

export default Navbar;
