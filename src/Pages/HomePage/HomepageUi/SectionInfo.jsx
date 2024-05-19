function SectionInfo({ children }) {
  return <div>{children}</div>;
}

function Title({ children }) {
  return (
    <h2 className=" leading-[1.2] text-[48px] inline-block max-md:text-[36px] top-0 left-0 relative text-themeWhite mb-[34px] pb-[15px] CUSTOME-LINE">
      {children}
    </h2>
  );
}

function Subtitle({ children }) {
  return (
    <h5 className=" tracking-[1px] font-medium mb-[54px] text-[18px] uppercase text-subtitleColor">
      {children}
    </h5>
  );
}

function Description({ children }) {
  return (
    <p className="mb-[57px] text-[30px] max-md:text-[20px] text-themeDarkshade">
      {children}
    </p>
  );
}

SectionInfo.Title = Title;
SectionInfo.Subtitle = Subtitle;
SectionInfo.Description = Description;
export default SectionInfo;
