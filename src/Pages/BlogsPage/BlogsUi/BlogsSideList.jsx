import BlogSideListItem from "./BlogSideListItem";

const trendingTopics = [
  {
    _id: 1,
    title: "AI Ethics in Product Development",
    content: "Essential considerations when building AI-powered applications",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    category: "AI Ethics",
    readTime: "3 min",
  },
  {
    _id: 2,
    title: "Next.js 14 Performance Optimizations",
    content: "Latest features and optimization techniques for modern web apps",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
    category: "Development",
    readTime: "5 min",
  },
  {
    _id: 3,
    title: "Prompt Engineering Best Practices",
    content: "Crafting effective prompts for LLM integration in applications",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=400",
    category: "AI Research",
    readTime: "7 min",
  },
  {
    _id: 4,
    title: "Building Scalable Architecture",
    content: "Lessons from scaling products from MVP to enterprise",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
    category: "Architecture",
    readTime: "4 min",
  },
];

function BlogsSideList() {
  return (
    <div>
      <h4 className="CUSTOME-LINE relative left-0 top-0 mb-[34px] inline-block pb-[15px] text-[28px] italic leading-[1.2] text-themeWhite max-md:text-[24px]">
        Quick Reads
      </h4>
      <div className="flex flex-col gap-8">
        {trendingTopics.map((topic) => (
          <div key={topic._id} className="group cursor-pointer">
            <BlogSideListItem data={topic} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsSideList;
