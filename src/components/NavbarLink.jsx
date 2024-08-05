import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ to, name }) => {
  return (
    <Link
      to={to}
      className=" text-lg font-semibold hover:text-festival-300 transition duration-300 transform hover:translate-y-1"
    >
      {name}
    </Link>
  );
};

export default NavbarLink;
