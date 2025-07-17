import {
  NodeSVG,
  ExpressSVG,
  MongoDBSVG,
  NextSVG,
  BunSVG,
  PostgresqlSvg,
  PrismaSvg,  
  ElectronSvg,
} from "../skillLogos/SkillLogos";
import SkillsData from "../../../Data/skillsData";
import Skillheading from "./Skill/Skillheading";
import AnimatedSkillGrid from "./Skill/AnimatedSkillGrid";

function BackendSkills() {
  const backendSkills = [
    NodeSVG, // Position 1 (top-left)
    ExpressSVG, // Position 2 (top-middle)
    MongoDBSVG, // Position 3 (top-right)
    NextSVG, // Position 4 (middle-left) - Next.js on the left side!
    PostgresqlSvg, // Position 5 (middle-right) - Next.js on the right side!
    BunSVG, // Position 6 (middle-right) - Next.js on the right side!
    PrismaSvg,
    ElectronSvg,
  ];

  return (
    <div className="skill-content flex flex-col gap-10 xl:flex-row">
      {/* Description Section - First on mobile, Second on desktop */}
      <Skillheading
        title={SkillsData.backend.title}
        description={SkillsData.backend.description}
      />

      {/* Animation Section - Second on mobile, First on desktop */}
      <AnimatedSkillGrid skills={backendSkills} category="backend" />
    </div>
  );
}

export default BackendSkills;
