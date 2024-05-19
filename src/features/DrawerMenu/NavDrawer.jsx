import { useGSAP } from "@gsap/react";

import NavFooter from "./NavFooter";
import NavList from "./NavList";
import { TfiClose } from "react-icons/tfi";
import { useRef } from "react";
import gsap from "gsap";
import useMenuContext from "../../contexts/MenuContext/useMenuContext";

const navList = [
  "Home",
  "About",
  "Portfolio",
  "Services",
  "Customers",
  "Blogs",
  "Contacts",
];

function NavDrawer() {
  const container = useRef(null);
  const timeLine = useRef(null);
  const { openMenu, onCloseMenu } = useMenuContext();

  useGSAP(
    () => {
      timeLine.current = gsap.timeline({
        delay: 0.1,
        paused: true
      });
      const tl = timeLine.current;
      tl.to(container.current, {
        transform: "translateX(0)",
        duration: 0.5,
        ease: "circ.out",
      });

      tl.from(".menuItem", {
        transform: "translateX(15%)",
        opacity: 0,
        stagger: 0.1,
      });

      tl.from("#navFooter", {
        transform: "translateY(20%)",
        opacity: 0,
      });
    },
  );

  useGSAP(() => {
    if (openMenu === 'open') {
      timeLine.current.timeScale(1).play();
    }
    if (openMenu === 'close') {
      timeLine.current.timeScale(-3).reverse();
    }
  },{dependencies:[openMenu]})

  return (
    <div
      ref={container}
      id="drawer"
      className=" fixed right-0 top-0 z-50  h-full translate-x-[150%] bg-[#181715] transition-[width] duration-500 ease-in-out max-lg:left-0 max-md:h-[130vh] lg:w-[44%]"
    >
      <div
        onClick={onCloseMenu}
        className=" cursor-pointer group absolute right-[40px] top-[40px] flex h-10 w-10 items-center justify-center border-subtitleColor hover:border "
      >
        <div className="  cursor-pointer text-4xl text-themeDarkshade transition-all duration-300 ease-in-out group-hover:text-xl group-hover:text-subtitleColor  ">
          <TfiClose />
        </div>
      </div>
      <div
        id="op"
        className="flex h-full w-full flex-col justify-between px-[16%] py-[100px] max-md:h-[100vh] max-sm:px-5"
      >
        <NavList navList={navList} />
        <NavFooter />
      </div>
    </div>
  );
}

export default NavDrawer;
