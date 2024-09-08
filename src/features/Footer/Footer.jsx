import GoToTopButton from "./GoToTopButton";

function Footer() {
  return (
    <div className=" relative flex items-center  border-t border-white/20 py-[62px] ">
      <div className="  w-full ">
        <div className="w-full px-[15px] max-md:mt-2 sm:px-[20px] lg:px-[12%]">
          <p className=" text-lg  text-themeWhite">Riad60 | Qbexel</p>
          <p className=" text-lg text-themeDarkshade">
            Copyright © 2024. All rights reserved.
          </p>
          <GoToTopButton />
        </div>
      </div>
    </div>
  );
}

export default Footer;
