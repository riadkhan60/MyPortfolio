import BlogSideListItem from "./BlogSideListItem";

function BlogsFullList() {

    return (
    <div>
      <h4 className="CUSTOME-LINE relative left-0 top-0 mb-[34px] inline-block pb-[15px] text-[28px] leading-[1.2] text-themeWhite max-md:text-[36px] italic"> All Blogs </h4>
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-10">
        <BlogSideListItem />
        <BlogSideListItem />
        <BlogSideListItem />
        <BlogSideListItem />
        <BlogSideListItem />
        <BlogSideListItem />
        <BlogSideListItem />
        <BlogSideListItem />
        <BlogSideListItem />
        <BlogSideListItem />
        <BlogSideListItem />
        <BlogSideListItem />
        <BlogSideListItem />
        <BlogSideListItem />
      </div>
    </div>
  );
  
}

export default BlogsFullList
