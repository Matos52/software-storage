import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ to, title, darkNavbar }) => {
  return (
    <Link to={to} className="group relative">
      <span
        className={`group-hover:text-gray-300 ${darkNavbar ? "group-hover:text-gray-700" : "group-hover:text-gray-100"}`}
      >
        {title}
      </span>
      <span
        className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${darkNavbar ? "bg-gray-800" : "bg-white"}`}
      ></span>
    </Link>
  );
};

export default NavbarItem;