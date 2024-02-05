import { useEffect } from "react";

function useScrollAnimation(className="scrolled") {
  useEffect(() => {
    function handleAnimation() {
      if (window.scrollY > 100) document.body.classList.add(className);
      if (window.scrollY < 100) document.body.classList.remove(className);
    }

    window.addEventListener("scroll", handleAnimation);
    return () => window.removeEventListener("scroll", handleAnimation);
  }, [className]);
}

export default useScrollAnimation;
