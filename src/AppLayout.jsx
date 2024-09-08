import { Outlet } from "react-router-dom";

import useScrollAnimation from "./hooks/useScrollAnimation";
import MenuProvider from "./contexts/MenuContext/MenuProvider";
import Footer from "./features/Footer/Footer";

function AppLayout() {
  useScrollAnimation();

  return (
    <MenuProvider>
      <Outlet />
      <Footer />
    </MenuProvider>
  );
}

export default AppLayout;
