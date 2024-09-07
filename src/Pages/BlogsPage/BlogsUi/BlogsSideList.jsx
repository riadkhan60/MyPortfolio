import BlogSideListItem from "./BlogSideListItem";

function BlogsSideList() {
  return (
    <div>
      <h4 className="CUSTOME-LINE relative left-0 top-0 mb-[34px] inline-block pb-[15px] text-[28px] leading-[1.2] text-themeWhite max-md:text-[36px] italic"> Most Viewed </h4>
      <div className=" flex flex-col gap-10">
        <BlogSideListItem />
        <BlogSideListItem />
        <BlogSideListItem />
      </div>
    </div>
  );
}

export default BlogsSideList;
