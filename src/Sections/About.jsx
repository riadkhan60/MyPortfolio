import TabDatas from "../Data/aboutData";
import AboutDetails from "../Ui/AboutDetails";
import AboutDetailsCards, { AboutDetailsCard } from "../Ui/AboutDetailsCards";
import AboutTable from "../Ui/AboutTable";
import SectionContainer from "../Ui/SectionContainer";
import SectionInfo from "../Ui/SectionInfo";
import SkillContent from "../Ui/SkillContent";


function About() {
  return (
    <SectionContainer>
      <SectionInfo>
        <SectionInfo.Subtitle>About me</SectionInfo.Subtitle>
        <SectionInfo.Title>Biography</SectionInfo.Title>
        <SectionInfo.Description>
          {`I'm`} a Front-end Developer with over 3 years of experience.
          {` I'm`} from Tangail, Bangladesh. I code and create web sites for
          amazing people around the world. I like work with new people. New
          people are new experiences. Web Developing and Designing is my
          passion.
        </SectionInfo.Description>
        <AboutTable />
      </SectionInfo>
      <AboutDetails>
        <AboutDetails.TabHeader
          lists={["Experiences", "Skills", "Education"]}
        />
        <AboutDetails.TabContent title={"Experiences"}>
          <AboutDetailsCards
            items={TabDatas.experinces}
            render={(item) => <AboutDetailsCard item={item} />}
          />
        </AboutDetails.TabContent>
        <AboutDetails.TabContent title={"Skills"}>
          <SkillContent />
        </AboutDetails.TabContent>
        <AboutDetails.TabContent title={"Education"}></AboutDetails.TabContent>
      </AboutDetails>
    </SectionContainer>
  );
}

export default About;
