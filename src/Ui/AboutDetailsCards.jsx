function AboutDetailsCards({ items, render }) {
  return <ul className=" flex flex-col  gap-5">{items.map(render)}</ul>;
}

export function AboutDetailsCard({ item }) {
  return (
    <li className="about-line relative">
      <div className=" bg-backgroundColorSecondary px-[40px] py-[43px]">
        <div className=" mb-[14px] flex items-center  gap-5">
          <h4 className=" text-lg font-normal uppercase text-white ">
            {item.subTitle || ""}
          </h4>{" "}
          <span className=" text-themeDarkshade">{item.date || ""}</span>{" "}
        </div>
        <h2 className=" mb-[17px] text-3xl  text-white">{item.title || ""}</h2>
        <p className=" text-lg text-themeDarkshade">{item.description || ""}</p>
      </div>
    </li>
  );
}

export default AboutDetailsCards;
