import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = ({ menuItems }) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="flex items-center">
        <button
          className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out
                        hover:text-pink-300  focus:text-pink-300 dark:hover:text-pink-300
                        dark:focus:text-pink-300 lg:hidden"
          type="button"
          onClick={toggleClass}
          data-te-collapse-init
          data-te-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
        </button>
      </div>
      <div
        className={`${
          !isActive && "hidden"
        } !visible grow basis-[100%] items-center lg:!flex lg:basis-auto`}
        id="navbarSupportedContentY"
        data-te-collapse-item
      >
        <ul className="menu lg:flex lg:gap-x-12">
          {menuItems.map(({ link, label }, index) => (
            <li
              key={index}
              className="mb-4 lg:mb-0 lg:pr-2"
              data-te-nav-item-ref
            >
              <NavLink
                className="block transition duration-150 ease-in-out hover:text-neutral-700
                            focus:text-neutral-700 disabled:text-black/30 dark:hover:text-red-300
                            dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                to={link}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
