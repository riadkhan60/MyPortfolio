import SectionContainer from "../Ui/SectionContainer";
import SectionInfo from "../Ui/SectionInfo";
import { Swipe } from "../Ui/Swipper";

function Portfolios() {
  return (
    <div className="w-full text-white ">
      <SectionContainer>
        <SectionInfo>
          <SectionInfo.Subtitle>PORTFOLIO</SectionInfo.Subtitle>
          <SectionInfo.Title>Featured Projects</SectionInfo.Title>
        </SectionInfo>
        <Swipe />
      </SectionContainer>
    </div>
  );
}

export default Portfolios;
