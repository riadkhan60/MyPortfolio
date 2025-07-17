import TabDatas from "../../../Data/aboutData";
import AboutDetails from "../HomepageUi/AboutDetails";
import AboutDetailsCards, {
  AboutDetailsCard,
} from "../HomepageUi/AboutDetailsCards";
import AboutTable from "../HomepageUi/AboutTable";
import AboutDetailsSection from "../HomepageUi/AboutDetailsSection";
import MyPhilosophyCards from "../HomepageUi/MyPhilosophyCards";
import SectionContainer from "../HomepageUi/SectionContainer";
import SectionInfo from "../HomepageUi/SectionInfo";
import SkillContent from "../HomepageUi/SkillContent";

function About() {
  return (
    <div id="about">
      <SectionContainer>
        <SectionInfo>
          <SectionInfo.Subtitle>About</SectionInfo.Subtitle>
          <SectionInfo.Title>Biography</SectionInfo.Title>
          <SectionInfo.Description>
            Started as a frontend developer and evolved into a tech
            entrepreneur. Over 5+ years, I&apos;ve mastered the full development
            stack while building multiple SaaS products. My journey from code to
            co-founding Qbexel has taught me that great technology solves real
            problems and creates lasting value.
          </SectionInfo.Description>

          {/* Enhanced Details Section with Icons and Animations */}
          <AboutDetailsSection />
          <div className="mt-[60px]">
            <SectionInfo.Title>My info</SectionInfo.Title>
            <AboutTable />
          </div>
        </SectionInfo>
        <AboutDetails>
          <AboutDetails.TabHeader
            lists={["Experiences", "Skills", "Learning Philosophy"]}
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
          <AboutDetails.TabContent title={"Learning Philosophy"}>
            <MyPhilosophyCards />
          </AboutDetails.TabContent>
        </AboutDetails>
      </SectionContainer>
    </div>
  );
}

export default About;
