import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ to, title }) => {
  return (
    <Link to={to} className="group relative">
      <span className="transition-colors duration-300 group-hover:text-gray-300">
        {title}
      </span>
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default NavbarItem;
