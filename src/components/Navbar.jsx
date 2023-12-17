import React from "react";
import myLogo from "../assets/images/myLogoWhite.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-3 px-4 shadow-sm text-white fixed top-0 z-10">
      <Link to={"/"}>
        <img src={myLogo} alt="my logo" className="w-24 object-contain" />
      </Link>
      <div className="flex items-center gap-2">
        <Link to={"/contacts"} className="font-semibold hover:scale-110 transition text-lg">Contatti</Link>
        <Link to={'/'} className="font-semibold hover:scale-110 transition text-lg">Progetti</Link>
      </div>
    </nav>
  );
};

export default Navbar;
