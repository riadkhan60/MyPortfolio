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
            <SectionInfo.Title>Current Projects & Ventures</SectionInfo.Title>
            <div>
              <div className=" button-swiper text-white">
                <div className="swiper-button-prev-portfolio swiper-button-prev"></div>
                <div className="swiper-button-next-portfolio swiper-button-next"></div>
              </div>
            </div>
          </div>
          <SectionInfo.Description>
            From co-founding Qbexel to building AI-powered platforms like
            Synapse Social, here&apos;s what I&apos;m currently working on and
            the ventures driving my entrepreneurial journey.
          </SectionInfo.Description>
        </SectionInfo>
        <Swipe />
      </SectionContainer>
    </div>
  );
}

export default Portfolios;
