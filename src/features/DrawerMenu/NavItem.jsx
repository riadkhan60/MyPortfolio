import { NavLink, useNavigate } from "react-router-dom";
import useMenuContext from "../../contexts/MenuContext/useMenuContext";

function NavItem({ element }) {
   const {onCloseMenu } = useMenuContext();
  const navigate = useNavigate();

  function returnHomeFunc() {
    onCloseMenu();
    navigate("/");
  }
  if (element === "Blogs" || element === "Home")
    return (
      <li className=" menuItem mb-[10px]">
        <NavLink
          onClick={returnHomeFunc}
          to={`/${element.toLowerCase()}`}
          className=" text-3xl font-normal leading-[1.3] text-[#ddd] max-sm:text-xl"
        >
          {element}
        </NavLink>
      </li>
    );

  return (
    <li className=" menuItem mb-[10px]">
      <a
        onClick={returnHomeFunc}
        className=" text-3xl font-normal leading-[1.3] text-[#ddd] max-sm:text-xl"
        href={`#${element.toLowerCase()}`}
      >
        {element}
      </a>
    </li>
  );
}

export default NavItem;
