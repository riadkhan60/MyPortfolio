import { Outlet } from "react-router-dom";

import useScrollAnimation from "./hooks/useScrollAnimation";
import MenuProvider from "./contexts/MenuContext/MenuProvider";

function AppLayout() {
  useScrollAnimation();

  return (
    <MenuProvider>
      <Outlet />
    </MenuProvider>
  );
}

export default AppLayout;
