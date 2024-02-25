import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { createContext, useContext, useRef, useState } from "react";

const Context = createContext();

function AboutDetails({ children }) {
  const [activeTab, setActiveTab] = useState("Experiences");
  return (
    <Context.Provider value={{ activeTab, setActiveTab }}>
      <div className=" mb-52">
      {children}
      </div>
    </Context.Provider>
  );
}

function TabHeader({ lists }) {
  return (
    <div>
      <ul className="flex flex-wrap gap-4 mb-[40px]">
        {lists.map((list, index, arr) => (
          <TabItem key={list} name={list} index={index} arr={arr} />
        ))}
      </ul>
    </div>
  );
}

function TabItem({ name, index, arr }) {
  const { activeTab, setActiveTab } = useContext(Context);
  return (
    <li className={`flex  cursor-pointer items-center gap-4`}>
      <a
        className={`${activeTab === name ? " border-b border-subtitleColor text-subtitleColor" : "text-themeDarkshade "} text-3xl  `}
        onClick={() => setActiveTab(name)}
      >
        {name}
      </a>
      {arr.length - 1 !== index && (
        <span className="mt-1 block h-[2px] w-10 bg-borderColor"></span>
      )}
    </li>
  );
}

function TabContent({ children, title }) {
  const ref = useRef(null);
  const { activeTab } = useContext(Context);
  
  useGSAP(() => {
    if (activeTab !== title) return null;
    gsap.from(ref.current, {
      opacity: 0,
      rotationX: "-10deg",
      rotationY: "30deg",
      duration: 1,
     
    })
  },{dependencies: [activeTab]})
  
  if (activeTab !== title) return null;
  return <div className=" w-full" ref={ref}>{children}</div>;
}

AboutDetails.TabHeader = TabHeader;
AboutDetails.TabContent = TabContent;
export default AboutDetails;
