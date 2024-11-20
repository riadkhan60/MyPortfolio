import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from "react-icons/io";
import { TbBrandUpwork } from "react-icons/tb";
import { SiGmail } from "react-icons/si";

const navFooterItems = [
  {
    name: "github",
    element: <IoLogoGithub />,
    link: "https://github.com/riadkhan60",
  },
  {
    name: "linkedin",
    element: <IoLogoLinkedin />,
    link: "https://www.linkedin.com/in/md-samiul-alam-khan-a2441b239/",
  },
  {
    name: "facebook",
    element: <IoLogoFacebook />,
    link: "https://www.facebook.com/khan.riad.3",
  },
  {
    name: "upwork",
    element: <TbBrandUpwork />,
    link: "https://www.upwork.com/freelancers/~01632a5e14cb22ea0b?mp_source=share",
  },
  {
    name: "gmail",
    element: <SiGmail />,
    link: "mailto:khanriad60@gmail.com",
  },
];

function NavFooter() {
  return (
    <div id="navFooter" className=" pt-[50px]">
      <div className=" mb-[30px]">
        <ul className=" mb-[10px] flex cursor-pointer items-center gap-[10px]">
          {navFooterItems.map((item) => (
            <NavFooterItem
              key={item.name}
              icon={item.element}
              link={item.link}
            />
          ))}
        </ul>
      </div>

      <div className=" flex flex-wrap items-center gap-3 max-sm:gap-2">
        <span className=" text-lg text-themeDarkshade">Developed by</span>
        <a
          href="https://qbexel.com"
          target="_blank"
          rel="noreferrer"
          className=" border-b border-[#ffffff33] text-lg text-themeWhite"
        >
          Qbexel
        </a>
      </div>
    </div>
  );
}

function NavFooterItem({ icon, link }) {
  return (
    <li className="">
      <a
        className=" flex h-10 w-10 items-center justify-center bg-[rgba(255,255,255,0.05)] text-lg text-[#888]"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {icon}
      </a>
    </li>
  );
}

export default NavFooter;
