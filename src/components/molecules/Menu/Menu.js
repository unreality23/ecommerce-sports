import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import IconMenu from "../IconMenu/IconMenu";

const Menu = ({ menuItems }) => {
  const [isActive, setActive] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const toggleClass = () => {
    updateMenuHeight();
    setActive(!isActive);
  };

  const updateMenuHeight = () => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      const newMenuHeight = headerElement.clientHeight;
      setMenuHeight(newMenuHeight);
    }
  };



  useEffect(() => {

    if (isActive) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    updateMenuHeight();

    window.addEventListener("resize", updateMenuHeight);

    return () => {
      window.removeEventListener("resize", updateMenuHeight);
    };
  }, [isActive]);

  const menuStyle = {
    top: `${menuHeight}px`,
  };

  const mobileMenuHeight = {
    height: `calc(100vh - ${menuHeight}px)`,
  }

  const accountMenuItems = [
    {
      iconType: "user",
      link: "/",
      extraClass: "hover:opacity-70",
      iconPrefix: "fa",
      text: "Log In",
    },
    {
      iconType: "basket-shopping",
      link: "/",
      extraClass: "hover:opacity-70",
      iconPrefix: "fa",
      text: "Basket",
    },
  ];

  const socials = [
    {
      iconType: "facebook",
      link: "https://www.facebook.com",
      extraClass: "hover:text-facebook",
      iconPrefix: "fab",
    },
    {
      iconType: "twitter",
      link: "https://www.twitter.com",
      extraClass: "hover:text-twitter",
      iconPrefix: "fab",
    },
    {
      iconType: "instagram",
      link: "https://www.instagram.com",
      extraClass: "hover:text-instagram",
      iconPrefix: "fab",
    },
  ];

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
          <span className="[&>svg]:w-5 ">
            {!isActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                className="icon icon-hamburger"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
                  fill="currentColor"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                className="icon icon-close"
                fill="none"
                viewBox="0 0 18 17"
              >
                <path
                  d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                  fill="currentColor"
                ></path>
              </svg>
            )}
          </span>
        </button>
      </div>
      <div
        className={`
        ${!isActive ? "-translate-x-full" : "translate-x-0"}
        !visible absolute -mx-3 w-4/6 grow  basis-[100%] items-center border-r bg-white transition-transform 
        duration-300 desktop:relative desktop:!top-0 desktop:!flex desktop:basis-auto desktop:translate-x-0 
        desktop:border-r-0  desktop:duration-0 
         `}
        style={{
          ...(window.innerWidth <= 1024 ? { ...mobileMenuHeight, ...menuStyle } : {}),
        }}
        id="navbarSupportedContentY"
        data-te-collapse-item
      >
        <ul className="menu  desktop:flex desktop:gap-x-0">
          {menuItems.map(({ link, label }, index) => (
            <li
              key={index}
              className="px-5 py-2 transition duration-300 ease-in-out hover:bg-gray-nurse hover:desktop:bg-white desktop:mb-0 desktop:pr-2"
              data-te-nav-item-ref
            >
              <NavLink
                className="relative block transform-gpu ease-in-out hover:border-black
                            hover:text-timber-green focus:text-timber-green disabled:text-black dark:hover:text-timber-green dark:focus:text-timber-green
                            desktop:mx-2 desktop:py-2 desktop:before:absolute desktop:before:bottom-0
                            desktop:before:left-0 desktop:before:h-0.5 desktop:before:w-full

                            desktop:before:origin-bottom-right desktop:before:scale-x-0 desktop:before:bg-timber-green
                            desktop:before:transition-transform desktop:before:duration-150 desktop:before:content-[''] desktop:before:hover:origin-bottom-left
                            desktop:before:hover:scale-x-100 [&.active]:text-black"
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

        <div className="visible fixed bottom-0 w-full bg-gray-nurse p-5 desktop:hidden">
          <IconMenu
            iconTypes={accountMenuItems}
            classNameProp="flex-col gap-y-2 font-regular"
          />
          <IconMenu iconTypes={socials} classNameProp="flex-row gap-x-4 pt-5" />
        </div>
      </div>
    </>
  );
};

export default Menu;
