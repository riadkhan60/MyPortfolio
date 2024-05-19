import BlogsList from "../HomepageUi/BlogsList";
import SectionContainer from "../HomepageUi/SectionContainer";
import SectionInfo from "../HomepageUi/SectionInfo";


function BlogsSection() {
  return (
    <div>
      <SectionContainer>
        <SectionInfo>
          <SectionInfo.Subtitle>News & Blog</SectionInfo.Subtitle>
          <SectionInfo.Title>Latest Articles</SectionInfo.Title>
          <SectionInfo.Description>
            I love to write. Here are some of my latest posts.
          </SectionInfo.Description>
        </SectionInfo>
        <BlogsList />
      </SectionContainer>
    </div>
  );
}

export default BlogsSection;
