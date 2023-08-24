import React from "react";
// import  { useState, useRef, useEffect } from "react";
import "./darkModeButton.css";
// import { MdLightMode, MdDarkMode } from "react-icons/md";

// const Mode = {
//   light: <MdLightMode />,
//   dark: <MdDarkMode />,
// };

const DarkModeToggle = ({ isToggled, onToggle }) => {
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleRef = useRef(null);
  // const toggleMode = () => {
  //   setDarkMode(!darkMode);
  // };

  // useEffect(() => {
  //   // const toggleDark = toggleRef.current;
  //   if (darkMode) {
  //   }
  // }, [darkMode]);

  return (
    <div>helo</div>
    // <div className="dark-mode-container">
    //   <button
    //     className={`toggle-btn light-btn ${darkMode ? "dark-mode" : null}`}
    //     onClick={toggleMode}
    //   >
    //     <MdLightMode />
    //     <p>Light</p>
    //   </button>
    //   <button
    //     className={`toggle-btn light-btn ${darkMode ? null : "dark-mode"}`}
    //     onClick={toggleMode}
    //   >
    //     <MdDarkMode />
    //     <p>Dark</p>
    //   </button>
    // </div>
  );
};

export default DarkModeToggle;
