// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import "/src/index.css";

import tutor1 from "../../assets/tutors/tutor1.jpg";
import tutor2 from "../../assets/tutors/tutor2.jpg";
import tutor3 from "../../assets/tutors/tutor3.jpg";
import tutor4 from "../../assets/tutors/tutor4.jpg";
const RightTutorSlider = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[240px] h-[320px] md:w-[340px] md:h-[420px]"
      >
        <SwiperSlide>
          <img className="w-full" src={tutor1} alt="tutor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tutor2} alt="tutor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tutor3} alt="tutor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tutor4} alt="tutor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tutor3} alt="tutor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tutor1} alt="tutor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tutor2} alt="tutor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tutor1} alt="tutor" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tutor4} alt="tutor" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default RightTutorSlider;
