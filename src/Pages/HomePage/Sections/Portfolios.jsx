import SectionContainer from "../HomepageUi/SectionContainer";
import SectionInfo from "../HomepageUi/SectionInfo";
import { Swipe } from "../HomepageUi/Swipper";

function Portfolios() {
  return (
    <div id="portfolio" className=" w-full text-white">
      <SectionContainer>
        <SectionInfo>
          <SectionInfo.Subtitle>WHAT I&apos;M BUILDING</SectionInfo.Subtitle>
          <div className=" flex items-start justify-between">
            <SectionInfo.Title>The Qbexel ecosystem</SectionInfo.Title>
            <div>
              <div className=" button-swiper text-white">
                <div className="swiper-button-prev-portfolio swiper-button-prev"></div>
                <div className="swiper-button-next-portfolio swiper-button-next"></div>
              </div>
            </div>
          </div>
          <SectionInfo.Description>
            Qbexel and the products I&apos;m building for online sellers, from
            the first chat to a delivered order. Click any card to see what it
            does and how it&apos;s built.
          </SectionInfo.Description>
        </SectionInfo>
        <Swipe />
      </SectionContainer>
    </div>
  );
}

export default Portfolios;
