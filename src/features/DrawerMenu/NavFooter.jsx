import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from "react-icons/io";
import { TbBrandUpwork } from "react-icons/tb";
import { SiGmail } from "react-icons/si";

const navFooterItems = [
  {
    name: "github",
    element: <IoLogoGithub />,
  },
  {
    name: "linkedin",
    element: <IoLogoLinkedin />,
  },
  {
    name: "facebook",
    element: <IoLogoFacebook />,
  },
  {
    name: "upwork",
    element: <TbBrandUpwork />,
  },
  {
    name: "gmail",
    element: <SiGmail />,
  },
];

function NavFooter() {
  return (
    <div className=" pt-[50px]">
      <div className=" mb-[30px]">
        <ul className=" mb-[10px] flex items-center gap-[10px]">
          {navFooterItems.map((item) => (
            <NavFooterItem key={item.name} icon={item.element} />
          ))}
        </ul>
      </div>

      <div className=" flex flex-wrap max-sm:gap-2 items-center gap-3">
        <span className=" text-lg text-themeDarkshade">Developed by</span>
        <a
          href=""
          className=" border-b border-[#ffffff33] text-lg text-themeWhite"
        >
          MD Samiul Alam Khan
        </a>
      </div>
    </div>
  );
}

function NavFooterItem({ icon }) {
  return (
    <li className="">
      <a
        className=" flex h-10 w-10 items-center justify-center text-lg bg-[rgba(255,255,255,0.05)] text-[#888]"
        href=""
      >
        {icon}
      </a>
    </li>
  );
}

export default NavFooter;
