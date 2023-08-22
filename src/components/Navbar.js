import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links, socials } from "./../data";
import logo from "./../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        {/* header */}
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="btn-container">
            <button>
              <FaBars />
            </button>
            <button>dark mode button</button>
          </div>
        </div>

        {/* links container */}
        <div className="link-container">
          <ul className="links">
            {links.map((link) => {
              const { url, text } = link;
              return <Link to={`${url}`}>{text}</Link>;
            })}
          </ul>
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
      </div>
    </nav>
  );
};

export default Navbar;
