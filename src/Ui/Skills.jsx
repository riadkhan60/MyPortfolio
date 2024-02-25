import { useGSAP } from "@gsap/react";
import {
  CssSVG,
  ExpressSVG,
  FigmaSVG,
  HtmlLogoSVG,
  JavaScriptSVG,
  MongoDBSVG,
  NextSVG,
  NodeSVG,
  ReactQuerySVG,
  ReactRouterSVG,
  ReactSVG,
  ReduxSVG,
  SassSVG,
  TailwindSVG,
} from "../skillLogos/SkillLogos";
import gsap from "gsap";

function Skills() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        direction: "0.1",
      },
    });
    tl.from(".logo-1", {
      scale: 0.1,
      opacity: 0,
      delay: 0.4,
    })
      .to(".lineOne", {
        opacity: 1,
        duration: 0.1,
        width: "200px",
      })
      .from(".logo-2", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineOne", {
        opacity: 1,
        duration: 0.1,
        width: "360px",
      })
      .from(".logo-3", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineTwo", {
        opacity: 1,
        duration: 0.1,
        height: "100px",
      })
      .from(".logo-6", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineThree", {
        opacity: 1,
        duration: 0.1,
        width: "200px",
      })
      .from(".logo-5", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineThree", {
        opacity: 1,
        duration: 0.1,
        width: "400px",
      })
      .from(".logo-4", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineFour", {
        opacity: 1,
        duration: 0.1,
        height: "100px",
      })
      .from(".logo-7", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineFive", {
        opacity: 1,
        duration: 0.1,
        width: "200px",
      })
      .from(".logo-8", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineFive", {
        opacity: 1,
        duration: 0.1,
        width: "380px",
      })
      .from(".logo-9", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineSix", {
        opacity: 1,
        duration: 0.1,
        height: "100px",
      })
      .from(".logo-12", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineSeven", {
        opacity: 1,
        duration: 0.1,
        width: "200px",
      })
      .from(".logo-11", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineSeven", {
        opacity: 1,
        duration: 0.2,
        width: "400px",
      })
      .from(".logo-10", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineEight", {
        opacity: 1,
        duration: 0.1,
        height: "100px",
      })
      .from(".logo-13", {
        scale: 0.1,
        opacity: 0,
      })
      .to(".lineNine", {
        opacity: 1,
        duration: 0.1,
        width: "200px",
      })
      .from(".logo-14", {
        scale: 0.1,
        opacity: 0,
      });
  });
  return (
    <div className=" after:absolute  after:left-0 after:top-[50%] after:h-[100%] after:w-[1px] after:translate-y-[-50%]  after:bg-subtitleColor">
      <div className=" ml-2 grid max-xl:w-[500px] max-w-[500px] grid-cols-3  flex-wrap content-center items-center justify-items-center gap-2">
        <div className="relative">
          <div className=" lineOne absolute left-[30px] top-[50%] z-[-1] h-[2px] w-[0px] bg-subtitleColor opacity-0 max-md:hidden"></div>
          <div className=" logo-1">
            <HtmlLogoSVG />
          </div>
        </div>
        <div className="logo-2">
          <CssSVG />
        </div>
        <div className="relative">
          <div className=" lineTwo absolute right-[50%] top-[50%] z-[-1] h-[2px] w-[2px] translate-x-[-50%] bg-subtitleColor opacity-0 max-md:hidden"></div>
          <div className="logo-3">
            <SassSVG />
          </div>
        </div>
        <div className="relative">
          <div className=" lineFour absolute right-[50%] top-[50%] z-[-1] h-[2px] w-[2px] translate-x-[-50%] bg-subtitleColor opacity-0 max-md:hidden"></div>
          <div className="logo-4">
            <JavaScriptSVG />
          </div>
        </div>
        <div className="logo-5">
          <TailwindSVG />
        </div>
        <div className=" relative">
          <div className=" lineThree opacity-1 absolute right-[10px]  top-[50%] z-[-1] h-[2px] w-[2px] bg-subtitleColor opacity-0 max-md:hidden"></div>
          <div className="logo-6">
            <FigmaSVG />
          </div>
        </div>
        <div className=" relative">
          <div className=" lineFive absolute left-[30px] top-[50%] z-[-1] h-[2px] w-[0px] bg-subtitleColor opacity-0 max-md:hidden"></div>
          <div className="logo-7">
            <ReactSVG />
          </div>
        </div>
        <div className="logo-8">
          <ReactRouterSVG />
        </div>
        <div className=" relative">
          <div className=" lineSix absolute right-[50%] top-[50%] z-[-1] h-[2px] w-[2px] translate-x-[-50%] bg-subtitleColor opacity-0 max-md:hidden"></div>
          <div className=" logo-9">
            <ReactQuerySVG />
          </div>
        </div>
        <div className=" relative z-10">
          <div className=" lineEight absolute right-[50%] top-[50%] z-[-1] h-[2px] w-[2px] translate-x-[-50%] bg-subtitleColor opacity-0 max-md:hidden"></div>
          <div className="  logo-10">
            <NodeSVG />
          </div>
        </div>
        <div className=" logo-11 z-10">
          <NextSVG />
        </div>
        <div className=" relative">
          <div className=" lineSeven opacity-1 absolute right-[10px] top-[50%] z-[-1]  h-[2px] w-[2px] bg-subtitleColor opacity-0 max-md:hidden"></div>
          <div className=" logo-12">
            <ReduxSVG />
          </div>
        </div>
        <div className="logo-13 z-20">
          <div className=" lineNine absolute left-[30px] top-[50%] z-[-1] h-[2px] w-[0px] bg-subtitleColor opacity-0 max-md:hidden"></div>
          <ExpressSVG />
        </div>
        <div className=" logo-14 z-30 ">
          <MongoDBSVG />
        </div>
      </div>
    </div>
  );
}

export default Skills;
