import { useGSAP } from "@gsap/react";
import {
  CssSVG,
  FigmaSVG,
  HtmlLogoSVG,
  JavaScriptSVG,
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
        width: "360px",
      })
      .from(".logo-3", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineTwo", {
        opacity: 1,
        duration: 0.4,
        height: "100px",
      })
      .from(".logo-6", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineThree", {
        opacity: 1,
        duration: 0.4,
        width: "200px",
      })
      .from(".logo-5", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineThree", {
        opacity: 1,
        duration: 0.4,
        width: "400px",
      })
      .from(".logo-4", {
        scale: 0.1,
        opacity: 0,
      });
  });
  return (
    <div className=" after:absolute  after:left-0 after:top-[50%] after:h-[100%] after:w-[1px] after:translate-y-[-50%]  after:bg-borderColorHover">
      <div className=" ml-2 grid max-w-[500px] grid-cols-3  flex-wrap content-center items-center justify-items-center gap-2">
        <div className="relative">
          <div className=" lineOne absolute left-[30px] top-[50%] z-[-1] h-[2px] w-[0px] bg-slate-300 opacity-0 max-md:hidden"></div>
          <div className=" logo-1">
            <HtmlLogoSVG />
          </div>
        </div>
        <div className="logo-2">
          <CssSVG />
        </div>
        <div className="relative">
          <div className=" lineTwo absolute right-[50%] top-[50%] z-[-1] h-[2px] w-[2px] translate-x-[-50%] bg-slate-300 opacity-0 max-md:hidden"></div>
          <div className="logo-3">
            <SassSVG />
          </div>
        </div>
        <div className="logo-4">
          <JavaScriptSVG />
        </div>
        <div className="logo-5">
          <TailwindSVG />
        </div>
        <div className=" relative">
          <div className=" lineThree opacity-1 absolute right-[10px]  top-[50%] z-[-1] h-[2px] w-[2px] bg-slate-300 opacity-0 max-md:hidden"></div>
          <div className="logo-6">
            <FigmaSVG />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
