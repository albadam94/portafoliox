"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const MyComponent = () => {
  useEffect(() => {
    // Load Swiper modules only on the client side
    import("swiper").then((SwiperModule) => {
      const { Swiper: SwiperCore } = SwiperModule;
      SwiperCore.use([FreeMode, Pagination]);
    });
  }, []);

  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={0}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      className="mySwiper mt-10"
    >
      {/* Your SwiperSlides here */}
      <div  className="className='w-5 md:w-32 lg:w-48 py-10 mx-10 md:w-10'">
        <SwiperSlide>
            <Image id='estudios'  className="mb-10" src='/Logos/Ilustrator.svg' width={90} height={90} alt="illustrator" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/Logos/Photshop.svg' width={90} height={90}  alt="photoshop" />
        </SwiperSlide>
        <SwiperSlide>
            <Image  src='/Logos/Premier.svg' width={90} height={90}  alt="premier" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/Logos/Audition.svg' width={90} height={90}  alt="Audition" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/Logos/Lightroom.svg' width={90} height={90}  alt="Lightroom" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/Logos/Figma.svg' width={70} height={90}  alt="Figma" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/Logos/iconHTML.svg' width={80} height={90}  alt="HTML" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/Logos/iconCSS.svg' width={70} height={90}  alt="CSS" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/Logos/Tailwind.svg' width={90} height={90}  alt="Tailwind" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/Logos/Bootstrap.svg' width={90} height={90}  alt="bootstrap" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/Logos/iconReact.svg' width={90} height={90}   alt="react" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/Logos/Wordpress.svg' width={90} height={90}  alt="wordpress" />
        </SwiperSlide>
        </div>
      </Swiper>

  );
};

export default MyComponent;
