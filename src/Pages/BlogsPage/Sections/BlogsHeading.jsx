import BlogsSectionContainer from "../BlogsUi/BlogsSectionContainer";

function BlogsHeading() {
  return (
    <BlogsSectionContainer>
      <div className="mx-auto max-w-4xl text-center">
        <h4 className="mb-[24px] mt-12 text-[18px] font-medium uppercase tracking-[1px] text-subtitleColor">
          Insights & Research
        </h4>
        <h2 className="mb-[20px] text-[40px] font-bold leading-tight text-themeWhite max-md:text-[28px]">
          AI Research, Tech Insights & Innovation Stories
        </h2>
        <p className="mx-auto mb-[57px] max-w-2xl text-[18px] leading-relaxed text-themeDarkshade">
          Exploring the cutting edge of AI technology, sharing research
          findings, and documenting the journey of building next-generation
          products.
        </p>
      </div>
    </BlogsSectionContainer>
  );
}

export default BlogsHeading;
