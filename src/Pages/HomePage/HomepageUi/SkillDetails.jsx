import TabDatas from "../../../Data/aboutData";

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
            {TabDatas.skills.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillDetails;
