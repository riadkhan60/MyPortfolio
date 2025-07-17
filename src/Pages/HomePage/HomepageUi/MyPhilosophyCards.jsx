import TabDatas from "../../../Data/aboutData";
import {
  FiTrendingUp,
  FiTool,
  FiUsers,
  FiTarget,
  FiBook,
  FiZap,
} from "react-icons/fi";

function MyPhilosophyCards() {
  const learningPrinciples = [
    {
      icon: <FiTrendingUp className="h-5 w-5" />,
      title: "Continuous Growth",
      description: "Every day brings new opportunities to learn and improve",
    },
    {
      icon: <FiTool className="h-5 w-5" />,
      title: "Hands-On Learning",
      description: "Best learning happens through building real projects",
    },
    {
      icon: <FiUsers className="h-5 w-5" />,
      title: "Community Driven",
      description: "Engaging with developer communities and sharing knowledge",
    },
    {
      icon: <FiTarget className="h-5 w-5" />,
      title: "Future-Ready",
      description: "Staying ahead of industry trends and emerging technologies",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Main Learning Philosophy Card */}
      <div className="bg-backgroundColorSecondary px-[30px] py-[35px]">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-[8px] border border-borderColor text-themeDarkshade">
            <FiZap className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-semibold text-white">
            {TabDatas.education[0].subTitle}
          </h3>
        </div>
        <p className="text-lg leading-relaxed text-themeDarkshade">
          {TabDatas.education[0].description}
        </p>
      </div>

      {/* Learning Principles Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {learningPrinciples.map((principle, index) => (
          <div
            key={index}
            className="bg-backgroundColorSecondary px-[30px] py-[35px] transition-all duration-300 hover:bg-opacity-80"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-[35px] w-[35px] flex-shrink-0 items-center justify-center rounded-[8px] border border-borderColor text-themeDarkshade">
                {principle.icon}
              </div>
              <h4 className="text-lg font-medium text-white">
                {principle.title}
              </h4>
            </div>
            <p className="text-themeDarkshade">{principle.description}</p>
          </div>
        ))}
      </div>

      {/* Learning Status Card */}
      <div className="border-l-4 border-subtitleColor bg-backgroundColorSecondary px-[30px] py-[35px]">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="mb-2 text-xl font-semibold text-white">
              {TabDatas.education[2].subTitle}
            </h4>
            <p className="mb-3 text-themeDarkshade">
              {TabDatas.education[2].description}
            </p>
            <span className="inline-flex items-center rounded-full bg-subtitleColor bg-opacity-20 px-3 py-1 text-sm text-subtitleColor">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-subtitleColor"></span>
              {TabDatas.education[2].status}
            </span>
          </div>
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-borderColor text-themeDarkshade opacity-50">
            <FiBook className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPhilosophyCards;
