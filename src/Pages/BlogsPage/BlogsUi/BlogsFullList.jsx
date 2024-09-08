import { useEffect, useState } from "react";
import BlogSideListItem from "./BlogSideListItem";
import axios from "axios";
function BlogsFullList() {
  const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      // Function to fetch blogs from the API
      const fetchBlogs = async () => {
        try {
          const response = await axios.get("http://localhost:3000/blogs");
          setBlogs(response.data.data); // Store the retrieved blogs in state
         
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      };

      // Fetch blogs on component mount
      fetchBlogs();
    }, []);

    return (
    <div>
      <h4 className="CUSTOME-LINE relative left-0 top-0 mb-[34px] inline-block pb-[15px] text-[28px] leading-[1.2] text-themeWhite max-md:text-[36px] italic"> All Blogs </h4>
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <BlogSideListItem key={blog._id} data={blog} />
          ))}
      </div>
    </div>
  );
  
}

export default BlogsFullList
