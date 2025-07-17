import SkillTabs from "./SkillTabs";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import ProgrammingSkills from "./ProgrammingSkills";
import SkillBar from "./SkillBar";

function SkillContent() {
  return (
    <SkillTabs>
      <SkillTabs.SkillTabHeader
        lists={[
          "Frontend",
          "Backend",
          "Programming",
          "AI & ML",
          "DevOps",
          "Leadership",
        ]}
      />
      <SkillTabs.SkillTabContent title={"Frontend"}>
        <FrontendSkills />
      </SkillTabs.SkillTabContent>
      <SkillTabs.SkillTabContent title={"Backend"}>
        <BackendSkills />
      </SkillTabs.SkillTabContent>
      <SkillTabs.SkillTabContent title={"Programming"}>
        <ProgrammingSkills />
      </SkillTabs.SkillTabContent>
      <SkillTabs.SkillTabContent title={"AI & ML"}>
        <SkillBar category="aiml" />
      </SkillTabs.SkillTabContent>
      <SkillTabs.SkillTabContent title={"DevOps"}>
        <SkillBar category="devops" />
      </SkillTabs.SkillTabContent>
      <SkillTabs.SkillTabContent title={"Leadership"}>
        <SkillBar category="leadership" />
      </SkillTabs.SkillTabContent>
    </SkillTabs>
  );
}

export default SkillContent;
