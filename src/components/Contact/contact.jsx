import React, { useState } from "react";
import { delay, motion } from "framer-motion"; 
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [expandedBox, setExpandedBox] = useState(null);

  const toggleExpand = (boxId) => {
    setExpandedBox(expandedBox === boxId ? null : boxId); 
  };
  return (
    <section className="contact-section">
        <h2 className="contact-heading">Hit Me Up!</h2>
            <div className="contact-content">
                <div id="infobox">
                {[
                { id: 1, icon:<FontAwesomeIcon icon={faEnvelope} size="2x"/>, title: "Email", content: "rudraksharss@gmail.com" },
                { id: 2, icon:<FontAwesomeIcon icon={faWhatsapp} size="2x"/>,title: "Whatsapp", content: "7081499993" },
                { id: 3, icon:<FontAwesomeIcon icon={faLinkedin} size="2x"/>,title: "LinkedIn", content: "Rudraksha Singh Sengar" },
                ].map((box) => (
                <motion.div
                    key={box.id}
                    id="infobox_item"
                    onClick={() => toggleExpand(box.id)}
                    layout
                    animate={{
                    height: expandedBox === box.id ? "13rem" : "8rem",
                    width: expandedBox === box.id ? "16rem" : "9rem",
                    }}
                    transition={{duration: 0.4 }}
                    className={`box ${expandedBox === box.id ? "hovered" : ""}`}
                >
                    {expandedBox !== box.id && (
                <motion.div
                  layout
                  className="box-icon"
                  animate={{
                    opacity: expandedBox === box.id ? 0 : 0.5,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: expandedBox === null ? 0.3 : 0,
                  }}
                >
                  {box.icon}
                </motion.div>
              )}
                    <motion.span
                    layout
                    className="boxtitle"
                    animate={{
                        fontSize: expandedBox === box.id ? "1.5rem" : "1rem",
                    }}
                    transition={{ delay:0.3,duration: 0.3}}
                    >
                    {box.title}
                    </motion.span>
                    {expandedBox === box.id && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay:0.6,duration: 0.3 }}
                        className="expandedContent"
                    >
                        {box.content}
                    </motion.div>
                    )}
                </motion.div>
                ))}
                </div>
            
                <div className="sendproject">
                    <h2 className='sendproject-heading'>Write me up your project</h2>
                    <input className='input-field' type="text" placeholder={"Enter your name"} />
                    <input className='input-field' type="text" placeholder={"Enter your email"} />
                    <input className='input-field-box' type="text" placeholder={"Write your project"} />
                </div>
            </div>
    </section>
  )
}