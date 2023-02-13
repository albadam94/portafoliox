import Illustrator from "../images/Ilustrator.svg";
import Photoshop from "../images/Photshop.svg";
import Premier from "../images/Premier.svg";
import XD from "../images/XD.svg";
import AU from "../images/Audition.svg";
import Lr from "../images/Lightroom.svg";
import Figma from "../images/Figma.svg";
import Html from "../images/iconHTML.svg";
import Css from "../images/iconCSS.svg";
import Boot from "../images/Bootstrap.svg";
import Rt from "../images/iconReact.svg";
import WP from "../images/Wordpress.svg";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import {FreeMode, Pagination } from "swiper";

export default function App() {
    
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-6 ">
            <div  className="className='w-5 md:w-32 lg:w-48 py-10 mx-10 md:w-10'">
        <SwiperSlide>
            <img id='estudios'  className="mb-10" src={ Illustrator} alt="illustrator" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ Photoshop} alt="photoshop" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ Premier} alt="premier" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ XD} alt="xd" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ AU} alt="audition" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ Lr} alt="lightroom" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ Figma} alt="figma" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ Html} alt="html" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ Css} alt="css" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ Boot} alt="bootstrap" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ Rt} alt="react" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={ WP} alt="wordpress" />
        </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
