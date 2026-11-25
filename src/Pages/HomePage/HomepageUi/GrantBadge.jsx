// A grant badge in the same look as qbexel.com's: a white tile, the company's own mark in black,
// a divider, then what the grant is. Qbexel-made, not an official badge from the company.
function GrantBadge({ mark, name, lines }) {
  return (
    <span className="inline-flex items-center rounded-[10px] bg-white p-[5px]">
      <span
        role="img"
        aria-label={`${name} ${lines.join(" ")}`}
        className="flex h-[32px] items-center gap-[9px] border border-black px-[10px] text-black"
      >
        <span className="flex items-center gap-[6px] whitespace-nowrap text-[13px] font-semibold leading-none tracking-tight">
          <img src={mark} alt="" className="h-[12px] w-auto" />
          {name}
        </span>
        <span aria-hidden className="h-[24px] w-px shrink-0 bg-black" />
        <span className="flex flex-col whitespace-nowrap text-[9px] font-medium uppercase leading-[1.2] tracking-wide">
          <span>{lines[0]}</span>
          <span>{lines[1]}</span>
        </span>
      </span>
    </span>
  );
}

export default GrantBadge;
