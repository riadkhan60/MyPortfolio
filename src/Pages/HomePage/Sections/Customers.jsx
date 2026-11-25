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
            Real results from real shops, and the programs that support
            Qbexel.
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
