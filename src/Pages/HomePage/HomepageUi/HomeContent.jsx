import SectionInfo from "./SectionInfo";
import Signature from "./Signature";

function HomeContent() {
  return (
    <SectionInfo>
      <SectionInfo.Subtitle>Introduction</SectionInfo.Subtitle>
      <SectionInfo.Title>Co-founder & Builder</SectionInfo.Title>
      <SectionInfo.Description>
        I’m the co-founder of Qbexel and the lead developer behind Synapse
        Social — an AI-powered SaaS platform for smart customer engagement. I
        specialize in developing scalable full stack systems, real-time
        automation, and solving complex tech problems with clean and efficient
        solutions.
      </SectionInfo.Description>
      <Signature />
    </SectionInfo>
  );
}

export default HomeContent;
