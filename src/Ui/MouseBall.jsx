import { useRef, useEffect } from "react";

function MouseBall() {
  const mouseBallRef = useRef(null);
  const mouseBallSmallRef = useRef(null);

  useEffect(() => {
    const settings = {
      mouseX: 0,
      mouseY: 0,
      positionMouseOuterX: 0,
      positionMouseOuterY: 0,
      positionMouseInnerX: 0,
      positionMouseInnerY: 0,
      speedOuter: 6,
      speedInner: 2,
      cursorStyle: 'normal'
    };
    const handleMouseMove = (event) => {
      settings.mouseX = event.clientX;
      settings.mouseY = event.clientY;

        if (window.getComputedStyle(event.target).cursor === "pointer") {
          console.log("Cursor is a pointer");
          settings.cursorStyle = "pointer";
        } else {
          console.log("Cursor is not a pointer");
          settings.cursorStyle = "normal";
        }
    };

    const updatePosition = () => {
      settings.positionMouseOuterX +=
        (settings.mouseX - settings.positionMouseOuterX) / settings.speedOuter;
      settings.positionMouseOuterY +=
        (settings.mouseY - settings.positionMouseOuterY) / settings.speedOuter;
      
      settings.positionMouseInnerX +=
        (settings.mouseX - settings.positionMouseInnerX) / settings.speedInner;
      settings.positionMouseInnerY +=
        (settings.mouseY - settings.positionMouseInnerY) / settings.speedInner;
      
    
      
      if (settings.cursorStyle === 'pointer') {
        mouseBallRef.current.classList.add('pointer');
        mouseBallSmallRef.current.classList.add('pointer');
      } else {
        mouseBallRef.current.classList.remove('pointer');
        mouseBallSmallRef.current.classList.remove('pointer');
        
      }

      mouseBallRef.current.style.transform = `translateX(${settings.positionMouseOuterX - mouseBallRef.current.offsetWidth / 2}px) translateY(${settings.positionMouseOuterY - mouseBallRef.current.offsetHeight / 2}px)`;

      mouseBallSmallRef.current.style.transform = `translateX(${settings.positionMouseInnerX - mouseBallSmallRef.current.offsetWidth / 2}px) translateY(${settings.positionMouseInnerY - mouseBallSmallRef.current.offsetHeight / 2}px)`;
      requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    mouseBallRef.current.style.dsplay = "block";
    updatePosition();
  }, []);

  return (
    <>
      <div
        id="mouseBall"
        ref={mouseBallRef}
        className=" pointer-events-none fixed left-0 top-0 z-[10000]  "
      >
        <span className="block h-[30px] w-[30px] rounded-full border-2 border-[rgba(255,255,255,0.5)] transition-all duration-300"></span>
      </div>
      <div
        id="mouseBallSmall"
        ref={mouseBallSmallRef}
        className=" pointer-events-none fixed left-0 top-0 z-[10000]  "
      >
        <span className="block h-[6px] w-[6px] rounded-full  bg-[rgba(255,255,255,0.5)] transition-all duration-300"></span>
      </div>
    </>
  );
}

export default MouseBall;
