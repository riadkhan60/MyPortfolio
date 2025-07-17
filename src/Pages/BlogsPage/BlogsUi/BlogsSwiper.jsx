// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const featuredArticles = [
  {
    id: 1,
    title: "Building Synapse Social: An AI-Powered Platform Journey",
    description:
      "Deep dive into the architecture decisions, AI integrations, and technical challenges behind building a scalable AI-powered social platform.",
    category: "AI Development",
    readTime: "8 min read",
    gradient:
      "linear-gradient(135deg, rgba(147, 51, 234, 0.9), rgba(79, 70, 229, 0.8))",
  },
  {
    id: 2,
    title: "LLM Integration Strategies for Enterprise Applications",
    description:
      "Comprehensive guide on implementing Large Language Models in enterprise environments with practical examples and performance optimizations.",
    category: "AI Research",
    readTime: "12 min read",
    gradient:
      "linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(6, 182, 212, 0.8))",
  },
  {
    id: 3,
    title: "The Future of AI-Driven Product Development",
    description:
      "Exploring how AI is reshaping product development cycles, from ideation to deployment, and what it means for tech entrepreneurs.",
    category: "Innovation",
    readTime: "6 min read",
    gradient:
      "linear-gradient(135deg, rgba(239, 68, 68, 0.9), rgba(245, 101, 101, 0.8))",
  },
  {
    id: 4,
    title: "Scaling Tech Teams: From Startup to Enterprise",
    description:
      "Lessons learned from building and scaling technical teams, including hiring strategies, culture building, and technical leadership.",
    category: "Tech Leadership",
    readTime: "10 min read",
    gradient:
      "linear-gradient(135deg, rgba(245, 158, 11, 0.9), rgba(251, 191, 36, 0.8))",
  },
];

function BlogsSwiper() {
  return (
    <div>
      <h4 className="CUSTOME-LINE relative left-0 top-0 mb-[34px] inline-block pb-[15px] text-[28px] italic leading-[1.2] text-themeWhite max-md:text-[24px]">
        Featured Articles
      </h4>
      <Swiper
        pagination={true}
        spaceBetween={40}
        className="h-[350px] overflow-hidden rounded-xl lg:h-[600px] lg:w-[100%]"
        modules={[Pagination, Autoplay, Navigation]}
        style={{
          "--swiper-navigation-color": "#962828",
          "--swiper-pagination-color": "#44993b",
          "--swiper-pagination-bullet-inactive-color": "#888888",
          "--swiper-pagination-bullet-inactive-opacity": "0.6",
        }}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        {featuredArticles.map((article) => (
          <SwiperSlide key={article.id}>
            <SwiperSlideElements article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function SwiperSlideElements({ article }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-backgroundColorSecondary">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full border border-white/20"></div>
        <div className="absolute bottom-20 right-20 h-20 w-20 rounded-full border border-white/15"></div>
        <div className="absolute right-10 top-1/2 h-16 w-16 rotate-45 border border-white/10"></div>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-80"
        style={{ background: article.gradient }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col justify-center p-8 text-white lg:p-12">
        <div className="mb-4">
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            {article.category}
          </span>
          <span className="ml-3 text-sm text-white/80">{article.readTime}</span>
        </div>

        <h1 className="mb-6 max-w-4xl text-[28px] font-bold leading-tight lg:text-[36px]">
          {article.title}
        </h1>

        <p className="mb-8 max-w-2xl text-[16px] font-medium leading-relaxed text-white/90 lg:text-[18px]">
          {article.description}
        </p>

        <div className="flex items-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/20 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30">
            Read Article
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <button className="rounded-lg border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogsSwiper;
