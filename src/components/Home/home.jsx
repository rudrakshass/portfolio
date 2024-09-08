import React from 'react';
import './home.css';
import imgme from '../../Assets/photoofme.png';
import Typewriter from '../../Assets/Typewriter/typewriter';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-scroll';

function Home(){
  return (
    <section id="intro">
      <div className="rectbox">
        <div className="imgcontainer">
        <img src={imgme} alt="Me" className="photoofme" />
        </div>
        <span className="nameinbox">RUDRAKSHA SINGH</span>
        <div className="webdevtxt"><ReactTyped strings={[">Front End Developer"]} typeSpeed={100}/> </div>
      </div>
      <button className="scrolldown">Scroll Down</button>
    </section>
  );
}

export default Home;
