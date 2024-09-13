import React from 'react';
import './home.css';
import imgme from '../../Assets/photoofme.png';
import Typewriter from '../../Assets/Typewriter/typewriter';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-scroll';
import mousescr from '../../Assets/mouse-cursor.png';

function Home(){
  return (
    <section id="intro">
      <div className="rectbox">
        <div className="imgcontainer">
        <img src={imgme} alt="Me" className="photoofme" />
        </div>
        <span className="nameinbox">RUDRAKSHA SINGH</span>
        <span className="webdevtxt"><ReactTyped strings={[">Front End Developer"]} typeSpeed={100}/> </span>
      </div>
      <Link className="scrolldown" to='about'><img src={mousescr} alt="mouseicon" className='scrollingmouse' />Scroll Down</Link>
    </section>
  );
}

export default Home;
