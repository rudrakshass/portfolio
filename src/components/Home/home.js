import React from 'react';
import './home.css';
import imgme from '../../Assets/photoofme.jpeg'

function Home(){
  return (
    <section id="intro">
        <div className="intro_content">
            <span className="name">Rudraksha Singh</span>
            <span className="webd">Web Developer</span>
            <span className="about"><br/>I'm a web developer focused on front-end <br/> design and building clean, responsive <br/> interfaces. I also have knowledge of data <br/> structures and algorithms, helping me <br/> write efficient code.</span>
            <button className="intro_contact">Hit Me Up!</button>
        </div>
        <img src={imgme} alt="Me" className="photoofme" />
    </section>
  )
}

export default Home;
