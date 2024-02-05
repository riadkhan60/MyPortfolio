
import Home from "./Sections/Home";
import Profile from "./Ui/Profile";
import useScrollAnimation from "./hooks/useScrollAnimation";

function App() {
  useScrollAnimation();

  return (
    <div className=" h-full w-[100%] transition-all duration-0 ease-in-out max-lg:block">
      <Profile />
      <div id="content" className="lg:w-[56%]">
        <Home />
        <Home />
      </div>
    </div>
  );
}

export default App;
