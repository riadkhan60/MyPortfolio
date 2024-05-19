function SectionContainer({ children }) {
  return (
    <div className=" max-lg:mb-[150px] flex lg:min-h-dvh items-center">
      <div className="px-[15px] max-md:mt-2 w-full sm:px-[20px] lg:px-[12%]">{children}</div>
    </div>
  );
}

export default SectionContainer;
