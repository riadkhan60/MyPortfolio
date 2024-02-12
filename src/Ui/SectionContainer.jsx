function SectionContainer({ children }) {
  return (
    <div className=" flex lg:min-h-dvh items-center">
      <div className="px-[15px] max-md:mt-2 sm:px-[20px] lg:px-[12%]">{children}</div>
    </div>
  );
}

export default SectionContainer;
