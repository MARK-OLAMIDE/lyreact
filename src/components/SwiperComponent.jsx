import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";  // Import Swiper React components
// Import Swiper modules from the correct path
import { Pagination, Autoplay, Keyboard, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/autoplay"; // Autoplay styles (optional if used)

// Import images
import simiPic1 from "../assets/simi_pic1.jpg";
import simiPic2 from "../assets/simi_pic2.jpg";
import simiPic4 from "../assets/simi_pic4.jpg";
import groupPhoto1 from "../assets/group_photo1.jpg";
import boyPray from "../assets/boy_pray.jpg";
import boyPray2 from "../assets/boy_pray2.jpg";
import girlPic from "../assets/girl_pic.png";
import girlMic from "../assets/girl_mic.jpg";
import girl2Mic from "../assets/girl2_mic.jpg";
import girl3Mic from "../assets/girl3_mic.jpg";
import girl4Mic from "../assets/girl4_mic.jpg";


function SwiperComponent() {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Keyboard, Mousewheel]}
      direction="horizontal"
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
      }}
      keyboard={{
        enabled: true,
      }}
      mousewheel={{
        enabled: true,
        thresholdDelta: 60,
      }}
      speed={700}
      className="swiper"
    >
      {/* Swiper slides */}
      <SwiperSlide className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <img
          src={simiPic1}
          alt="Loved Youngsters"
          className="shadow-lg rounded-lg w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <img
          src={simiPic2}
          alt="Loved Youngsters"
          className="shadow-lg rounded-lg w-full h-auto"
        />
      </SwiperSlide>
      {/* Add more SwiperSlide components for other images */}
      <SwiperSlide className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <img
          src={simiPic4}
          alt="Loved Youngsters"
          className="shadow-lg rounded-lg w-full h-auto"
        />
      </SwiperSlide>
      {/* Other image slides */}
      <SwiperSlide className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <img
          src={groupPhoto1}
          alt="Loved Youngsters"
          className="shadow-lg rounded-lg w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <img
          src={boyPray}
          alt="Loved Youngsters"
          className="shadow-lg rounded-lg w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <img
          src={boyPray2}
          alt="Loved Youngsters"
          className="shadow-lg rounded-lg w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <img
          src={girlPic}
          alt="Loved Youngsters"
          className="shadow-lg rounded-lg w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <img
          src={girlMic}
          alt="Loved Youngsters"
          className="shadow-lg rounded-lg w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <img
          src={girl2Mic}
          alt="Loved Youngsters"
          className="shadow-lg rounded-lg w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <img
          src={girl3Mic}
          alt="Loved Youngsters"
          className="shadow-lg rounded-lg w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <img
          src={girl4Mic}
          alt="Loved Youngsters"
          className="shadow-lg rounded-lg w-full h-auto"
        />
      </SwiperSlide>

      {/* Pagination */}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}

export default SwiperComponent;
