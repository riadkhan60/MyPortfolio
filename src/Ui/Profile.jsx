import TypeWrite from "./TypeWrite";

function Profile() {
  return (
    <div className="  border-l border-[#ffffff33] transition-all duration-500 ease-in-out lg:fixed lg:bottom-0 lg:right-0 lg:top-0 lg:min-h-[100vh] lg:w-[44%]">
      <div className=" relative h-full w-[100%] px-[16%] py-[100px] max-lg:px-[5%]">
        <div className="relative z-50 mb-[30px] w-[100%] px-[41px] py-[38px]">
          <div className="border-borderColor absolute bottom-[20px] left-0 right-0 top-[20px] border transition-all duration-500 ease-in-out"></div>
          <div className="border-borderColor absolute bottom-0 left-[20px] right-[20px] top-0 border transition-all duration-500 ease-in-out"></div>
          <img
            className=" from-borderColor z-50 w-[484px] min-w-full bg-gradient-to-r"
            src="./Profile3.png"
            alt=""
          />

          <TypeWrite />
        </div>
      </div>
    </div>
  );
}

export default Profile;
