import React from 'react';
import { Link } from 'react-scroll';
import './home.css';
import { animate, stagger } from 'motion';
import { motion } from 'motion/react';
import imgme from '../../Assets/home/photoofme.png';
import playwiththis from '../../Assets/home/playwiththis.png';
import { ReactTyped } from 'react-typed';

function Home(){
  return (
    <section id="intro">
        <div className="intro_content">
            <motion.span className="name">Rudraksha Singh</motion.span>
            <span className='webd'>>Web <ReactTyped strings={["Developer","Designer"]} typeSpeed={70} backSpeed={80} loop/></span>
            <span className="about"><br/>A web developer focused on front-end design and building clean, responsive interfaces. Constantly learning and expanding my skill set, with a solid foundation in data structures and algorithms to ensure efficient code. Take a look at my work <br />—I’d love to connect!<br/></span>
            <Link to='contact' offset={-140}>
            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.7}} className="intro_contact">Hit Me Up!</motion.button>
            </Link>
        </div>
        <motion.img drag whileDrag={{scale:0.8, borderRadius:60, zIndex:99, background:0, boxShadow:0}} dragSnapToOrigin whileHover={{scale:1.2, zIndex:99, background:0, boxShadow:0}} src={imgme} alt="Me" className="photoofme" />
        <img className='playwiththis' src={playwiththis} alt="arrow pointing to image, telling to play with it." />
    </section>
  )
}

export default Home;