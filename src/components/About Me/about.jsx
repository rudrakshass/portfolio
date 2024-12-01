import React, { useState } from "react";
import { motion } from "framer-motion";
import abtimg from "../../Assets/about/abtimg.png";
import "./about.css";

export default function About() {
  const [expandedBox, setExpandedBox] = useState(null);

  const toggleExpand = (boxId) => {
    setExpandedBox(expandedBox === boxId ? null : boxId); 
  };

  return (
    <section id="about-container">
      <section className="about">
          <div className="abtheading">
            <span className="abtheading_text">About Me!</span>
            <span className="abtsubheading">Brief Introduction</span>
          </div>
          <div id="abtbox">
            {[
              { id: 1, title: "Experience", content: "I'm still learning but have a passion for creating clean and functional designs." },
              { id: 2, title: "Projects", content: "I've worked on 2+ projects, showcasing responsive and interactive designs." },
              { id: 3, title: "Support", content: "I'm always available to collaborate and share ideas, providing 24/7 support." },
            ].map((box) => (
              <motion.div
                key={box.id}
                id="abtbox_item"
                onClick={() => toggleExpand(box.id)}
                layout
                animate={{
                  height: expandedBox === box.id ? "16rem" : "8rem",
                  width: expandedBox === box.id ? "18rem" : "9rem",
                }}
                transition={{
                  type: "tween",
                  duration: 0.4,
                  ease: "anticipate"
                }}
                className={`box ${expandedBox === box.id ? "hovered" : ""}`}
              >
                <motion.span
                  layout
                  className="boxtitle"
                  animate={{
                    fontSize: expandedBox === box.id ? "1.5rem" : "1rem",
                  }}
                  transition={{ 
                    type: "tween",
                    duration: 0.3,
                    ease: "anticipate",
                    delay: expandedBox === box.id ? 0.2 : 0
                  }}
                >
                  {box.title}
                </motion.span>
                {expandedBox === box.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="expandedContent"
                  >
                    {box.content}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
            <div className="aboutcontent">
              <img src={abtimg} alt="Me" className="photoofme2"/>
              <span className="aboutpara">
                I'm a frontend developer focused on building clean and user-friendly web pages. Although I'm still new to the
                field, I'm continuously learning and improving my skills in UI/UX design. My goal is to create smooth and
                engaging user experiences while steadily growing my expertise through real-world projects.
              </span>
            </div>
        </section>
    </section>
  );
}