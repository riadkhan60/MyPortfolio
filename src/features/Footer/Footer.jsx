import GoToTopButton from "./GoToTopButton";

function Footer() {
  return (
    <div className=" relative flex items-center  border-t border-white/20 py-[62px] ">
      <div className="  w-full ">
        <div className="w-full px-[15px] max-md:mt-2 sm:px-[20px] lg:px-[12%]">
          <p className=" text-lg  text-themeWhite">Riad60 | Qbexel</p>
          <p className=" text-lg text-themeDarkshade">
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </p>
          {/* NVIDIA's required legal line: the site names NVIDIA and shows the NVIDIA Inception badge. */}
          <p className=" mt-3 max-w-[720px] text-[13px] leading-[1.5] text-themeDarkshade">
            © {new Date().getFullYear()} NVIDIA, the NVIDIA logo, and NVIDIA
            Inception are trademarks and/or registered trademarks of NVIDIA
            Corporation in the U.S. and other countries.
          </p>
          <GoToTopButton />
        </div>
      </div>
    </div>
  );
}

export default Footer;
