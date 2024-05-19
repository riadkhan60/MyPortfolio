import SectionContainer from "../HomepageUi/SectionContainer";
import SectionInfo from "../HomepageUi/SectionInfo";
import { Swipe } from "../HomepageUi/Swipper";


function Portfolios() {
  return (
    <div className=" w-full text-white">
      <SectionContainer>
        <SectionInfo>
          <SectionInfo.Subtitle>PORTFOLIO</SectionInfo.Subtitle>
          <div className=" flex items-start justify-between">
            <SectionInfo.Title>Featured Projects</SectionInfo.Title>
            <div>
              <div className=" button-swiper text-white">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
          <SectionInfo.Description>
            Here are some projects that I have worked on in the past and am
            currently working on.
          </SectionInfo.Description>
        </SectionInfo>
        <Swipe />
      </SectionContainer>
    </div>
  );
}

export default Portfolios;
