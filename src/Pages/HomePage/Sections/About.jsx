import TabDatas from "../../../Data/aboutData";
import AboutDetails from "../HomepageUi/AboutDetails";
import AboutDetailsCards, {
  AboutDetailsCard,
} from "../HomepageUi/AboutDetailsCards";
import AboutTable from "../HomepageUi/AboutTable";
import EducationDetailsCards from "../HomepageUi/EducationDetailsCards";
import SectionContainer from "../HomepageUi/SectionContainer";
import SectionInfo from "../HomepageUi/SectionInfo";
import SkillContent from "../HomepageUi/SkillContent";

function About() {
  return (
    <div id="about">
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
              render={(item, index) => (
                <AboutDetailsCard item={item} key={index} />
              )}
            />
          </AboutDetails.TabContent>
          <AboutDetails.TabContent title={"Skills"}>
            <SkillContent />
          </AboutDetails.TabContent>
          <AboutDetails.TabContent title={"Education"}>
            <EducationDetailsCards />
          </AboutDetails.TabContent>
        </AboutDetails>
      </SectionContainer>
    </div>
  );
}

export default About;
