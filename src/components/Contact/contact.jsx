import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [expandedBox, setExpandedBox] = useState(null);

  const toggleExpand = (boxId) => {
    setExpandedBox(expandedBox === boxId ? null : boxId); 
  };

  return (
    <section id="contact">
      <h2 className="contact-heading">Hit Me Up!</h2>
      <span className="contact-subheading">Lets talk</span>
      <div className="contact-content">
        <div id="infobox">
          {[
            { id: 1, icon: <FontAwesomeIcon icon={faEnvelope} size="2x"/>, title: "Email", content: "rudraksharss@gmail.com" },
            { id: 2, icon: <FontAwesomeIcon icon={faWhatsapp} size="2x"/>, title: "Whatsapp", content: "7081499993" },
            { id: 3, icon: <FontAwesomeIcon icon={faLinkedin} size="2x"/>, title: "LinkedIn", content: "Rudraksha Singh Sengar" },
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
              transition={{ duration: 0.4 }}
              className={`box ${expandedBox === box.id ? "hovered" : ""}`}
            >
              <AnimatePresence>
                {expandedBox !== box.id && (
                  <motion.div
                    key="icon"
                    layout
                    className="box-icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ 
                      opacity: 0,
                      transition: { delay: 0 }
                    }}
                    transition={{
                      duration: 0.3,
                      delay: expandedBox === null ? 0.5 : 0, 
                    }}
                  >
                    {box.icon}
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.span
                layout
                className="boxtitle"
                animate={{
                  fontSize: expandedBox === box.id ? "1.5rem" : "1rem",
                }}
                transition={{ delay: 0.3, duration: 0.3 }}
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
        
        <div className="sendproject">
          <h2 className='sendproject-heading'>Write me up your project</h2>
          <input className='input-field' type="text" placeholder={"Enter your name"} />
          <input className='input-field' type="text" placeholder={"Enter your email"} />
          <textarea className='input-field-box' type="text" placeholder={"Write your project"} />
          <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.7}} className="send">Send</motion.button>
        </div>
      </div>
    </section>
  )
}