import SectionContainer from "../HomepageUi/SectionContainer";
import SectionInfo from "../HomepageUi/SectionInfo";
import ServicesCards from "../HomepageUi/ServicesUi/ServicesCards";

function Services() {
  return (
    <div id="services" className=" mb-[150px]">
      <SectionContainer>
        <SectionInfo>
          <SectionInfo.Subtitle>Services</SectionInfo.Subtitle>
          <SectionInfo.Title>How I can help you</SectionInfo.Title>
          <SectionInfo.Description>
            I have assisted numerous businesses and individuals in creating
            their websites and custom applications. With a dedicated team by my
            side, I am always eager to embrace new challenges and deliver
            innovative solutions.
          </SectionInfo.Description>
        </SectionInfo>
        <ServicesCards />
      </SectionContainer>
    </div>
  );
}

export default Services;
