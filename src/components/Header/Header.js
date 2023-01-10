import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const navIconHandle = () => {
    setOpenNav(!openNav);
    let selectNavIcons = document.querySelector(".nav_links");
    let windowWidth = window.matchMedia("(max-width: 800px)");

    if (!openNav) {
      selectNavIcons.style.display = "block";
    } else if (windowWidth.matches) {
      selectNavIcons.style.display = "none";
    }
  };
  return (
    <div>
      <div className="nav_icons">
        {openNav ? (
          <XMarkIcon onClick={navIconHandle} className="close_icon"></XMarkIcon>
        ) : (
          <Bars2Icon onClick={navIconHandle} className="bars_icon"></Bars2Icon>
        )}
      </div>

      <div className="header">
        <h2 className="logo">Simple React</h2>
        <div className="nav_links">
          <Link to="/shop">Shop </Link>
          <Link to="/orders">Orders </Link>
          <Link to="/about">About </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
