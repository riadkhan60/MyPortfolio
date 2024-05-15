// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import FeatureElements from "./FeatureElements";
import portfoliosData from "../Data/ProtfolioData";

export function Swipe() {
  return (
    <div className="">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={3}
        spaceBetween={40}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },

          370: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1540: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper h-[300px] md:h-[400px] xl:h-[300px]"
        style={{
          "--swiper-navigation-color": "#962828",
          "--swiper-pagination-color": "#44993b",
          "--swiper-pagination-bullet-inactive-color": "#888888",
          "--swiper-pagination-bullet-inactive-opacity": "0.6",
        }}
      >
        {portfoliosData.map((project) => {
          return (
            <SwiperSlide key={project.id}>
              <FeatureElements project={project} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      
    </div>
  );
}
