import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links, socials } from "./../data";
import logo from "./../icon.png";
import { useGlobalContext } from "../context";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { toggleSidebar } = useGlobalContext();

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
          <button className="toggleBtn menu" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <Sidebar />
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
