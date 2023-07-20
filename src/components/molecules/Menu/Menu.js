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
          className="hover:text-pink-300 border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150
                        ease-in-out  focus:text-timber-green dark:hover:text-timber-green
                        dark:focus:text-timber-green desktop:hidden"
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
        } !visible grow basis-[100%] items-center desktop:!flex desktop:basis-auto`}
        id="navbarSupportedContentY"
        data-te-collapse-item
      >
        <ul className="menu desktop:flex desktop:gap-x-0">
          {menuItems.map(({ link, label }, index) => (
            <li
              key={index}
              className="mb-4 desktop:mb-0 desktop:pr-2"
              data-te-nav-item-ref
            >
              <NavLink
                className="relative block transform-gpu ease-in-out before:absolute
                            before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-bottom-right
                            before:scale-x-0 before:bg-timber-green before:transition-transform before:duration-150
                            before:content-[''] hover:border-black hover:text-timber-green
                            before:hover:origin-bottom-left before:hover:scale-x-100 focus:text-timber-green disabled:text-black
                            dark:hover:text-timber-green dark:focus:text-timber-green desktop:mx-2 desktop:py-2 [&.active]:text-black"
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
