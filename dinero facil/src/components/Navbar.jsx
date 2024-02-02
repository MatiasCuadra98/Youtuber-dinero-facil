import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [hoveredLink, setHoveredLink] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleLinkClick = (title) => {
    setActive(title); // Cambia el estado activo al título del enlace clicado
    setHoveredLink(""); // Reinicia el estado de hover al hacer clic
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer relative ${
              active === nav.title ? "text-blue-200" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onMouseEnter={() => setHoveredLink(nav.title)}
            onMouseLeave={() => setHoveredLink("")}
            onClick={() => handleLinkClick(nav.title)} // Maneja el clic en el enlace
          >
            <a
              href={`#${nav.id}`}
              className={`group transition-all duration-500 ${
                hoveredLink === nav.title ? "scale-105" : ""
              }`}
            >
              {nav.title}
              {hoveredLink === nav.title && (
                <span className="absolute inset-0 bg-blue-300 opacity-50 rounded-full filter blur-xl" />
              )}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer relative ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => handleLinkClick(nav.title)} // Maneja el clic en el enlace
              >
                <a
                  href={`#${nav.id}`}
                  className={`group transition-all duration-500 ${
                    hoveredLink === nav.title ? "scale-105" : ""
                  }`}
                >
                  {nav.title}
                  {hoveredLink === nav.title && (
                    <span className="absolute inset-0 bg-blue-500 opacity-50 rounded-full filter blur-xl" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
