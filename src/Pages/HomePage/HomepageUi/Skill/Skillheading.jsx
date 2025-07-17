export default function Skillheading({ title, description }) {
  return (
    <div className="order-1 h-auto xl:order-2 xl:h-[500px] xl:bg-backgroundColorSecondary">
      <div className="relative">
        <div className="my-[30px] max-md:my-[20px] xl:bg-backgroundColorSecondary xl:px-[40px] xl:py-[43px]">
          <div className="mb-[14px] flex items-center gap-5">
            <h4 className="text-lg font-normal uppercase text-white">
              {title}
            </h4>
          </div>
          <p className="text-lg text-themeDarkshade max-md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
