import React from "react";
import './projects.css';
import goeco from "../../Assets/projects/go-eco.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";


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
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        style={{
          "--swiper-pagination-color": "teal",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "4px"
        }}
        className="mySwiper"
      >
          <SwiperSlide>
            <div id="prjabtbox">
              <div id="prjbox_item" onClick={()=>handleClick("https://github.com/rudrakshass/Go-Eco")}>
                <span className="prjboxtitle">Go-Eco</span>
                <img className="prjboximg" src={goeco} alt="go-eco website screenshot" />
                <span className="prjboxtxt"><p>Developed a platform to promote eco-friendly practices using rewards and gamification, encouraging sustainable behavior with a points system and leaderboards to enhance user engagement.</p></span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div id="prjabtbox">
              <div id="prjbox_item" onClick={()=>handleClick("https://github.com/rudrakshass/Go-Eco")}>
                <span className="prjboxtxt"><p>Under construction: New projects in progress...</p></span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <br />
        <br /> 
        </section>
    )
}
