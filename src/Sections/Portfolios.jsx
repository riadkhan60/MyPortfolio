import SectionContainer from "../Ui/SectionContainer";
import SectionInfo from "../Ui/SectionInfo";
import { Swipe } from "../Ui/Swipper";

function Portfolios() {
  return (
    <div className=" w-full text-white">
      <SectionContainer>
        <SectionInfo>
          <SectionInfo.Subtitle>PORTFOLIO</SectionInfo.Subtitle>
          <div className=" relative">
            <SectionInfo.Title>Featured Projects</SectionInfo.Title>
            <div>
              <div className=" button-swiper text-white">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </SectionInfo>
        <Swipe />
      </SectionContainer>
    </div>
  );
}

export default Portfolios;
