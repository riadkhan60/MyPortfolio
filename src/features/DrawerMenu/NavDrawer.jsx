import { useGSAP } from "@gsap/react";
import useMenuContext from "../../contexts/useMenuContext";
import NavFooter from "./NavFooter";
import NavList from "./NavList";
import { TfiClose } from "react-icons/tfi";
import { useRef } from "react";
import gsap from "gsap";

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
  const { onCloseMenu } = useMenuContext();

  const container = useRef(null);
  return (
    <div
      ref={container}
      id="drawer"
      className="fixed right-0 top-0 z-50 max-md:h-[130vh] h-full bg-[#181715] transition-all duration-500 ease-in-out max-lg:left-0 lg:right-0 lg:w-[44%]"
    >
      <div onClick={onCloseMenu} className=" group absolute right-[40px] top-[40px] flex h-10 w-10 items-center justify-center border-subtitleColor hover:border ">
        <div className="  cursor-pointer text-4xl text-themeDarkshade transition-all duration-300 ease-in-out group-hover:text-xl group-hover:text-subtitleColor  ">
          <TfiClose />
        </div>
      </div>
      <div id="op" className="flex h-full w-full max-md:h-[100vh] flex-col justify-between px-[16%] py-[100px] max-sm:px-5">
        <NavList navList={navList} />
        <NavFooter />
      </div>
    </div>
  );
}

export default NavDrawer;
