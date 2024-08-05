import React from "react";
import NavbarLink from "./NavbarLink";

//dodaj link za login i tailwind za navbar

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between">
        <div className="flex justify-around gap-4">
          <NavbarLink to="/" name="Home" />
          <NavbarLink to="/admin" name="Admin Page" />
        </div>
        <div className="flex justify-around gap-4">
          <NavbarLink to="/" name="Log in" />
          <NavbarLink to="/admin" name="Sign up" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
