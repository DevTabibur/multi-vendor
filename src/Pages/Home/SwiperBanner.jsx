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
        <SwiperSlide className="relative overflow-hidden ">
          <img src={Slider1} alt="Slider1" />
          <div className="swiper-inner-info absolute w-96 pl-12 py-12 left-0 text-left bottom-5">
            <h1 className="text-5xl my-2 font-bold">Specialist in the grocery store</h1>
            <p className="my-4">Only this week. Don't miss...</p>
            <p className="my-5">
              from <span className="text-red-700 text-4xl">$79.30</span>
            </p>
            <button>Shop Now</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative overflow-hidden ">
          <img src={Slider2} alt="Slider2" />
          <div className="swiper-inner-info absolute w-96 pl-12 py-12 left-0 text-left bottom-5">
            <h1 className="text-5xl my-2 font-bold">Specialist in the grocery store</h1>
            <p className="my-4">Only this week. Don't miss...</p>
            <p className="my-5">
              from <span className="text-red-700 text-4xl">$79.30</span>
            </p>
            <button>Shop Now</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative overflow-hidden ">
          <img src={Slider3} alt="Slider3" />
          <div className="swiper-inner-info absolute w-96 pl-12 py-12 left-0 text-left bottom-5">
            <h1 className="text-5xl my-2 font-bold">Specialist in the grocery store</h1>
            <p className="my-4">Only this week. Don't miss...</p>
            <p className="my-5">
              from <span className="text-red-700 text-4xl">$79.30</span>
            </p>
            <button>Shop Now</button>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default SwiperBanner;
