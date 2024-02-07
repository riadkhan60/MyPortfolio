import NavItem from "./NavItem";

function NavList({ navList }) {
  return (
    <nav>
      <h3 className=" mb-[26px] text-lg font-extrabold uppercase text-themeDarkshade">
        Menu
      </h3>
      <ul>
        {navList.map((nav) => (
          <NavItem element={nav} key={nav} />
        ))}
      </ul>
    </nav>
  );
}

export default NavList;
