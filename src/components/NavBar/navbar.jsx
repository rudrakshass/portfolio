import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll'

function Navbar(){
  return (
    <nav className="navbar">
        <Link href="index.html" className="nav_logo">Rudraksha</Link>
        <div className="content">
            <Link to="home" className="content_item">Home</Link>
            <Link className="content_item">About</Link>
            <Link className="content_item">Skills</Link>
            <Link className="content_item">Projects</Link>
            <Link className="content_item">Qualifications</Link>
        </div>
        <button className="contact">Contact Me</button>
    </nav>
  )
}

export default Navbar;
