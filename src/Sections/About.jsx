import AboutDetails from "../Ui/AboutDetails";
import AboutTable from "../Ui/AboutTable";
import ExperinceCards from "../Ui/ExperinceCards";
import SectionContainer from "../Ui/SectionContainer";
import SectionInfo from "../Ui/SectionInfo";
import Skills from "../Ui/Skills";

const experiences = [
  {
    company: "Freelancing",
    date: "( 2021 — 2023 )",
    title: "Web Developer",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipiscinumquam quae alias cumque, corrupti ducimus vel sed animi reiciendis earum dolor totam asperiores optio? Impedit cumque neque aliquam iure.",
  },
];

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
          <ExperinceCards />
        </AboutDetails.TabContent>
        <AboutDetails.TabContent title={"Skills"}>
          <div className=" skill-content flex flex-col gap-10 xl:flex-row ">
            <div className=" relative min-w-[500px]">
              <Skills />
            </div>
            <div className=" h-[500px] bg-backgroundColorSecondary">
              <ExperinceCards />
            </div>
          </div>
        </AboutDetails.TabContent>
      </AboutDetails>
    </SectionContainer>
  );
}

export default About;
