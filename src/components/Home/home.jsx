import React from 'react';
import './home.css';
import imgme from '../../Assets/photoofme.jpeg'

function Home(){
  return (
    <section id="intro">
        <div className="intro_content">
            <span className="name">Rudraksha Singh</span>
            <span className="webd">Web Developer</span>
            <span className="about"><br/>A web developer focused on front-end design <br/>and building clean, responsive interfaces. <br/>Constantly learning and expanding my skill set, <br/>with a solid foundation in data structures <br/>and algorithms to ensure efficient code. <br/> Take a look at my work—I’d love to connect!<br/></span>
            <button className="intro_contact">Hit Me Up!</button>
        </div>
        <img src={imgme} alt="Me" className="photoofme" />
    </section>
  )
}

export default Home;
