import {
  CssSVG,
  FigmaSVG,
  HtmlLogoSVG,
  JavaScriptSVG,
  NextSVG,
  ReactQuerySVG,
  ReactRouterSVG,
  ReactSVG,
  ReduxSVG,
  SassSVG,
  TailwindSVG,
  ThreeJsSVG,
} from "../skillLogos/SkillLogos";
import SkillsData from "../../../Data/skillsData";
import Skillheading from "./Skill/Skillheading";
import AnimatedSkillGrid from "./Skill/AnimatedSkillGrid";

function FrontendSkills() {
  // Array must have 12 items to match the animation sequence 9->12->11->10
  // We place null in positions that are animated but have no skill
  const frontendSkills = [
    HtmlLogoSVG, // Pos 1
    CssSVG, // Pos 2
    SassSVG, // Pos 3
    JavaScriptSVG, // Pos 4
    TailwindSVG, // Pos 5
    FigmaSVG, // Pos 6
    ReactSVG, // Pos 8
    ReactRouterSVG, // Pos 9
    NextSVG, // Pos 10
    ReduxSVG, // Pos 11
    ReactQuerySVG, // Pos 12
    ThreeJsSVG, // Pos 13

  ];

  return (
    <div className="skill-content flex flex-col gap-10 xl:flex-row">
      <Skillheading
        title={SkillsData.frontend.title}
        description={SkillsData.frontend.description}
      />

      <AnimatedSkillGrid skills={frontendSkills} category="frontend" />
    </div>
  );
}

export default FrontendSkills;
