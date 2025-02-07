import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
const SwiperContainer = ({ children }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={16}
      className="w-full"
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
        1920: {
          slidesPerView: 5,
          spaceBetween: 32,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default SwiperContainer;
