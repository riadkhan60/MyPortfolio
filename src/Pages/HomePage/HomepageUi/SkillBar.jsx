import SkillsData from "../../../Data/skillsData";
import Skillheading from "./Skill/Skillheading";

function SkillBar({ category }) {
  const skillData = SkillsData[category];

  if (!skillData || !skillData.skills) return null;

  return (
    <div className="skill-content flex flex-col gap-10 xl:flex-row">
      {/* Description Section - First on mobile, Second on desktop */}
      <Skillheading
        title={skillData.title}
        description={skillData.description}
      />

      {/* Skills Section - Second on mobile, First on desktop */}
      <div className="relative order-2 lg:min-w-[500px] xl:order-1">
        <div className="space-y-[20px] p-[20px] max-md:p-0">
          {skillData.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="mb-[8px]">
                <h4 className="mb-[5px] text-lg font-medium text-themeWhite max-md:text-base">
                  {skill.name}
                </h4>
                <p className="text-[16px] leading-[1.4] text-themeDarkshade max-md:text-[14px]">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
