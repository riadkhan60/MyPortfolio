import Overlay from "../../Ui/Overlay";
import useMenuContext from "../../contexts/useMenuContext";
import NavDrawer from "./NavDrawer";

function MenuLayout() {
  const { openMenu } = useMenuContext();
  if (!openMenu) return null;
  
  return (
    <>
      <Overlay />
      <NavDrawer />
    </>
  );
}

export default MenuLayout;
