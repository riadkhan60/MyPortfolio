import { useGSAP } from "@gsap/react";
import {
  CssSVG,
  FigmaSVG,
  HtmlLogoSVG,
  MaterialUiSVG,
  SassSVG,
  TailwindSVG,
} from "../skillLogos/SkillLogos";
import gsap from "gsap";

function Skills() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        direction: "0.2",
      },
    });
    tl.from(".logo-1", {
      scale: 0.1,
      opacity: 0,
    })
      .to(".lineOne", {
        opacity: 1,
        duration: 0.4,
        width: "200px",
      })
      .from(".logo-2", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineOne", {
        opacity: 1,
        duration: 0.4,
        width: "400px",
      })
      .from(".logo-3", {
        scale: 0.1,
        opacity: 0,
      });
  });
  return (
    <div className=" after:absolute  after:left-0 after:top-[50%] after:h-[100%] after:w-[1px] after:translate-y-[-50%]  after:bg-borderColorHover">
      <div className=" ml-2 grid max-w-[500px] grid-cols-3  flex-wrap content-center items-center justify-items-center gap-2">
        <div className="relative">
          <div className=" lineOne max-md:hidden absolute left-0 top-[50%] z-[-1] h-[2px] w-[0px] bg-slate-300 opacity-0">
            <div className="absolute right-[-5px] top-0  h-4 w-4 translate-y-[-50%] rounded-full bg-green-300"></div>
          </div>
          <div className=" logo-1">
            <HtmlLogoSVG />
          </div>
        </div>
        <div className="logo-2">
          <CssSVG />
        </div>
        <div className="relative">
          <div className=" lineTwo absolute left-0 top-[50%] z-[-1] h-[2px] w-[0px] bg-slate-300 opacity-0">
            <div className="absolute right-[-5px] top-0  h-4 w-4 translate-y-[-50%] rounded-full bg-green-300"></div>
          </div>
          <div className="logo-3">
            <SassSVG />
          </div>
        </div>
        <div className="logo-4">
          <TailwindSVG />
        </div>
        <div className="logo-5">
          <FigmaSVG />
        </div>
        <div className="logo-6">
          <MaterialUiSVG />
        </div>
      </div>
    </div>
  );
}

export default Skills;
