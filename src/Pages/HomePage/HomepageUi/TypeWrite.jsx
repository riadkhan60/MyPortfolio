import { Cursor, useTypewriter } from "react-simple-typewriter";

function TypeWrite() {
  const [text] = useTypewriter({
    loop: {},
    words: [
      "MD Samiul Alam Khan",
      "Startup Co-founder",
      "Tech Strategist",
      "AI Solution Architect",
      "Full Stack Developer",
      "Leading Synapse Social",
    ],
    deleteSpeed: 20,
  });

  return (
    <div className=" mb-[20px] mt-[27px]">
      <h5 className="mb-2 text-center text-lg font-medium uppercase text-themeDarkshade ">
        Hi There! I am
      </h5>
      <h4 className="BRACKET relative text-center max-lg:text-2xl text-3xl text-themeWhite">
        <span className="invisible">|</span>
        <span>{text}</span>
        <span aria-hidden>
          <Cursor cursorColor="transparent"/>
        </span>
      </h4>
    </div>
  );
}

export default TypeWrite;
