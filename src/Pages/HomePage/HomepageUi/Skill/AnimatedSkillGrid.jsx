import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function AnimatedSkillGrid({ skills, category = "skill" }) {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        direction: "0.1",
      },
    });

    // Replicating the exact original animation sequence:
    // 1->2->3, then 6->5->4, then 7->8->9, then 12->11->10

    // Position 1
    if (skills.length >= 1 && skills[0]) {
      tl.from(`.${category}-logo-1`, {
        scale: 0.1,
        opacity: 0,
        delay: 0.4,
      });
    }

    // 1 -> 2
    if (skills.length >= 2 && skills[1]) {
      tl.to(`.${category}-lineOne`, {
        opacity: 1,
        duration: 0.1,
        width: "200px",
      }).from(`.${category}-logo-2`, {
        scale: 0.1,
        opacity: 0,
      });
    }

    // 2 -> 3
    if (skills.length >= 3 && skills[2]) {
      tl.to(`.${category}-lineOne`, {
        opacity: 1,
        duration: 0.1,
        width: "360px",
      }).from(`.${category}-logo-3`, {
        scale: 0.1,
        opacity: 0,
      });
    }

    // 3 -> 6
    if (skills.length >= 6 && skills[5]) {
      tl.to(`.${category}-lineTwo`, {
        opacity: 1,
        duration: 0.1,
        height: "100px",
      }).from(`.${category}-logo-6`, {
        scale: 0.1,
        opacity: 0,
      });
    }

    // 6 -> 5
    if (skills.length >= 5 && skills[4]) {
      tl.to(`.${category}-lineThree`, {
        opacity: 1,
        duration: 0.1,
        width: "200px",
      }).from(`.${category}-logo-5`, {
        scale: 0.1,
        opacity: 0,
      });
    }

    // 5 -> 4
    if (skills.length >= 4 && skills[3]) {
      tl.to(`.${category}-lineThree`, {
        opacity: 1,
        duration: 0.1,
        width: "400px",
      }).from(`.${category}-logo-4`, {
        scale: 0.1,
        opacity: 0,
      });
    }

    // 4 -> 7
    if (skills.length >= 7 && skills[6]) {
      tl.to(`.${category}-lineFour`, {
        opacity: 1,
        duration: 0.1,
        height: "100px",
      }).from(`.${category}-logo-7`, {
        scale: 0.1,
        opacity: 0,
      });
    }

    // 7 -> 8
    if (skills.length >= 8 && skills[7]) {
      tl.to(`.${category}-lineFive`, {
        opacity: 1,
        duration: 0.1,
        width: "200px",
      }).from(`.${category}-logo-8`, {
        scale: 0.1,
        opacity: 0,
      });
    }

    // 8 -> 9
    if (skills.length >= 9 && skills[8]) {
      tl.to(`.${category}-lineFive`, {
        opacity: 1,
        duration: 0.1,
        width: "380px",
      }).from(`.${category}-logo-9`, {
        scale: 0.1,
        opacity: 0,
      });
    }

    // 9 -> 12
    if (skills.length >= 12 && skills[11]) {
      tl.to(`.${category}-lineSix`, {
        opacity: 1,
        duration: 0.1,
        height: "100px",
      }).from(`.${category}-logo-12`, {
        scale: 0.1,
        opacity: 0,
      });
    }

    // 12 -> 11
    if (skills.length >= 11 && skills[10]) {
      tl.to(`.${category}-lineSeven`, {
        opacity: 1,
        duration: 0.1,
        width: "200px",
      }).from(`.${category}-logo-11`, {
        scale: 0.1,
        opacity: 0,
      });
    }

    // 11 -> 10
    if (skills.length >= 10 && skills[9]) {
      tl.to(`.${category}-lineSeven`, {
        opacity: 1,
        duration: 0.2,
        width: "400px",
      }).from(`.${category}-logo-10`, {
        scale: 0.1,
        opacity: 0,
      });
    }
  }, [skills, category]);

  return (
    <div className="relative order-2 lg:min-w-[500px] xl:order-1">
      <div className="after:absolute after:left-0 after:top-[50%] after:h-[100%] after:w-[1px] after:translate-y-[-50%] after:bg-subtitleColor">
        <div className="ml-2 grid max-w-[500px] grid-cols-3 flex-wrap content-center items-center justify-items-center gap-2">
          {skills.map((SkillComponent, index) => {
            const logoNum = index + 1;

            if (!SkillComponent) {
              return <div key={index} className="h-[80px] w-[80px]" />; // Placeholder for empty slots
            }

            return (
              <div key={index} className="relative">
                {/* Lines based on the original hardcoded structure */}
                {logoNum === 1 && (
                  <div
                    className={`${category}-lineOne absolute left-[30px] top-[50%] z-[-1] h-[2px] w-[0px] bg-subtitleColor opacity-0 max-md:hidden`}
                  ></div>
                )}
                {logoNum === 3 && (
                  <div
                    className={`${category}-lineTwo absolute right-[50%] top-[50%] z-[-1] h-[0px] w-[2px] translate-x-[-50%] bg-subtitleColor opacity-0 max-md:hidden`}
                  ></div>
                )}
                {logoNum === 4 && (
                  <div
                    className={`${category}-lineFour absolute right-[50%] top-[50%] z-[-1] h-[0px] w-[2px] translate-x-[-50%] bg-subtitleColor opacity-0 max-md:hidden`}
                  ></div>
                )}
                {logoNum === 6 && (
                  <div
                    className={`${category}-lineThree absolute right-[10px] top-[50%] z-[-1] h-[2px] w-[0px] bg-subtitleColor opacity-0 max-md:hidden`}
                  ></div>
                )}
                {logoNum === 7 && (
                  <div
                    className={`${category}-lineFive absolute left-[30px] top-[50%] z-[-1] h-[2px] w-[0px] bg-subtitleColor opacity-0 max-md:hidden`}
                  ></div>
                )}
                {logoNum === 9 && (
                  <div
                    className={`${category}-lineSix absolute right-[50%] top-[50%] z-[-1] h-[0px] w-[2px] translate-x-[-50%] bg-subtitleColor opacity-0 max-md:hidden`}
                  ></div>
                )}
                {logoNum === 12 && (
                  <div
                    className={`${category}-lineSeven absolute right-[10px] top-[50%] z-[-1] h-[2px] w-[0px] bg-subtitleColor opacity-0 max-md:hidden`}
                  ></div>
                )}

                <div className={`${category}-logo-${logoNum}`}>
                  <SkillComponent />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AnimatedSkillGrid;
