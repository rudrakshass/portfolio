import React from 'react';
import './mobnav.css';
import { Link } from 'react-scroll';
import chatbubble from '../../Assets/nav/chatting.png';

function Mobnav() {
  return (
    <nav className="botbar">
      <div className="dial-button" 
          htmlFor="dial" 
          style={{ 
            '--kids': 5, 
            '--radius': 40, 
            '--offset': 25, 
            '--bounds': 360, 
            '--delay': 0, 
            '--transition': 0.2, 
            '--child': 44, 
            '--parent': 56 
          }}>
        <input type="checkbox" id="dial" />
        <button style={{ '--index': 0 }}>0</button>
        <button style={{ '--index': 1 }}>1</button>
        <button style={{ '--index': 2 }}>2</button>
        <button style={{ '--index': 3 }}>3</button>
        <button style={{ '--index': 4 }}>4</button>
        <label htmlFor="dial">
          <svg viewBox="0 0 24 24">
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
          </svg>
        </label>
        <label className="dial-button__cloak" htmlFor="dial"></label>
      </div>
    </nav>
  );
}

export default Mobnav;
