import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },

    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center w-full h-15 sm:h-20 text-white bg-black fixed px-4 z-50">
        <div>
          <h1 className="text-2xl sm:text-5xl font-signature py-2 ml-4">
            Baik
          </h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-110 duration-300 hover:bg-white hover:text-black rounded ml-2 hover:font-bold"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="cursor-pointer pr-4 z-10 text-white md:hidden"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200">
            {links.map((link) => (
              <li
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                key={link.id}
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link.link}
                  smooth
                  duration={500}
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
