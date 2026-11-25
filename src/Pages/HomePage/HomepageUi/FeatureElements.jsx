import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import useModalContext from "../../../contexts/PortfolioModalContext/useModalContext";
import ProjectLogo from "./ProjectLogo";

function FeatureElements({ project }) {
  const { setOpenModal } = useModalContext();
  return (
    <div className=" flex cursor-pointer flex-col justify-center gap-4">
      <h2
        onClick={() => setOpenModal(project.id)}
        className=" mt-6 text-[16px] font-normal text-themeWhite lg:text-[18px]"
      >
        {project.name}
      </h2>
      <div
        onClick={() => setOpenModal(project.id)}
        className="cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80"
      >
        <ProjectLogo project={project} />
      </div>
      <div className="">
        <div className=" items-center justify-between text-[14px] flex lg:text-[17px]">
          <h6 className="  font-medium text-themeWhite  text-[14px] opacity-60">
            {project.techs}
          </h6>
          <div className=" font-medium text-[14px] text-themeWhite opacity-80">
            {project.github && (
              <a
                className=" hover:text-white"
                href={project.github}
              >
                <FaGithub />
              </a>
            )}
            {project.live && (
              <a
                className="  hover:text-white"
                href={project.live}
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureElements;
