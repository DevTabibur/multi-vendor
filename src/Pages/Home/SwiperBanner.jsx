import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

import Slider1 from "../../assets/images/slider-image-1.jpg";
import Slider2 from "../../assets/images/slider-image-2.jpg";
import Slider3 from "../../assets/images/slider-3.jpg";

const SwiperBanner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slider1} alt="Slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} alt="Slider2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider3} alt="Slider3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperBanner;
