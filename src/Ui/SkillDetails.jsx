import TabDatas from "../Data/aboutData";

function SkillDetails() {
  return (
    <div>
      <div className=" relative">
        <div className=" bg-backgroundColorSecondary px-[40px] py-[43px]">
          <div className=" mb-[14px] flex items-center  gap-5">
            <h4 className=" text-lg font-normal uppercase text-white ">
              {TabDatas.skills.subTitle}
            </h4>
          </div>
          <p className=" text-lg text-themeDarkshade">
            Energetic web developer with a self-driven attitude and proficiency
            in various web development tools and languages gained through 3
            years of practical experience. I have greatly improved my abilities
            through independent projects aimed at testing out different features
            and solving problems. My capacity for self-directed learning and
            problem-solving enables me to quickly adjust and produce
            high-quality web development work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillDetails;
