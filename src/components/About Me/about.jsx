import React from 'react';
import './about.css';
import projectlogo from '../../Assets/laptop.png';
import supportlogo from '../../Assets/customer-service.png'
import imgme from '../../Assets/photoofme.jpeg';

function About() {
  return (
    <section id="about">
        <div className="abtheading">
                <span className="abtheading_text">About Me!</span>
                <span className="abtsubheading">Brief Introduction</span>
        </div>
        <div className="aboutcontent">
          {/* <div id="abtbox">
              <div id="abtbox_item">
                <span className="boxtitle">Experience</span>
                <span className="boxcontent">none yet</span>
              </div>

              <div id="abtbox_item">
                <img src={projectlogo} alt="logo" className="abtboxlogo" />
                <span className="boxtitle">Projects</span>
                <span className="boxcontent">2 Projects</span>
              </div>

              <div id="abtbox_item">
                <img src={supportlogo} alt="logo" className="abtboxlogo" />
                <span className="boxtitle">Support</span>
                <span className="boxcontent">24/7</span>
              </div>
          </div> */}
          <div className="abouttext">
            <span className="aboutpara">I’m a frontend developer focused on building clean and user-friendly web pages. Although I’m still new to the field, I’m continuously learning and improving my skills in UI/UX design. My goal is to create smooth and engaging user experiences while steadily growing my expertise through real-world projects.</span>
          </div>
        </div>
        <img src={imgme} alt="Me" className="photoofme2" />  
    </section>
  )
}

export default About;
