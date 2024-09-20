import React from 'react';
import './topbar.css';
import {Link} from 'react-scroll'
import chatbubble from '../../Assets/chatting.png'

function Navbar(){
  return (
    <nav className="topbar">
        <Link href="index.html" className="top_logo">Rudraksha</Link>
        <div className="topcontent">
            <Link to="home" className="topcontent_item">Home</Link>
            <Link to='about' className="topcontent_item">About</Link>
            <Link to='skills' className="topcontent_item">Skills</Link>
            <Link className="topcontent_item">Qualifications</Link>
        </div>
        <button className="contact"><img src={chatbubble} alt="chaticon" className='chaticon' />Contact Me</button>
    </nav>
  )
}

export default Navbar;
