import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links, socials } from "./../data";
import logo from "./../icon.png";
// import DarkModeToggle from "./DarkModeButton";
// import { useState } from "react";

const Navbar = () => {
  // const [isToggled, setIsToggled] = useState(false);

  return (
    <nav className="navbar">
      {/* header */}
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* links container */}
      <div className="link-container">
        <ul className="links">
          {links.map((link) => {
            const { url, text } = link;
            return <Link to={`${url}`}>{text}</Link>;
          })}
        </ul>
        <div className="toggle-container">
          {/* <DarkModeToggle
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          /> */}
          <button className="toggleBtn menu">
            <FaBars />
          </button>
        </div>
      </div>

      {/* social-icons */}

      <ul className="socials">
        {socials.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
