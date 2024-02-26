
import SkillDetails from "./SkillDetails";
import Skills from "./Skills";

function SkillContent() {
  return (
    <div className=" skill-content flex flex-col gap-10 xl:flex-row ">
      <div className=" relative lg:min-w-[500px]">
        <Skills />
      </div>
      <div className=" h-[500px] bg-backgroundColorSecondary">
        <SkillDetails />
      </div>
    </div>
  );
}

export default SkillContent;
