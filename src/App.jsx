import Home from "./Sections/Home";
import Profile from "./Ui/Profile";

function App() {
  return (
    <div className=" h-full w-[100%] max-lg:block">
      <Profile />
      <div className=" lg:w-[56%]">
        <Home />
      </div>
    </div>
  );
}

export default App;
