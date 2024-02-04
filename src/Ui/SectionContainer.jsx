function SectionContainer({ children }) {
  return (
    <div className=" flex lg:min-h-dvh items-center">
      <div className="px-[15px] sm:px-[20px] lg:px-[12%]">{children}</div>
    </div>
  );
}

export default SectionContainer;
