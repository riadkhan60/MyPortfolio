import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import useModalContext from "../../../contexts/PortfolioModalContext/useModalContext";


function FeatureElements({ project }) {
  const { setOpenModal } = useModalContext();
  return (
    <div className=" flex cursor-pointer flex-col justify-center gap-4">
      <h2
        onClick={() => setOpenModal(project.id)}
        className=" mt-6 text-[20px] font-normal text-themeWhite lg:text-2xl"
      >
        {project.name}
      </h2>
      <img
        onClick={() => setOpenModal(project.id)}
        src={project.image}
        className=" rounded-lg transition-all duration-300 ease-in-out  hover:opacity-80"
        width={6000}
        alt=""
      />
      <div className="">
        <div className=" items-center justify-between text-[15px] lg:flex  lg:text-[16px]">
          <h6 className="  font-medium text-themeWhite  opacity-80 max-lg:mb-3 ">
            {project.techs}
          </h6>
          <div className="flex gap-4 font-medium text-themeWhite opacity-80">
            <a
              className=" inline-flex items-center justify-center gap-1  hover:text-white"
              href={project.github}
            >
              Github <FaGithub />
            </a>
            <a
              className=" inline-flex items-center justify-center gap-1 hover:text-white"
              href={project.live}
            >
              Live <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureElements;
