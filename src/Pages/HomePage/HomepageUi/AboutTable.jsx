import { PiDownloadSimpleThin } from "react-icons/pi";

import AboutTableItem from "./AboutTableItem";
import { myAge } from "../../../helper/helperFunctions";

function AboutTable() {

  return (
    <div className=" mb-[126px] flex justify-between max-xl:flex-col">
      <div className=" w-full">
        <table className=" w-full max-w-full table-fixed border-collapse  border-spacing-0 border-none p-0 text-left">
          <tbody>
            <AboutTableItem title={"Name"} value={"MD Samiul Alam Khan"} />
            <AboutTableItem title={"BirthDay"} value={"1st december 2000"} />
            <AboutTableItem title={"Age"} value={myAge} />
            <AboutTableItem title={"Address"} value={"Tangail, Bangladesh"} />
            <AboutTableItem
              title={"Phone"}
              value={"(+880) 1795024751"}
              type={"link"}
              link={"tel:+8801795024751"}
            />
            <AboutTableItem
              title={"Email"}
              value={"khanriad60@gmail.com"}
              type={"link"}
              link={"mailto:khanriad60@gmail.com"}
            />
            <AboutTableItem
              title={"LinkedIn"}
              value={"MD Samiul Alam Khan"}
              type={"link"}
              link={
                "https://www.linkedin.com/in/md-samiul-alam-khan-a2441b239/"
              }
            />
          </tbody>
        </table>
      </div>
      <div className=" ">
        <div className=" relative float-left clear-both flex w-full max-xl:mt-6 xl:ml-[70px]">
          <a
            download={"resume-md-samiul-alam-khan.pdf"}
            href="./CV/MD-Samiul-Alam-Khan.pdf"
            className=" group flex h-[220px] w-[340px] max-w-full flex-col items-center justify-center border-2 border-[rgba(255,255,255,0.2)]  text-lg font-medium text-[#888] transition-all duration-300 hover:border-[rgba(255,255,255,0.4)] max-md:h-[120px] max-md:w-[250px]"
          >
            <span className=" text-7xl text-white transition-all duration-500 group-hover:translate-y-2">
              <PiDownloadSimpleThin />
            </span>
            <span className=" pt-1 text-lg uppercase transition-all duration-500 group-hover:translate-y-2">
              {" "}
              Download CV
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutTable;
