import { TfiClose } from "react-icons/tfi";
import portfoliosData from "../../Data/ProtfolioData";
import useModalContext from "../../contexts/PortfolioModalContext/useModalContext";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// CSS Graphics Component for Modal (larger version)
function ModalProjectGraphic({ projectId }) {
  const getGraphic = () => {
    switch (projectId) {
      case 1: // Synapse Social - AI Neural Network
        return (
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
            {/* Neural network nodes */}
            <div className="absolute inset-0">
              {/* Nodes */}
              <div className="absolute left-[20%] top-[25%] h-4 w-4 animate-pulse rounded-full bg-cyan-400"></div>
              <div className="absolute right-[25%] top-[35%] h-3 w-3 animate-pulse rounded-full bg-blue-400 delay-200"></div>
              <div className="absolute bottom-[30%] left-[15%] h-5 w-5 animate-pulse rounded-full bg-purple-400 delay-500"></div>
              <div className="absolute bottom-[25%] right-[20%] h-4 w-4 animate-pulse rounded-full bg-indigo-400 delay-700"></div>
              <div className="absolute left-[45%] top-[20%] h-3 w-3 animate-pulse rounded-full bg-violet-400 delay-300"></div>
              <div className="delay-600 absolute bottom-[35%] right-[45%] h-4 w-4 animate-pulse rounded-full bg-cyan-300"></div>
              <div className="delay-800 absolute left-[30%] top-[45%] h-3 w-3 animate-pulse rounded-full bg-blue-300"></div>
              <div className="delay-400 absolute right-[35%] top-[55%] h-4 w-4 animate-pulse rounded-full bg-purple-300"></div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 h-full w-full">
                <line
                  x1="20%"
                  y1="25%"
                  x2="75%"
                  y2="35%"
                  stroke="rgba(99, 179, 237, 0.4)"
                  strokeWidth="2"
                />
                <line
                  x1="15%"
                  y1="70%"
                  x2="45%"
                  y2="20%"
                  stroke="rgba(147, 51, 234, 0.4)"
                  strokeWidth="2"
                />
                <line
                  x1="75%"
                  y1="35%"
                  x2="80%"
                  y2="75%"
                  stroke="rgba(129, 140, 248, 0.4)"
                  strokeWidth="2"
                />
                <line
                  x1="45%"
                  y1="20%"
                  x2="55%"
                  y2="65%"
                  stroke="rgba(196, 181, 253, 0.4)"
                  strokeWidth="2"
                />
                <line
                  x1="30%"
                  y1="45%"
                  x2="65%"
                  y2="55%"
                  stroke="rgba(167, 139, 250, 0.3)"
                  strokeWidth="2"
                />
              </svg>

              {/* Floating particles */}
              <div className="absolute left-[35%] top-[60%] h-2 w-2 animate-bounce rounded-full bg-cyan-200"></div>
              <div className="absolute right-[40%] top-[70%] h-2 w-2 animate-bounce rounded-full bg-blue-200 delay-1000"></div>
              <div className="absolute bottom-[40%] left-[60%] h-1 w-1 animate-ping rounded-full bg-purple-200 delay-500"></div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            {/* AI Text */}
            <div className="absolute bottom-6 left-6 text-sm font-bold text-cyan-400 opacity-70">
              AI • NEURAL • PROCESSING • AUTOMATION
            </div>
          </div>
        );

      case 2: // Qbexel - Tech Company Geometric
        return (
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-emerald-800 via-teal-900 to-cyan-900">
            {/* Geometric shapes */}
            <div className="absolute inset-0">
              {/* Hexagons */}
              <div
                className="absolute left-[10%] top-[25%] h-12 w-12 rotate-45 animate-spin bg-emerald-400 opacity-70"
                style={{ animationDuration: "12s" }}
              ></div>
              <div className="absolute right-[15%] top-[40%] h-8 w-8 rotate-12 animate-pulse bg-teal-400 opacity-60"></div>
              <div className="absolute bottom-[30%] left-[60%] h-14 w-14 rotate-45 bg-cyan-400 opacity-50"></div>
              <div className="absolute left-[35%] top-[15%] h-10 w-10 rotate-12 animate-pulse bg-emerald-300 opacity-60 delay-700"></div>

              {/* Triangles */}
              <div className="absolute left-[25%] top-[10%] h-0 w-0 animate-pulse border-b-[25px] border-l-[15px] border-r-[15px] border-b-emerald-300 border-l-transparent border-r-transparent opacity-60 delay-300"></div>
              <div className="absolute bottom-[15%] right-[30%] h-0 w-0 border-b-[20px] border-l-[12px] border-r-[12px] border-b-teal-300 border-l-transparent border-r-transparent opacity-70"></div>

              {/* Circuit lines */}
              <svg className="absolute inset-0 h-full w-full">
                <rect
                  x="20%"
                  y="50%"
                  width="20%"
                  height="3"
                  fill="rgba(52, 211, 153, 0.5)"
                />
                <rect
                  x="45%"
                  y="30%"
                  width="3"
                  height="40%"
                  fill="rgba(20, 184, 166, 0.5)"
                />
                <rect
                  x="60%"
                  y="65%"
                  width="30%"
                  height="3"
                  fill="rgba(34, 211, 238, 0.5)"
                />
                <rect
                  x="15%"
                  y="75%"
                  width="25%"
                  height="2"
                  fill="rgba(52, 211, 153, 0.4)"
                />
              </svg>

              {/* Tech grid pattern */}
              <div className="absolute right-[25%] top-[60%] grid grid-cols-2 gap-1">
                <div className="h-2 w-2 bg-emerald-400 opacity-50"></div>
                <div className="h-2 w-2 bg-teal-400 opacity-50"></div>
                <div className="h-2 w-2 bg-cyan-400 opacity-50"></div>
                <div className="h-2 w-2 bg-emerald-300 opacity-50"></div>
              </div>
            </div>

            {/* Company pattern */}
            <div className="absolute bottom-6 left-6 text-sm font-bold text-emerald-400 opacity-70">
              TECH • INNOVATION • SCALE • LEADERSHIP
            </div>
          </div>
        );

      case 3: // Tech Leadership - Architecture Pattern
        return (
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
            {/* Architecture blocks */}
            <div className="absolute inset-0">
              {/* Building blocks */}
              <div className="absolute left-[15%] top-[30%] h-16 w-10 bg-gradient-to-t from-orange-500 to-yellow-400 opacity-80"></div>
              <div className="absolute left-[28%] top-[40%] h-12 w-8 bg-gradient-to-t from-red-500 to-orange-400 opacity-70"></div>
              <div className="absolute left-[38%] top-[25%] h-20 w-12 bg-gradient-to-t from-pink-500 to-red-400 opacity-75"></div>
              <div className="absolute left-[52%] top-[35%] h-14 w-9 bg-gradient-to-t from-rose-500 to-pink-400 opacity-80"></div>
              <div className="h-18 absolute left-[63%] top-[20%] w-11 bg-gradient-to-t from-amber-500 to-orange-400 opacity-70"></div>
              <div className="absolute left-[75%] top-[45%] h-10 w-7 bg-gradient-to-t from-red-400 to-pink-400 opacity-75"></div>

              {/* Connecting bridges */}
              <div className="absolute left-[23%] top-[55%] h-2 w-[50%] bg-gradient-to-r from-orange-400 to-pink-400 opacity-60"></div>
              <div className="absolute left-[35%] top-[30%] h-2 w-[35%] bg-gradient-to-r from-red-400 to-rose-400 opacity-50"></div>
              <div className="absolute left-[20%] top-[70%] h-1 w-[60%] bg-gradient-to-r from-amber-400 to-orange-400 opacity-40"></div>

              {/* Leadership arrows */}
              <div className="absolute right-[15%] top-[50%] h-0 w-0 animate-bounce border-b-[18px] border-l-[12px] border-r-[12px] border-b-yellow-400 border-l-transparent border-r-transparent opacity-70"></div>
              <div className="absolute bottom-[25%] left-[10%] h-0 w-0 animate-bounce border-b-[15px] border-l-[10px] border-r-[10px] border-b-orange-400 border-l-transparent border-r-transparent opacity-60 delay-500"></div>
            </div>

            <div className="absolute bottom-6 left-6 text-sm font-bold text-orange-400 opacity-70">
              LEADERSHIP • ARCHITECTURE • SCALE • MENTORSHIP
            </div>
          </div>
        );

      case 4: // GitHub - Code Repository Pattern
        return (
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900">
            {/* Code pattern */}
            <div className="absolute inset-0 font-mono text-sm">
              {/* Code lines */}
              <div className="absolute left-6 top-6 text-green-400 opacity-70">
                {"</>"}
              </div>
              <div className="absolute left-6 top-12 h-1 w-20 bg-blue-400 opacity-60"></div>
              <div className="absolute left-6 top-16 h-1 w-24 bg-purple-400 opacity-50"></div>
              <div className="absolute left-6 top-20 h-1 w-16 bg-green-400 opacity-60"></div>
              <div className="absolute left-6 top-24 h-1 w-28 bg-cyan-400 opacity-50"></div>

              <div className="absolute right-6 top-6 text-purple-400 opacity-70">
                {"{}"}
              </div>
              <div className="w-18 absolute right-12 top-12 h-1 bg-cyan-400 opacity-60"></div>
              <div className="w-22 absolute right-16 top-16 h-1 bg-pink-400 opacity-50"></div>
              <div className="absolute right-14 top-20 h-1 w-20 bg-blue-400 opacity-60"></div>

              {/* Git branches visualization */}
              <svg className="absolute inset-0 h-full w-full">
                <circle cx="25%" cy="55%" r="4" fill="#22c55e" opacity="0.8" />
                <circle cx="45%" cy="45%" r="4" fill="#3b82f6" opacity="0.8" />
                <circle cx="65%" cy="65%" r="4" fill="#8b5cf6" opacity="0.8" />
                <circle cx="35%" cy="75%" r="3" fill="#f59e0b" opacity="0.7" />
                <circle cx="55%" cy="35%" r="3" fill="#ef4444" opacity="0.7" />

                <line
                  x1="25%"
                  y1="55%"
                  x2="45%"
                  y2="45%"
                  stroke="#22c55e"
                  strokeWidth="3"
                  opacity="0.6"
                />
                <line
                  x1="45%"
                  y1="45%"
                  x2="65%"
                  y2="65%"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  opacity="0.6"
                />
                <line
                  x1="25%"
                  y1="55%"
                  x2="35%"
                  y2="75%"
                  stroke="#22c55e"
                  strokeWidth="2"
                  opacity="0.5"
                />
                <line
                  x1="45%"
                  y1="45%"
                  x2="55%"
                  y2="35%"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  opacity="0.5"
                />
              </svg>

              {/* Binary pattern */}
              <div className="absolute bottom-12 left-6 text-xs leading-4 text-green-300 opacity-40">
                101001101
                <br />
                110010110
                <br />
                011011010
                <br />
                100110101
              </div>

              {/* Terminal cursor */}
              <div className="absolute bottom-6 right-6 animate-pulse text-green-400">
                |
              </div>
            </div>

            <div className="absolute bottom-6 left-6 text-sm font-bold text-green-400 opacity-70">
              CODE • OPEN SOURCE • REPOSITORIES • COLLABORATION
            </div>
          </div>
        );

      case 5: // Industry Impact - Community Network
        return (
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900">
            {/* Network connections */}
            <div className="absolute inset-0">
              {/* People nodes */}
              <div className="absolute left-[20%] top-[30%] h-5 w-5 animate-pulse rounded-full bg-violet-400"></div>
              <div className="absolute right-[25%] top-[25%] h-4 w-4 animate-pulse rounded-full bg-purple-400 delay-200"></div>
              <div className="delay-400 absolute bottom-[25%] left-[15%] h-6 w-6 animate-pulse rounded-full bg-fuchsia-400"></div>
              <div className="delay-600 absolute bottom-[30%] right-[20%] h-5 w-5 animate-pulse rounded-full bg-pink-400"></div>
              <div className="absolute left-[50%] top-[35%] h-4 w-4 animate-pulse rounded-full bg-indigo-400 delay-100"></div>
              <div className="absolute bottom-[20%] right-[45%] h-5 w-5 animate-pulse rounded-full bg-violet-300 delay-500"></div>
              <div className="delay-800 absolute left-[35%] top-[15%] h-3 w-3 animate-pulse rounded-full bg-purple-300"></div>
              <div className="absolute right-[35%] top-[60%] h-4 w-4 animate-pulse rounded-full bg-fuchsia-300 delay-300"></div>
              <div className="absolute bottom-[45%] left-[65%] h-4 w-4 animate-pulse rounded-full bg-pink-300 delay-700"></div>

              {/* Connection lines */}
              <svg className="absolute inset-0 h-full w-full">
                <line
                  x1="20%"
                  y1="30%"
                  x2="75%"
                  y2="25%"
                  stroke="rgba(167, 139, 250, 0.5)"
                  strokeWidth="2"
                />
                <line
                  x1="15%"
                  y1="75%"
                  x2="50%"
                  y2="35%"
                  stroke="rgba(196, 181, 253, 0.5)"
                  strokeWidth="2"
                />
                <line
                  x1="75%"
                  y1="25%"
                  x2="80%"
                  y2="70%"
                  stroke="rgba(244, 114, 182, 0.5)"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="35%"
                  x2="55%"
                  y2="80%"
                  stroke="rgba(232, 121, 249, 0.5)"
                  strokeWidth="2"
                />
                <line
                  x1="20%"
                  y1="30%"
                  x2="15%"
                  y2="75%"
                  stroke="rgba(139, 92, 246, 0.4)"
                  strokeWidth="2"
                />
                <line
                  x1="35%"
                  y1="15%"
                  x2="65%"
                  y2="40%"
                  stroke="rgba(167, 139, 250, 0.4)"
                  strokeWidth="1"
                />
                <line
                  x1="65%"
                  y1="55%"
                  x2="35%"
                  y2="60%"
                  stroke="rgba(244, 114, 182, 0.4)"
                  strokeWidth="1"
                />
              </svg>

              {/* Ripple effects */}
              <div className="absolute left-[35%] top-[50%] h-12 w-12 animate-ping rounded-full border-2 border-violet-400 opacity-30"></div>
              <div className="absolute bottom-[40%] right-[35%] h-8 w-8 animate-ping rounded-full border-2 border-purple-400 opacity-40 delay-1000"></div>
              <div className="absolute left-[60%] top-[25%] h-6 w-6 animate-ping rounded-full border border-fuchsia-400 opacity-50 delay-500"></div>

              {/* Impact waves */}
              <div className="absolute bottom-[60%] left-[25%] h-16 w-16 animate-pulse rounded-full border border-violet-300 opacity-20"></div>
              <div className="absolute right-[30%] top-[45%] h-20 w-20 animate-pulse rounded-full border border-purple-300 opacity-15 delay-700"></div>
            </div>

            <div className="absolute bottom-6 left-6 text-sm font-bold text-violet-400 opacity-70">
              AI RESEARCH • LEARNING • EXPLORATION • VALUE CREATION
            </div>
          </div>
        );

      default:
        return (
          <div className="h-[300px] w-full rounded-lg bg-gradient-to-br from-gray-700 to-gray-900"></div>
        );
    }
  };

  return getGraphic();
}

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
      className="modal fixed left-0 top-0 z-50 flex h-full w-full justify-center  bg-backgroundColorSecondary/95 text-white max-lg:p-4 max-md:h-[110vh] lg:items-center "
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
              {data.github && (
                <a
                  className=" inline-flex items-center justify-center gap-1  hover:text-white"
                  href={data.github}
                >
                  Github <FaGithub />
                </a>
              )}
              {data.live && (
                <a
                  className=" inline-flex items-center justify-center gap-1 hover:text-white"
                  href={data.live}
                >
                  Live <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
          <h2 className=" my-5 text-subtitleColor">
            {data.TechUsed.join(", ")}
          </h2>
        </div>
        <div className=" max-w-[700px] ">
          <ModalProjectGraphic projectId={data.id} />
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
