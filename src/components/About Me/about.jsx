import React from 'react';
import projectlogo from '../../Assets/about/laptop.png';
import supportlogo from '../../Assets/about/customer-service.png';
import { motion } from 'motion/react';
import abtimg from '../../Assets/about/abtimg.png';
import './about.css';

function About() {
  return (
    <section id="about_content">
    <section id="about">
        <div className="abtheading">
                <span className="abtheading_text">About Me!</span>
                <span className="abtsubheading">Brief Introduction</span>
        </div>
        <div id="abtbox">
            <motion.div whileHover={{ scale:1.2}} id="abtbox_item">
              <span className="boxtitle">Experience</span>
              <span className="boxcontent">none yet</span>
            </motion.div>
            <motion.div whileHover={{ scale:1.2}} id="abtbox_item">
              <span className="boxtitle">Projects</span>
              <span className="boxcontent">2+ completed</span>
            </motion.div>
            <motion.div whileHover={{ scale:1.2}} id="abtbox_item">
              <span className="boxtitle">Support</span>
              <span className="boxcontent">24/7</span>
            </motion.div>
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