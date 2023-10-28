"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/pagination';

const Carrusel = () => {
    useEffect(() => {
        // Load Swiper modules only on the client side
        import("swiper").then((SwiperModule) => {
          const { Swiper: SwiperCore } = SwiperModule;
          SwiperCore.use([FreeMode, Pagination]);
        });
      }, []);
  return (
    <Swiper
    slidesPerView={7}
    spaceBetween={0}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    className="mySwiper mx-4 md:mx-12 lg:mx-20 xl:mx-80 mt-28"
  >
    {/* Your SwiperSlides here */}
    <div  className='lg:w-5 '>
      <SwiperSlide className="lg:ml-72 ml-10">
          <Image id='estudios'  className="mb-10" src='/Logos/Ilustrator.svg' width={70} height={70} alt="illustrator" />
      </SwiperSlide>
      <SwiperSlide>
          <Image src='/Logos/Photshop.svg' width={70} height={70}  alt="photoshop" />
      </SwiperSlide>
      <SwiperSlide>
          <Image  src='/Logos/Premier.svg' width={70} height={70}  alt="premier" />
      </SwiperSlide>
      <SwiperSlide>
          <Image src='/Logos/Audition.svg' width={70} height={70}  alt="Audition" />
      </SwiperSlide>
      <SwiperSlide>
          <Image src='/Logos/Lightroom.svg' width={70} height={70}  alt="Lightroom" />
      </SwiperSlide>
      <SwiperSlide>
          <Image src='/Logos/Figma.svg' width={70} height={70}  alt="Figma" />
      </SwiperSlide>
      <SwiperSlide>
          <Image src='/Logos/iconHTML.svg' width={60} height={70}  alt="HTML" />
      </SwiperSlide>
      <SwiperSlide>
          <Image src='/Logos/iconCSS.svg' width={60} height={60}  alt="CSS" />
      </SwiperSlide>
      <SwiperSlide>
          <Image src='/Logos/Tailwind.svg' width={70} height={70}  alt="Tailwind" />
      </SwiperSlide>
      <SwiperSlide>
          <Image src='/Logos/Bootstrap.svg' width={70} height={70}  alt="bootstrap" />
      </SwiperSlide>
      <SwiperSlide>
          <Image src='/Logos/iconReact.svg' width={70} height={70}   alt="react" />
      </SwiperSlide>
      <SwiperSlide>
          <Image src='/Logos/Wordpress.svg' width={70} height={70}  alt="wordpress" />
      </SwiperSlide>
      </div>
    </Swiper>
  )
}

export default Carrusel