import { Link, NavLink, useLocation } from "react-router-dom";

import myLogo from "../assets/images/myNewLogo-removebg-preview.png";

const Navbar = () => {
  const location = useLocation();
  const shouldApplyWhiteBg =
    location.pathname === "/about" || location.pathname === "/projects";
  return (
    <nav className={`header ${shouldApplyWhiteBg && "bg-white"}`}>
      <Link to={"/"}>
        <img
          src={myLogo}
          alt="my logo"
          className="w-fit h-[5rem] object-contain"
        />
      </Link>
      <div className="flex items-center gap-4">
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `flex items-center gap-1 font-[550] hover:scale-110 transition text-lg ${
              isActive && "blue-gradient_text"
            }`
          }
        >
          <span className="material-symbols-outlined">account_circle</span>
          About
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            `flex items-center gap-1 font-[550] hover:scale-110 transition text-lg ${
              isActive && "blue-gradient_text"
            }`
          }
        >
          <span className="material-symbols-outlined">work</span>
          Projects
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
