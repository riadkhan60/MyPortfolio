import { useEffect, useState } from "react";
import BlogSideListItem from "./BlogSideListItem";
import axios from "axios";

// Fallback blog data aligned with user's expertise
const fallbackBlogs = [
  {
    _id: 1,
    title: "Getting Started with LangChain for Enterprise Apps",
    content:
      "A comprehensive guide to implementing LangChain in production environments with real-world examples and best practices.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    category: "AI Development",
    readTime: "8 min",
  },
  {
    _id: 2,
    title: "Building Synapse Social: Technical Deep Dive",
    content:
      "Architecture decisions, tech stack choices, and lessons learned while building an AI-powered social platform.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600",
    category: "Product Development",
    readTime: "12 min",
  },
  {
    _id: 3,
    title: "React Server Components vs Client Components",
    content:
      "Understanding when to use each type of component in modern React applications for optimal performance.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
    category: "React",
    readTime: "6 min",
  },
  {
    _id: 4,
    title: "OpenAI API Integration Patterns",
    content:
      "Best practices for integrating OpenAI APIs into your applications with error handling and rate limiting.",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=600",
    category: "AI Integration",
    readTime: "10 min",
  },
  {
    _id: 5,
    title: "PostgreSQL Performance Optimization",
    content:
      "Advanced techniques for optimizing database queries and improving application performance at scale.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
    category: "Database",
    readTime: "9 min",
  },
  {
    _id: 6,
    title: "Next.js App Router: Migration Guide",
    content:
      "Step-by-step guide to migrating from Pages Router to App Router with practical examples.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    category: "Next.js",
    readTime: "7 min",
  },
];

function BlogsFullList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Function to fetch blogs from the API
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/blogs");
        setBlogs(response.data.data || []);
        setError(false);
      } catch (error) {
        console.log("API not available, using fallback content");
        setBlogs(fallbackBlogs);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    // Fetch blogs on component mount
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div>
        <h4 className="CUSTOME-LINE relative left-0 top-0 mb-[34px] inline-block pb-[15px] text-[28px] italic leading-[1.2] text-themeWhite max-md:text-[24px]">
          All Articles
        </h4>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="mb-4 h-48 rounded-lg bg-backgroundColorSecondary"></div>
              <div className="mb-2 h-4 rounded bg-backgroundColorSecondary"></div>
              <div className="h-3 w-3/4 rounded bg-backgroundColorSecondary"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h4 className="CUSTOME-LINE relative left-0 top-0 inline-block pb-[15px] text-[28px] italic leading-[1.2] text-themeWhite max-md:text-[24px]">
          All Articles
        </h4>
        {error && (
          <span className="rounded-full bg-backgroundColorSecondary px-3 py-1 text-xs text-themeDarkshade">
            Demo Content
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog._id} className="group cursor-pointer">
            <BlogSideListItem data={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsFullList;
