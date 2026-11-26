import { FiTarget, FiZap, FiHeart } from "react-icons/fi";
import GrantBadge from "./GrantBadge";

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
        "When I'm not building the next feature for AutoMate or KomoChat, you'll find me exploring emerging technologies, trying new AI tools early, and building something new with the Qbexel team.",
    },
  ];

  const achievements = [
    {
      // NSU Startups Next's own mark (blue on the white tile), same badge look as the grants.
      badge: {
        mark: "./badges/nsusn-mark.svg",
        name: "NSU Startups Next",
        lines: ["Flagship", "Cohort 4"],
      },
      title: "NSU Startups Next Flagship",
      subtitle: "Cohort 4 (2026), after the Cohort 3 Founders' Lab (2025)",
    },
    {
      // NVIDIA's official member badge, used as NVIDIA made it (see Footer for the legal line).
      officialBadge: {
        src: "./badges/nvidia-inception-badge.svg",
        alt: "NVIDIA Inception Program member",
      },
      title: "NVIDIA Inception",
      subtitle: "Qbexel accepted in November 2026",
    },
    {
      badge: {
        mark: "./badges/elevenlabs.svg",
        name: "ElevenLabs",
        lines: ["Startup", "Grant"],
      },
      title: "ElevenLabs Startup Grant",
      subtitle: "USD 4,850 for Qbexel (2026)",
    },
    {
      badge: {
        mark: "./badges/anthropic.svg",
        name: "Anthropic",
        lines: ["Claude", "Startup Grant"],
      },
      title: "Anthropic Claude Grant",
      subtitle: "Claude Team plan credits and USD 1,000 in API credits (2026)",
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
                {achievement.officialBadge ? (
                  <div className="mb-[15px] flex h-[50px] items-center justify-center max-md:mb-[12px] max-md:h-[45px]">
                    {/* Full colour, height only (never stretched or recoloured), on a white tile.
                        At 38/42px it stays smaller than the Qbexel logo on the project cards (40/52px). */}
                    <span className="inline-flex rounded-[10px] bg-white">
                      <img
                        src={achievement.officialBadge.src}
                        alt={achievement.officialBadge.alt}
                        className="h-[38px] w-auto md:h-[42px]"
                      />
                    </span>
                  </div>
                ) : achievement.badge ? (
                  <div className="mb-[15px] flex h-[50px] items-center justify-center max-md:mb-[12px] max-md:h-[45px]">
                    <GrantBadge {...achievement.badge} />
                  </div>
                ) : (
                  <div className="mb-[15px] flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-borderColor text-themeDarkshade transition-all duration-300 group-hover:border-[#ffffff55] group-hover:text-themeWhite max-md:mb-[12px] max-md:h-[45px] max-md:w-[45px]">
                    {achievement.icon}
                  </div>
                )}
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
