import React from 'react';
import projectlogo from '../../Assets/laptop.png';
import supportlogo from '../../Assets/customer-service.png';
import abtimg from '../../Assets/abtimg.png';
import './about.css';

function About() {
  return (
    <section id="about_content">
    <section id="about">
        <div className="heading">
                <span className="heading_text">About Me!</span>
                <span className="subheading">Brief Introduction</span>
        </div>
        <div id="abtbox">
            <div id="abtbox_item">
              <span className="boxtitle">Experience</span>
              <span className="boxcontent">none yet</span>
            </div>
            <div id="abtbox_item">
              <span className="boxtitle">Projects</span>
              <span className="boxcontent">5+ completed</span>
            </div>
            <div id="abtbox_item">
              <span className="boxtitle">Support</span>
              <span className="boxcontent">24/7</span>
            </div>
        </div>
        <div className="aboutcontent">
          <div className="abouttext">
            <span className="aboutpara">I’m a frontend developer focused on building clean and user-friendly web pages. Although I’m still new to the field, I’m continuously learning and improving my skills in UI/UX design. My goal is to create smooth and engaging user experiences while steadily growing my expertise through real-world projects.</span>
          </div>
        </div>
        <img src={abtimg} alt="Me" className="photoofme2" />  
    </section>
    </section>
  )
}

export default About;