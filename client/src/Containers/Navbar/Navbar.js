import React from "react";
import "./Navbar.css";
import logo from "./CaferoCreativeLogo.png";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Logo" width="300" height="auto" />
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <a href="App">
          <Logo />
        </a>
      </div>
      <div className="NavbarMenu">
        <div className="NavBarItem">
          <a href="#work">
            <li>Work</li>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
