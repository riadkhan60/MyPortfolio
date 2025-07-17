
import NavMenu from "../../../features/DrawerMenu/NavMenu";
import TypeWrite from "./TypeWrite";

function Profile() {
  return (
    <div
      id="Profile"
      className=" border-[#ffffff33] transition-all duration-500 ease-in-out lg:fixed lg:bottom-0 lg:right-0 lg:top-0 lg:min-h-[100vh] lg:w-[44%] lg:border-l"
    >
      <div className="relative  flex h-full w-[100%]  flex-col items-center px-[16%] py-[100px] max-lg:px-[5%]">
        <div className="  group relative z-40 mb-[30px] w-[100%] px-[41px] py-[38px]">
          <div className=" absolute bottom-[20px] left-0 right-0 top-[20px] z-50 border border-borderColor transition-all duration-500 ease-in-out group-hover:border-[#ffffff55]"></div>
          <div className=" absolute bottom-0 left-[20px] right-[20px] top-0 z-50 border border-borderColor transition-all duration-500 ease-in-out group-hover:border-[#ffffff55]"></div>
          <img
            className=" z-50 w-[484px] min-w-full bg-gradient-to-r from-borderColor"
            src="./Profile3.png"
            alt=""
          />
          <TypeWrite />
        </div>
        <div>
          <p
            href="#contact"
            className=" inline-flex items-center justify-center gap-3 text-center"
          >
            <span className="h-[10px] w-[10px] rounded-full bg-[#44993b]"></span>
            <a
              href="https://www.linkedin.com/services/page/76859132aaa663b51b/"
              className=" border-b border-borderColor text-lg text-themeDarkshade transition-all duration-300 ease-in hover:text-themeWhite"
            >
              Exploring high-impact ideas — let’s talk.
            </a>
          </p>
        </div>
        <NavMenu />
      </div>
    </div>
  );
}

export default Profile;
