import { createContext, useContext, useState } from "react";

const SkillContext = createContext();

function SkillTabs({ children }) {
  const [activeSkillTab, setActiveSkillTab] = useState("Frontend");
  return (
    <SkillContext.Provider value={{ activeSkillTab, setActiveSkillTab }}>
      <div className="">{children}</div>
    </SkillContext.Provider>
  );
}

function SkillTabHeader({ lists }) {
  return (
    <div className="mb-[40px]">
      <div className="flex flex-wrap gap-[12px] max-md:gap-[8px]">
        {lists.map((list) => (
          <SkillTabItem key={list} name={list} />
        ))}
      </div>
    </div>
  );
}

function SkillTabItem({ name }) {
  const { activeSkillTab, setActiveSkillTab } = useContext(SkillContext);
  const isActive = activeSkillTab === name;

  return (
    <button
      className={`whitespace-nowrap rounded-[8px] border px-[20px] py-[12px] text-[16px] font-medium transition-all duration-300 max-md:px-[16px] max-md:py-[10px] max-md:text-[14px] ${
        isActive
          ? "border-subtitleColor bg-subtitleColor text-white"
          : "border-borderColor text-themeDarkshade hover:border-[#ffffff55] hover:text-themeWhite"
      }`}
      onClick={() => setActiveSkillTab(name)}
    >
      {name}
    </button>
  );
}

function SkillTabContent({ children, title }) {
  const { activeSkillTab } = useContext(SkillContext);

  if (activeSkillTab !== title) return null;
  return <div className="w-full">{children}</div>;
}

SkillTabs.SkillTabHeader = SkillTabHeader;
SkillTabs.SkillTabContent = SkillTabContent;
export default SkillTabs;
