import React from "react";
import './projects.css';
import goeco from "../../Assets/projects/go-eco.png";

export default function Projects() {
    function handleClick(url) {
        window.open(url, '_blank', 'noopener,noreferrer'); 
      }
    return (
        <section id="projects">
        <div className="projects-heading">
          <span className="projects-heading-text">Projects</span>
          <span className="projects-subheading">Stuff I've made</span>
        </div>
        <div id="prjabtbox">
            <div id="prjbox_item" onClick={()=>handleClick("https://github.com/rudrakshass/Go-Eco")}>
              <span className="prjboxtitle">Go-Eco</span>
              <img className="prjboximg" src={goeco} alt="go-eco website screenshot" />
              <span className="prjboxtxt"><p>Developed a platform to promote eco-friendly practices using rewards and gamification, encouraging sustainable behavior with a points system and leaderboards to enhance user engagement.</p></span>
            </div>
        </div>
        </section>
    )
}
