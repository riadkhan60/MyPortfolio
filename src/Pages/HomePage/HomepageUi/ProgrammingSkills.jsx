import {
  JavaScriptSVG,

  PythonSVG,
  TypeScriptSVG,
} from "../skillLogos/SkillLogos";
import SkillsData from "../../../Data/skillsData";
import Skillheading from "./Skill/Skillheading";
import AnimatedSkillGrid from "./Skill/AnimatedSkillGrid";

function ProgrammingSkills() {
  const programmingSkills = [JavaScriptSVG, PythonSVG, TypeScriptSVG];

  return (
    <div className="skill-content flex flex-col gap-10 xl:flex-row">
      {/* Description Section - First on mobile, Second on desktop */}
      <Skillheading
        title={SkillsData.programming.title}
        description={SkillsData.programming.description}
      />

      {/* Animation Section - Second on mobile, First on desktop */}
      <AnimatedSkillGrid skills={programmingSkills} category="programming" />
    </div>
  );
}

export default ProgrammingSkills;
