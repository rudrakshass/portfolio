import React from 'react';
import './topbar.css';
import { motion } from 'motion/react';
import {Link} from 'react-scroll';
import chatbubble from '../../Assets/nav/chatting.png';

function Navbar(){
  return (
    <nav className="topbar">
        <motion.a 
        animate
        href="index.html" className="top_logo">Rudraksha</motion.a>
        <div className="topcontent">
            <Link to="home" className="topcontent_item">Home</Link>
            <Link to='about' className="topcontent_item">About</Link>
            <Link className="topcontent_item">Skills</Link>
            <Link className="topcontent_item">Qualifications</Link>
        </div>
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} className="contact"><img src={chatbubble} alt="chaticon" className='chaticon' />Contact Me</motion.button>
    </nav>
  )
}

export default Navbar;
