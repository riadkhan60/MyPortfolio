// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import customerReviewsData from "../../../../Data/CustomerReviewsData";

// import required modules
import {  Autoplay, Navigation } from "swiper/modules";
import CustomerReviewCard from "./CustomerReviewCard";

export function CustomerReviews() {
  return (
    <div className="mt-20">
      <div className="mb-12">
        <div className=" button-swiper text-white">
          <div className="swiper-button-prev-review swiper-button-prev"></div>
          <div className="swiper-button-next-review swiper-button-next"></div>
        </div>
      </div>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next-review",
          prevEl: ".swiper-button-prev-review",
        }}
        slidesPerView={1}
        spaceBetween={40}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },

          370: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1540: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper  "
        style={{
          "--swiper-navigation-color": "#962828",
          "--swiper-pagination-color": "#44993b",
          "--swiper-pagination-bullet-inactive-color": "#888888",
          "--swiper-pagination-bullet-inactive-opacity": "0.6",
        }}
      >
        {
          customerReviewsData.map((review) => {
            return (
              <SwiperSlide key={review.id}>
                <CustomerReviewCard review={review} />
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </div>
  );
}
