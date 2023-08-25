import React from "react";
import { links } from "./../data";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <ul className="links">
        {links.map((link) => {
          const { url, text } = link;
          return (
            <li>
              <Link to={`${url}`}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
