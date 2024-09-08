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
      </div>
      <div className="hometext">A web developer focused on front-end design <br/>and building clean, responsive interfaces. 
      <br/>Constantly learning and expanding my skill set, <br/>with a solid foundation in data structures <br/>and algorithms to ensure efficient code.<br/>
      <ReactTyped strings={["Take a look at my work—I’d love to connect!"]} typeSpeed={100} loop /> 
      </div>
      {/* <button className="scrolldown">Scroll Down</button> */}
    </section>
  );
}

export default Home;
