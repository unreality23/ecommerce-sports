import React from "react";
import Logo from "../../atoms/Logo/Logo";
import Menu from "../../molecules/Menu/Menu";
import "./Navigation.css";
import "tailwindcss/tailwind.css";
import IconMenu from "../../molecules/IconMenu/IconMenu";

//font awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faUser,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass, faUser, faShoppingBasket);
const Navigation = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Bestsellers", link: "/bestsellers" },
    { label: "New In", link: "/new-in" },
    { label: "Shop All", link: "/shop-all" },
    { label: "Sale", link: "/sale" },
  ];

  const accountMenuItems = [
    {
      iconType: "magnifying-glass",
      link: "/",
      extraClass: "hover:opacity-70",
      iconPrefix: "fa",
    },
    {
      iconType: "user",
      link: "/",
      extraClass: "hover:opacity-70",
      iconPrefix: "fa",
    },
    {
      iconType: "basket-shopping",
      link: "/",
      extraClass: "hover:opacity-70",
      iconPrefix: "fa",
    },
  ];

  return (
    <nav className="m-6  mx-auto flex w-full max-w-7xl items-center justify-between desktop:px-8">
      <Logo
        image="/logo/sports-low-resolution-logo-white-on-black-background.png"
        title="Sports - Staying Healthy"
        link="/"
        className="hidden desktop:flex"
        classNameImg="group-[.active]:w-24 w-40"
      />
      <div className="mx-3 flex  w-full flex-wrap items-center justify-between justify-between">
        <Menu menuItems={menuItems} />
      </div>
      <div className="flex hidden flex-wrap items-center justify-between px-3 desktop:block">
        <IconMenu iconTypes={accountMenuItems} />
      </div>
    </nav>
  );
};

export default Navigation;
