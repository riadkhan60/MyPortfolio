import About from "./Sections/About";
import Home from "./Sections/Home";
import Portfolios from "./Sections/Portfolios";
import Profile from "./Ui/Profile";
import MenuProvider from "./contexts/MenuProvider";
import MenuLayout from "./features/DrawerMenu/MenuLayout";
import useScrollAnimation from "./hooks/useScrollAnimation";

function App() {
  useScrollAnimation();

  return (
    <MenuProvider>
      <div className=" h-full w-[100%] transition-all duration-0 ease-in-out max-lg:block">
        <Profile />
        <div id="content" className="lg:w-[56%]">
          <Home />
          <About />
          <Portfolios/>
        </div>
        <MenuLayout />
      </div>
    </MenuProvider>
  );
}

export default App;
