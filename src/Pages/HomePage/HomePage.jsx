import ModalProvider from "../../contexts/PortfolioModalContext/ModalProvider";
import MenuLayout from "../../features/DrawerMenu/MenuLayout";
import PortfolioModal from "../../features/PortfolioModal/PortfolioModal";
import Profile from "./HomepageUi/Profile";
import About from "./Sections/About";
import BlogsSection from "./Sections/BlogsSection";
import Home from "./Sections/Home";
import Portfolios from "./Sections/Portfolios";



function HomePage() {
  return (
    <ModalProvider>
      <div className=" h-full w-[100%] transition-all duration-0 ease-in-out max-lg:block">
        <Profile />
        <div id="content" className="lg:w-[56%]">
          <Home />
          <About />
          <Portfolios />
          <BlogsSection />
        </div>
        <MenuLayout />
        <PortfolioModal />
      </div>
    </ModalProvider>
  );
}

export default HomePage;
