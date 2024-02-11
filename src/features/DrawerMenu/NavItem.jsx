function NavItem({element}) {
  return (
    <li className=" menuItem mb-[10px]">
      <a className=" leading-[1.3] max-sm:text-xl text-3xl font-normal text-[#ddd]" href="">{element}</a>
    </li>
  );
}

export default NavItem
