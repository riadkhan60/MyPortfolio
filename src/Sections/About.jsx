import AboutTable from "../Ui/AboutTable";
import SectionContainer from "../Ui/SectionContainer";
import SectionInfo from "../Ui/SectionInfo";

function About() {
  return (
    <SectionContainer>
      <SectionInfo>
        <SectionInfo.Subtitle>About me</SectionInfo.Subtitle>
        <SectionInfo.Title>Biography</SectionInfo.Title>
        <SectionInfo.Description>
          {`I'm`} a Front-end Developer with over 3 years of experience. 
          {` I'm`} from Tangail, Bangladesh. I code and create web sites for amazing
          people around the world. I like work with new people. New people are
          new experiences. Web Developing and Designing is my passion.
        </SectionInfo.Description>
        <AboutTable />
      </SectionInfo>
    </SectionContainer>
  );
}

export default About;
