import BlogsSectionContainer from "../BlogsUi/BlogsSectionContainer";


function BlogsHeading() {
  return (
    <BlogsSectionContainer>
      <h4 className=" mb-[24px] mt-12 text-center text-[18px] font-medium uppercase tracking-[1px] text-subtitleColor">
        Blogs & News
      </h4>
      <h2 className=" mb-[57px] text-center text-[30px]  text-themeWhite max-md:text-[20px]">
        {`Get all of the recent updates of tech from me`}
      </h2>
    </BlogsSectionContainer>
  );
}

export default BlogsHeading;
