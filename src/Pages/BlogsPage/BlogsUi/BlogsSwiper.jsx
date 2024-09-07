// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const imageLinkTemp = "https://source.unsplash.com/random/?webdeveloper";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

function BlogsSwiper() {
  return (
    <div>
      <h4 className="CUSTOME-LINE relative left-0 top-0 mb-[34px] inline-block pb-[15px] text-[28px] leading-[1.2] text-themeWhite max-md:text-[36px] italic">
        Featured Blogs
      </h4>
      <Swiper
        pagination={true}
        spaceBetween={40}
        className=" h-[350px] lg:h-[600px] lg:w-[100%]"
        modules={[Pagination, Autoplay, Navigation]}
        style={{
          "--swiper-navigation-color": "#962828",
          "--swiper-pagination-color": "#44993b",
          "--swiper-pagination-bullet-inactive-color": "#888888",
          "--swiper-pagination-bullet-inactive-opacity": "0.6",
        }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        <SwiperSlide>
          <SwiperSlideElements />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideElements />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideElements />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideElements />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function SwiperSlideElements() {
  return (
    <div
      className={` h-full w-full  rounded-md bg-cover  bg-center`}
      style={{
        backgroundImage: `url(${imageLinkTemp},
        
      )`,
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(90deg, rgb(0, 0, 0), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
        }}
        className=" flex h-full w-full flex-col justify-center rounded-md p-10 text-themeWhite"
      >
        <h1 className="z-30 mb-5 text-[30px] leading-[1.2] max-md:text-[22px]">
          Hello Fuciking World
        </h1>
        <p className=" text-[20px] font-medium  text-themeDarkshade max-md:text-[16px] lg:w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, atque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vel
          molestiae officia quibusdam minus dolore,
        </p>
        <div className=" mt-10">
          <a
            className=" my-10 font-medium inline border border-borderColor px-5 py-2 text-lg text-subtitleColor "
            href=""
          >
            {"go to article".toLocaleUpperCase()}
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogsSwiper;
