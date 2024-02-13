function SectionContainer({ children }) {
  return (
    <div className=" max-md:mb-[150px] flex lg:min-h-dvh items-center">
      <div className="px-[15px] max-md:mt-2 sm:px-[20px] lg:px-[12%]">{children}</div>
    </div>
  );
}

export default SectionContainer;
