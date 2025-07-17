import SectionContainer from "../HomepageUi/SectionContainer";
import SectionInfo from "../HomepageUi/SectionInfo";
import ServicesCards from "../HomepageUi/ServicesUi/ServicesCards";

function Services() {
  return (
    <div id="services" className=" mb-[150px]">
      <SectionContainer>
        <SectionInfo>
          <SectionInfo.Subtitle>Strategic Offerings</SectionInfo.Subtitle>
          <SectionInfo.Title>What I can deliver for you</SectionInfo.Title>
          <SectionInfo.Description>
            I offer strategic AI solutions and product development services that
            drive real business value. From AI integration to scalable product
            architecture, I help organizations leverage cutting-edge technology
            for competitive advantage.
          </SectionInfo.Description>
        </SectionInfo>
        <ServicesCards />
      </SectionContainer>
    </div>
  );
}

export default Services;
