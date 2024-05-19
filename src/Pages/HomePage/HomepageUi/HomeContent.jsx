import SectionInfo from "./SectionInfo";
import Signature from "./Signature";

function HomeContent() {
  return (
    <SectionInfo>
      <SectionInfo.Subtitle>Introduction</SectionInfo.Subtitle>
      <SectionInfo.Title>Web Developer</SectionInfo.Title>
      <SectionInfo.Description>
        I design and develop services for customers of all sizes, specializing
        in creating stylish, modern websites, web services and online stores.
      </SectionInfo.Description>
      <Signature />
    </SectionInfo>
  );
}

export default HomeContent;
