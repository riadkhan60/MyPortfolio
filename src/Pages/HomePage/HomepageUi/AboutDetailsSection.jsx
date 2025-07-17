import {
  FiTarget,
  FiZap,
  FiHeart,
  FiTrendingUp,
  FiUsers,
 
} from "react-icons/fi";

function AboutDetailsSection() {
  const detailSections = [
    {
      icon: <FiTarget className="h-5 w-5" />,
      title: "My Approach",
      description:
        "I believe in building technology that does not just work, but transforms how people interact with digital solutions. At Qbexel, we focus on creating intelligent systems that anticipate user needs and deliver seamless experiences.",
    },
    {
      icon: <FiZap className="h-5 w-5" />,
      title: "What Drives Me",
      description:
        "The intersection of innovation and impact fascinates me. I'm energized by challenging problems that require both technical depth and creative thinking. I thrive on turning complex challenges into elegant solutions.",
    },
    {
      icon: <FiHeart className="h-5 w-5" />,
      title: "Beyond the Code",
      description:
        "When I'm not building the next feature for Synapse Social, you'll find me exploring emerging technologies, experimenting with new tools, and constantly trying to build something innovative with my co-founders.",
    },
  ];

  const achievements = [
    {
      icon: <FiUsers className="h-6 w-6" />,
      title: "NSU Startup Next Cohort 3",
      subtitle: "Selected for Synapse Social innovation",
    },
    {
      icon: <FiTrendingUp className="h-6 w-6" />,
      title: "20+ Businesses Helped",
      subtitle: "Software Development & digital Solutions",
    },
  ];

  return (
    <div className="mb-[74px] mt-[40px]">
      <div className="space-y-[40px] max-md:space-y-[30px]">
        {detailSections.map((section, index) => (
          <div key={index}>
            <div className="flex items-start gap-[20px] max-md:gap-[15px]">
              {/* Simple Icon */}
              <div className="mt-[2px] flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-[8px] border border-borderColor text-themeDarkshade transition-all duration-300 hover:border-[#ffffff55] hover:text-themeWhite max-md:h-[35px] max-md:w-[35px]">
                {section.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="mb-[15px] text-[24px] font-medium text-themeWhite max-md:mb-[12px] max-md:text-[20px]">
                  {section.title}
                </h3>
                <p className="text-[18px] leading-[1.6] text-themeDarkshade max-md:text-[16px]">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Cards */}
      <div className="mt-[60px] max-md:mt-[40px]">
        <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1 max-md:gap-[15px]">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group rounded-[12px] border border-borderColor p-[25px] transition-all duration-300 hover:border-[#ffffff55] max-md:p-[20px]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-[15px] flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-borderColor text-themeDarkshade transition-all duration-300 group-hover:border-[#ffffff55] group-hover:text-themeWhite max-md:mb-[12px] max-md:h-[45px] max-md:w-[45px]">
                  {achievement.icon}
                </div>
                <h4 className="mb-[8px] text-[18px] font-medium text-themeWhite max-md:mb-[6px] max-md:text-[16px]">
                  {achievement.title}
                </h4>
                <p className="text-[14px] leading-[1.4] text-themeDarkshade max-md:text-[13px]">
                  {achievement.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutDetailsSection;
