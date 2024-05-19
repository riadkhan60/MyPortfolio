import TabDatas from "../../../Data/aboutData";

function EducationDetailsCards() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-5">
        <div className=" lg:col-span-2 bg-backgroundColorSecondary px-[40px] py-[43px] text-themeDarkshade">
          <h4 className=" mb-[17px] text-lg font-normal  uppercase text-white ">
            {TabDatas.education[0].subTitle}
          </h4>{" "}
          <p className="text-lg text-themeDarkshade">
            {TabDatas.education[0].description}
          </p>
        </div>
        <div className=" bg-backgroundColorSecondary px-[40px] py-[43px] text-themeDarkshade">
          <div>
            <div className=" mb-[14px] flex items-center  gap-5">
              <h4 className=" text-lg font-normal uppercase text-white ">
                {TabDatas.education[1].subTitle1}
              </h4>{" "}
              <span className=" text-themeDarkshade">
                {TabDatas.education[1].dateSpan1}
              </span>{" "}
              <span className=" text-themeDarkshade">
                {TabDatas.education[1].Board}
              </span>{" "}
              <span className=" text-themeDarkshade">
                {TabDatas.education[1].score1}
              </span>{" "}
            </div>
            <div className=" mb-[14px] flex items-center  gap-5">
              <h4 className=" text-lg font-normal uppercase text-white ">
                {TabDatas.education[1].subTitle2}
              </h4>{" "}
              <span className=" text-themeDarkshade">
                {TabDatas.education[1].dateSpan2}
              </span>{" "}
              <span className=" text-themeDarkshade">
                {TabDatas.education[1].Board}
              </span>{" "}
              <span className=" text-themeDarkshade">
                {TabDatas.education[1].score2}
              </span>{" "}
            </div>
          </div>
        </div>
        <div className=" bg-backgroundColorSecondary px-[40px] py-[43px] text-themeDarkshade">
          <h4 className=" mb-[17px] text-lg font-normal  text-white ">
            {TabDatas.education[2].subTitle}
          </h4>{" "}
          <h4 className=" mb-[17px] text-sm font-normal text-themeDarkshade ">
            {TabDatas.education[2].status}
          </h4>{" "}
          <p className="text-lg text-themeDarkshade">
            {TabDatas.education[2].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationDetailsCards;
