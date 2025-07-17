import { CustomerReviews } from "../HomepageUi/CustomersUI/CustomerReviews";
import CustomersIcons from "../HomepageUi/CustomersUI/CustomersIcons";
import SectionContainer from "../HomepageUi/SectionContainer";
import SectionInfo from "../HomepageUi/SectionInfo";

function Customers() {
  return (
    <div id="customers" className=" mb-[150px]">
      <SectionContainer>
        <SectionInfo>
          <SectionInfo.Subtitle>Impact & Growth</SectionInfo.Subtitle>
          <SectionInfo.Title>By the numbers</SectionInfo.Title>
          <SectionInfo.Description>
            Measurable impact through AI research, product development, and
            community contributions that demonstrate consistent growth and value
            creation.
          </SectionInfo.Description>
        </SectionInfo>
        <div>
          <CustomersIcons />
          <CustomerReviews />
        </div>
      </SectionContainer>
    </div>
  );
}

export default Customers;
