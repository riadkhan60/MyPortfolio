import { CustomerReviews } from "../HomepageUi/CustomersUI/CustomerReviews";
import CustomersIcons from "../HomepageUi/CustomersUI/CustomersIcons";
import SectionContainer from "../HomepageUi/SectionContainer";
import SectionInfo from "../HomepageUi/SectionInfo";

function Customers() {
  return (
    <div id="customers" className=" mb-[150px]">
      <SectionContainer>
        <SectionInfo>
          <SectionInfo.Subtitle>Customers</SectionInfo.Subtitle>
          <SectionInfo.Title>Happy Clients</SectionInfo.Title>
          <SectionInfo.Description>
            Proud to bring satisfaction and happiness to my clients.
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
