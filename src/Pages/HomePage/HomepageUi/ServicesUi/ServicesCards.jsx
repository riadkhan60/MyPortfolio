function ServicesCards() {
  return (
    <div>
      <ul className=" flex flex-col gap-5">
        <li className="about-line relative">
          <div className=" flex justify-between gap-5 bg-backgroundColorSecondary px-[40px] py-[43px] max-md:flex-col">
            <div className=" flex-[3]">
              <h2 className=" mb-[17px] text-3xl  text-white">
                AI Strategy & Implementation
              </h2>
              <p className=" text-lg text-themeDarkshade">
                I help organizations integrate AI into their business processes
                through strategic planning, LLM implementation, and custom AI
                solutions. From proof of concept to enterprise deployment,
                driving measurable ROI.
              </p>
            </div>
            <div className="flex flex-[1] flex-col  items-center   gap-3 border-l border-white/10 max-md:flex-row max-md:border-none md:justify-center">
              <p className="text-lg text-themeDarkshade">Engagement</p>
              <h4 className=" text-3xl font-medium  text-subtitleColor max-md:text-2xl">
                Enterprise
              </h4>
            </div>
          </div>
        </li>
        <li className="about-line relative">
          <div className=" flex justify-between gap-5 bg-backgroundColorSecondary px-[40px] py-[43px] max-md:flex-col">
            <div className=" flex-[3]">
              <h2 className=" mb-[17px] text-3xl  text-white">
                Product Architecture & Development
              </h2>
              <p className=" text-lg text-themeDarkshade">
                Full-stack product development with scalable architecture
                design. I build enterprise-grade applications using modern tech
                stacks, focusing on performance, security, and user experience
                at scale.
              </p>
            </div>
            <div className=" flex flex-[1]  flex-col items-center gap-3 border-l border-white/10 max-md:flex-row  max-md:border-none md:justify-center">
              <p className="text-lg text-themeDarkshade">Level</p>
              <h4 className=" text-3xl font-medium  text-subtitleColor max-md:text-2xl">
                Premium
              </h4>
            </div>
          </div>
        </li>
        <li className="about-line relative">
          <div className=" flex justify-between gap-5 bg-backgroundColorSecondary px-[40px] py-[43px] max-md:flex-col">
            <div className=" flex-[3]">
              <h2 className=" mb-[17px] text-3xl  text-white">
                Technical Leadership & Consulting
              </h2>
              <p className=" text-lg text-themeDarkshade">
                Strategic technical guidance for startups and enterprises. From
                technology roadmaps to team scaling strategies, I provide the
                expertise to navigate complex technical decisions and drive
                innovation.
              </p>
            </div>
            <div className=" flex flex-[1]  flex-col items-center gap-3 border-l border-white/10 max-md:flex-row  max-md:border-none md:justify-center">
              <p className="text-lg text-themeDarkshade">Approach</p>
              <h4 className=" text-3xl font-medium  text-subtitleColor max-md:text-2xl">
                Strategic
              </h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ServicesCards;
