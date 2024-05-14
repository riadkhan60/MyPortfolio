import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

function FeatureElements({ project }) {
  return (
    <div className=" flex flex-col justify-center gap-4">
      <img
        src={project.image}
        className=" rounded-lg"
        width={6000}
        alt=""
      />
      <div className="">
        <div className=" items-center justify-between  lg:flex">
          <h6 className=" text-[16px] font-normal text-themeDarkshade max-lg:mb-3 lg:text-lg">
            {project.techs}
          </h6>
          <div className="flex gap-4 text-themeWhite">
            <a
              className=" inline-flex items-center justify-center gap-1"
              href={project.github}
            >
              Github <FaGithub />
            </a>
            <a
              className=" inline-flex items-center justify-center gap-1"
              href={project.live}
            >
              Live <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <h2 className=" mt-6 text-[18px] font-normal text-themeWhite lg:text-2xl">
          {project.name}
        </h2>
      </div>
    </div>
  );
}

export default FeatureElements;
