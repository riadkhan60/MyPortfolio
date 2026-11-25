import SectionInfo from "./SectionInfo";
import Signature from "./Signature";

function HomeContent() {
  return (
    <SectionInfo>
      <SectionInfo.Subtitle>Introduction</SectionInfo.Subtitle>
      <SectionInfo.Title>Founder & Builder</SectionInfo.Title>
      <SectionInfo.Description>
        I’m the founder and chief system architect of Qbexel. I design and
        ship AI products end to end, from the data model to the production
        servers: AutoMate to run an online shop, KomoBox for one social inbox,
        KomoVoice for AI phone calls and KomoChat for AI sales chat.
      </SectionInfo.Description>
      <Signature />
    </SectionInfo>
  );
}

export default HomeContent;
