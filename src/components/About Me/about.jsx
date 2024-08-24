import React from 'react';
import './about.css';
import projectlogo from '../../Assets/startup.png'

function About() {
  return (
    <section id="about_content">
        <div className="abtheading">
                <span className="abtheading_text">About Me!</span>
                <span className="abtsubheading">Brief Introduction</span>
        </div>
        <div id="abtbox">
            {/* <div id="abtbox_item">
              <span className="boxtitle">Experience</span>
              <span className="boxcontent">none yet</span>
            </div> */}

            <div id="abtbox_item">
              <img src={projectlogo} alt="logo" className="abtboxlogo" />
              <span className="boxtitle">Projects</span>
              <span className="boxcontent">2</span>
            </div>

            <div id="abtbox_item">
              <span className="boxtitle">Support</span>
              <span className="boxcontent">24/7</span>
            </div>
        </div>
    </section>
  )
}

export default About;
