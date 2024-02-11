import { useGSAP } from "@gsap/react";
import useMenuContext from "../contexts/useMenuContext";
import { useRef } from "react";
import gsap from "gsap";


function Overlay() {
  const { openMenu, onCloseMenu } = useMenuContext();
  const ref = useRef(null);

  useGSAP(() => {
   
    if (openMenu) {
      gsap.to(ref.current, {
        transform: 'translateX(0)',
        duration: 0.8,
      })
    }
    if (!openMenu) {
      gsap.to(ref.current, {
        transform: 'translateX(-100%)',
        duration: 0.8,
      })
    }
  }, { dependencies: [openMenu] })
  
  return (
    <div onClick={onCloseMenu} ref={ref}  className="z-50 max-md:hidden fixed bottom-0 left-0 translate-x-[-100%] top-0 w-full opacity-[0.9] bg-[#1d1b19]"></div>
  );
}

export default Overlay;
