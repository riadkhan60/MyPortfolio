import { useRef, useState } from "react";
import BlogsItem from "./BlogsItem";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function BlogsList() {
  const ref = useRef(null);
  const [showFullList, setFullList] = useState(false);
  useGSAP(() => {
    gsap.from(".blogs-item", {
      opacity: 0,
      stagger: 0.2,
      duration: 0.3,
      y: 50,
      ease: "power3.out",
      delay: 0,
    })

    gsap.from(".blogs-button", {
      opacity: 0,
      duration: 0.3,
     
      ease: "power3.out",
      delay: 0.3,
    })
  },{scope: ref.current, dependencies: [showFullList]})

  return (
    <div ref={ref} className="">
      <div className="  grid gap-[50px] max-lg:gap-6 sm:grid-cols-2">
        {Array.from({ length: showFullList ? 6 : 2 }).map((_, index) => (
          <BlogsItem key={index}  />
        ))}
      </div>
      <button
        onClick={() => setFullList((prev) => !prev)}
        className=" blogs-button mb-5 mt-10 block w-full border-2 border-borderColor py-4 text-xl font-medium uppercase text-subtitleColor hover:border-borderColorHover"
      >
        {showFullList ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default BlogsList;
