import { useEffect, useRef } from "react";
import { BsArrowUp } from "react-icons/bs";

function GoToTopButton() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const currentRef = ref.current;

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    currentRef.addEventListener("click", handleClick);

    return () => {
      currentRef.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="absolute right-[50px] top-[-25px] flex h-[50px] w-[50px] items-center  justify-center rounded-full bg-[#1D1B19] md:right-[100px] md:top-[-50px] md:h-[100px] md:w-[100px]">
      <div
        ref={ref}
        className="cursor-pointer border border-[rgba(255,255,255,0.0001)] p-1  text-4xl text-white/40 transition-all duration-300 ease-in-out hover:border-[rgba(255,255,255,0.3)] max-md:text-xl"
      >
        <BsArrowUp />
      </div>
    </div>
  );
}

export default GoToTopButton;
