function ServicesCards() {
  return (
    <div>
      <ul className=" flex flex-col gap-5">
        <li className="about-line relative">
          <div className=" flex justify-between gap-5 bg-backgroundColorSecondary px-[40px] py-[43px] max-md:flex-col">
            <div className=" flex-[3]">
              <h2 className=" mb-[17px] text-3xl  text-white">
                Web Development
              </h2>
              <p className=" text-lg text-themeDarkshade">
                I build all types of websites, including portfolios, e-commerce
                platforms, and more.
              </p>
            </div>
            <div className="flex flex-[1] flex-col  items-center   gap-3 border-l border-white/10 max-md:flex-row max-md:border-none md:justify-center">
              <p className="text-lg text-themeDarkshade">Strats from</p>
              <h4 className=" text-3xl font-medium  text-subtitleColor max-md:text-2xl">
                $150
              </h4>
            </div>
          </div>
        </li>
        <li className="about-line relative">
          <div className=" flex justify-between gap-5 bg-backgroundColorSecondary px-[40px] py-[43px] max-md:flex-col">
            <div className=" flex-[3]">
              <h2 className=" mb-[17px] text-3xl  text-white">UI/UX Design</h2>
              <p className=" text-lg text-themeDarkshade">
                With a keen eye for detail, I craft intuitive and visually
                appealing UI/UX designs that enhance user experience and drive
                engagement.
              </p>
            </div>
            <div className=" flex flex-[1]  flex-col items-center gap-3 border-l border-white/10 max-md:flex-row  max-md:border-none md:justify-center">
              <p className="text-lg text-themeDarkshade">Strats from</p>
              <h4 className=" text-3xl font-medium  text-subtitleColor max-md:text-2xl">
                $180
              </h4>
            </div>
          </div>
        </li>
        <li className="about-line relative">
          <div className=" flex justify-between gap-5 bg-backgroundColorSecondary px-[40px] py-[43px] max-md:flex-col">
            <div className=" flex-[3]">
              <h2 className=" mb-[17px] text-3xl  text-white">
                Qbexel Service
              </h2>
              <p className=" text-lg text-themeDarkshade">
                Qbexel is a full-service digital agency that provides digital
                services, like website development, UI/UX design, and digital
                marketing, cyber security, and more.
              </p>
            </div>
            <div className=" flex flex-[1]  flex-col items-center gap-3 border-l border-white/10 max-md:flex-row  max-md:border-none md:justify-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://qbexel.com/"
                className="  border-b border-borderColor px-5 py-2 text-sm font-medium text-subtitleColor"
              >
                <img
                  className="w-[100px] max-md:w-[70px]"
                  src="/LogoDark.png"
                  alt="qbexel"
                />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ServicesCards;
