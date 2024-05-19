function AboutTableItem({ title, value, type = "label", link }) {
  return (
    <tr>
      <th className=" pb-[9px] pr-[10px] pt-[9px] text-[18px] font-medium uppercase text-[#888]">
        {title}
      </th>
      <th className="  pb-[9px] pr-[10px] pt-[9px] text-[18px] font-normal text-[#ddd]">
        {type === "label" ? value : <a className=" break-words cursor-pointer hover:border-borderColorHover border-b border-borderColor" href={link}>{value}</a>}
      </th>
    </tr>
  );
}

export default AboutTableItem;
