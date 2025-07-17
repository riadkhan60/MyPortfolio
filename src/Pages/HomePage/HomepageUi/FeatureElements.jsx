import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import useModalContext from "../../../contexts/PortfolioModalContext/useModalContext";

// CSS Graphics Component
function ProjectGraphic({ projectId }) {
  const { setOpenModal } = useModalContext();

  const getGraphic = () => {
    switch (projectId) {
      case 1: // Synapse Social - AI Neural Network
        return (
          <div className="relative h-[120px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 md:h-[160px]">
            {/* Neural network nodes */}
            <div className="absolute inset-0">
              {/* Nodes */}
              <div className="absolute left-[20%] top-[20%] h-3 w-3 animate-pulse rounded-full bg-cyan-400"></div>
              <div className="absolute right-[25%] top-[30%] h-2 w-2 animate-pulse rounded-full bg-blue-400 delay-200"></div>
              <div className="absolute bottom-[35%] left-[15%] h-4 w-4 animate-pulse rounded-full bg-purple-400 delay-500"></div>
              <div className="absolute bottom-[25%] right-[20%] h-3 w-3 animate-pulse rounded-full bg-indigo-400 delay-700"></div>
              <div className="absolute left-[45%] top-[15%] h-2 w-2 animate-pulse rounded-full bg-violet-400 delay-300"></div>
              <div className="delay-600 absolute bottom-[40%] right-[45%] h-3 w-3 animate-pulse rounded-full bg-cyan-300"></div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 h-full w-full">
                <line
                  x1="20%"
                  y1="20%"
                  x2="75%"
                  y2="30%"
                  stroke="rgba(99, 179, 237, 0.3)"
                  strokeWidth="1"
                />
                <line
                  x1="15%"
                  y1="65%"
                  x2="45%"
                  y2="15%"
                  stroke="rgba(147, 51, 234, 0.3)"
                  strokeWidth="1"
                />
                <line
                  x1="75%"
                  y1="30%"
                  x2="80%"
                  y2="75%"
                  stroke="rgba(129, 140, 248, 0.3)"
                  strokeWidth="1"
                />
                <line
                  x1="45%"
                  y1="15%"
                  x2="55%"
                  y2="60%"
                  stroke="rgba(196, 181, 253, 0.3)"
                  strokeWidth="1"
                />
              </svg>

              {/* Floating particles */}
              <div className="absolute left-[30%] top-[50%] h-1 w-1 animate-bounce rounded-full bg-cyan-200"></div>
              <div className="absolute right-[40%] top-[60%] h-1 w-1 animate-bounce rounded-full bg-blue-200 delay-1000"></div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            {/* AI Text */}
            <div className="absolute bottom-4 left-4 text-xs font-bold text-cyan-400 opacity-60">
              AI • NEURAL • PROCESSING
            </div>
          </div>
        );

      case 2: // Qbexel - Tech Company Geometric
        return (
          <div className="relative h-[120px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-emerald-800 via-teal-900 to-cyan-900 md:h-[160px]">
            {/* Geometric shapes */}
            <div className="absolute inset-0">
              {/* Hexagons */}
              <div
                className="absolute left-[10%] top-[20%] h-8 w-8 rotate-45 animate-spin bg-emerald-400 opacity-70"
                style={{ animationDuration: "8s" }}
              ></div>
              <div className="absolute right-[15%] top-[40%] h-6 w-6 rotate-12 animate-pulse bg-teal-400 opacity-60"></div>
              <div className="absolute bottom-[30%] left-[60%] h-10 w-10 rotate-45 bg-cyan-400 opacity-50"></div>

              {/* Triangles */}
              <div className="absolute left-[30%] top-[10%] h-0 w-0 animate-pulse border-b-[17px] border-l-[10px] border-r-[10px] border-b-emerald-300 border-l-transparent border-r-transparent opacity-60 delay-300"></div>
              <div className="absolute bottom-[15%] right-[35%] h-0 w-0 border-b-[14px] border-l-[8px] border-r-[8px] border-b-teal-300 border-l-transparent border-r-transparent opacity-70"></div>

              {/* Circuit lines */}
              <svg className="absolute inset-0 h-full w-full">
                <rect
                  x="20%"
                  y="50%"
                  width="15%"
                  height="2"
                  fill="rgba(52, 211, 153, 0.4)"
                />
                <rect
                  x="40%"
                  y="30%"
                  width="2"
                  height="40%"
                  fill="rgba(20, 184, 166, 0.4)"
                />
                <rect
                  x="60%"
                  y="60%"
                  width="25%"
                  height="2"
                  fill="rgba(34, 211, 238, 0.4)"
                />
              </svg>
            </div>

            {/* Company pattern */}
            <div className="absolute bottom-4 left-4 text-xs z-50 font-bold text-emerald-400 opacity-60">
              TECH • INNOVATION • SCALE
            </div>
          </div>
        );

      case 3: // Tech Leadership - Architecture Pattern
        return (
          <div className="relative h-[120px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 md:h-[160px]">
            {/* Architecture blocks */}
            <div className="absolute inset-0">
              {/* Building blocks */}
              <div className="absolute left-[15%] top-[25%] h-12 w-8 bg-gradient-to-t from-orange-500 to-yellow-400 opacity-80"></div>
              <div className="absolute left-[28%] top-[35%] h-8 w-6 bg-gradient-to-t from-red-500 to-orange-400 opacity-70"></div>
              <div className="absolute left-[38%] top-[20%] h-16 w-10 bg-gradient-to-t from-pink-500 to-red-400 opacity-75"></div>
              <div className="absolute left-[52%] top-[30%] h-10 w-7 bg-gradient-to-t from-rose-500 to-pink-400 opacity-80"></div>
              <div className="absolute left-[63%] top-[15%] h-14 w-9 bg-gradient-to-t from-amber-500 to-orange-400 opacity-70"></div>

              {/* Connecting bridges */}
              <div className="absolute left-[23%] top-[45%] h-1 w-[45%] bg-gradient-to-r from-orange-400 to-pink-400 opacity-60"></div>
              <div className="absolute left-[35%] top-[25%] h-1 w-[30%] bg-gradient-to-r from-red-400 to-rose-400 opacity-50"></div>

              {/* Leadership arrows */}
              <div className="absolute right-[20%] top-[40%] h-0 w-0 animate-bounce border-b-[12px] border-l-[8px] border-r-[8px] border-b-yellow-400 border-l-transparent border-r-transparent opacity-70"></div>
            </div>

            <div className="absolute bottom-4 left-4 text-xs font-bold text-orange-400 opacity-60">
              LEADERSHIP • ARCHITECTURE • SCALE
            </div>
          </div>
        );

      case 4: // GitHub - Code Repository Pattern
        return (
          <div className="relative h-[120px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 md:h-[160px]">
            {/* Code pattern */}
            <div className="absolute inset-0 font-mono text-xs">
              {/* Code lines */}
              <div className="absolute left-4 top-4 text-green-400 opacity-60">
                {"</>"}
              </div>
              <div className="absolute left-4 top-8 h-0.5 w-16 bg-blue-400 opacity-50"></div>
              <div className="absolute left-4 top-12 h-0.5 w-20 bg-purple-400 opacity-40"></div>
              <div className="absolute left-4 top-16 h-0.5 w-12 bg-green-400 opacity-50"></div>

              <div className="absolute right-4 top-4 text-purple-400 opacity-60">
                {"{}"}
              </div>
              <div className="absolute right-8 top-8 h-0.5 w-14 bg-cyan-400 opacity-50"></div>
              <div className="w-18 absolute right-12 top-12 h-0.5 bg-pink-400 opacity-40"></div>

              {/* Git branches visualization */}
              <svg className="absolute inset-0 h-full w-full">
                <circle cx="30%" cy="50%" r="3" fill="#22c55e" opacity="0.7" />
                <circle cx="50%" cy="40%" r="3" fill="#3b82f6" opacity="0.7" />
                <circle cx="70%" cy="60%" r="3" fill="#8b5cf6" opacity="0.7" />

                <line
                  x1="30%"
                  y1="50%"
                  x2="50%"
                  y2="40%"
                  stroke="#22c55e"
                  strokeWidth="2"
                  opacity="0.5"
                />
                <line
                  x1="50%"
                  y1="40%"
                  x2="70%"
                  y2="60%"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  opacity="0.5"
                />
              </svg>

              {/* Binary pattern */}
              <div className="absolute bottom-8 left-4 text-[10px] leading-3 text-green-300 opacity-30">
                1010011
                <br />
                1100101
                <br />
                0110110
              </div>
            </div>

            <div className="absolute bottom-4 left-4 text-xs z-50 font-bold text-green-400 opacity-60">
              CODE • OPEN SOURCE • REPOS
            </div>
          </div>
        );

      case 5: // Industry Impact - Community Network
        return (
          <div className="relative h-[120px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 md:h-[160px]">
            {/* Network connections */}
            <div className="absolute inset-0">
              {/* People nodes */}
              <div className="absolute left-[20%] top-[25%] h-4 w-4 animate-pulse rounded-full bg-violet-400"></div>
              <div className="absolute right-[25%] top-[20%] h-3 w-3 animate-pulse rounded-full bg-purple-400 delay-200"></div>
              <div className="delay-400 absolute bottom-[30%] left-[15%] h-5 w-5 animate-pulse rounded-full bg-fuchsia-400"></div>
              <div className="delay-600 absolute bottom-[35%] right-[20%] h-4 w-4 animate-pulse rounded-full bg-pink-400"></div>
              <div className="absolute left-[50%] top-[30%] h-3 w-3 animate-pulse rounded-full bg-indigo-400 delay-100"></div>
              <div className="absolute bottom-[25%] right-[45%] h-4 w-4 animate-pulse rounded-full bg-violet-300 delay-500"></div>

              {/* Connection lines */}
              <svg className="absolute inset-0 h-full w-full">
                <line
                  x1="20%"
                  y1="25%"
                  x2="75%"
                  y2="20%"
                  stroke="rgba(167, 139, 250, 0.4)"
                  strokeWidth="1"
                />
                <line
                  x1="15%"
                  y1="70%"
                  x2="50%"
                  y2="30%"
                  stroke="rgba(196, 181, 253, 0.4)"
                  strokeWidth="1"
                />
                <line
                  x1="75%"
                  y1="20%"
                  x2="80%"
                  y2="65%"
                  stroke="rgba(244, 114, 182, 0.4)"
                  strokeWidth="1"
                />
                <line
                  x1="50%"
                  y1="30%"
                  x2="55%"
                  y2="75%"
                  stroke="rgba(232, 121, 249, 0.4)"
                  strokeWidth="1"
                />
                <line
                  x1="20%"
                  y1="25%"
                  x2="15%"
                  y2="70%"
                  stroke="rgba(139, 92, 246, 0.3)"
                  strokeWidth="1"
                />
              </svg>

              {/* Ripple effects */}
              <div className="absolute left-[35%] top-[45%] h-8 w-8 animate-ping rounded-full border-2 border-violet-400 opacity-30"></div>
              <div className="absolute bottom-[45%] right-[35%] h-6 w-6 animate-ping rounded-full border-2 border-purple-400 opacity-40 delay-1000"></div>
            </div>

            <div className="absolute bottom-4 left-4 text-xs z-50 font-bold  text-violet-400 opacity-60">
              AI RESEARCH • EXPLORATION • VALUE CREATION
            </div>
          </div>
        );

      default:
        return (
          <div className="h-[120px] w-full rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 md:h-[160px]"></div>
        );
    }
  };

  return (
    <div
      onClick={() => setOpenModal(projectId)}
      className="cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80"
    >
      {getGraphic()}
    </div>
  );
}

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
      <ProjectGraphic projectId={project.id} />
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
