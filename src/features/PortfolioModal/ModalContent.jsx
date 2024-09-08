import { TfiClose } from "react-icons/tfi";
import portfoliosData from "../../Data/ProtfolioData";
import useModalContext from "../../contexts/PortfolioModalContext/useModalContext";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ModalContent() {
  const { openModal, handleModal, setOpenModal } = useModalContext();
  const data = portfoliosData.find((data) => data.id === openModal);
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        transform: "translateY(-100px)",
        duration: 0.6,
      });
    },
    { dependencies: [openModal] },
  );
  return (
    <div
      onClick={handleModal}
      className="modal fixed left-0 top-0 z-50 flex h-full w-full justify-center  bg-backgroundColorSecondary/95 text-white max-lg:p-10 max-md:h-[110vh] lg:items-center "
    >
      <div
        ref={ref}
        className="relative border-borderColor  lg:border lg:p-14 "
      >
        <div>
          <p className="text-[16px] text-themeDarkshade">{data.techs}</p>
          <div className=" flex items-center gap-10">
            <h1 className=" my-5 text-[20px] font-normal text-themeWhite lg:text-4xl">
              {data.name}
            </h1>
            <div className=" mr-3 flex items-center gap-4 text-white/60 ">
              <a
                className=" inline-flex items-center justify-center gap-1  hover:text-white"
                href={data.github}
              >
                Github <FaGithub />
              </a>
              <a
                className=" inline-flex items-center justify-center gap-1 hover:text-white"
                href={data.live}
              >
                Live <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <h2 className=" my-5 text-subtitleColor">
            {data.TechUsed.join(", ")}
          </h2>
        </div>
        <div className=" max-w-[700px] ">
          <img className=" rounded-lg" src={data.image} width={6000} alt="" />
        </div>
        <div>
          <p className="mt-5 max-h-[350px] max-w-[700px] overflow-auto pb-7 text-lg text-themeDarkshade lg:max-h-[200px]">
            {data.description}
          </p>
        </div>
        <div
          onClick={() => setOpenModal(null)}
          className=" group absolute right-[40px] top-[50px] flex h-10 w-10 cursor-pointer items-center justify-center border-subtitleColor hover:border max-lg:right-0 max-lg:top-0 "
        >
          <div className="  cursor-pointer text-4xl text-themeDarkshade transition-all duration-300 ease-in-out group-hover:text-xl group-hover:text-subtitleColor  ">
            <TfiClose />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
