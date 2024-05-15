import { HiBars3 } from "react-icons/hi2";
import useMenuContext from "../../contexts/useMenuContext";

function NavMenu() {
  const { onOpenMenu } = useMenuContext();
  return (
    <div onClick={onOpenMenu}  className="absolute max-lg:fixed z-40 cursor-pointer top-4 right-3 lg:top-[38px] gap-3 flex items-center justify-center lg:right-[50px]">
      <span className=" cursor-pointer leading-none text-lg text-themeWhite">Menu</span>
      <span className=" cursor-pointer text-[28px] text-themeWhite">
        <HiBars3 />
      </span>
    </div>
  );
}

export default NavMenu;
