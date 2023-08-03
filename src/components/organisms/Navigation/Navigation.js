import React, { useContext } from "react";
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
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { CartContext } from "../../../contexts/CartContext";

library.add(faMagnifyingGlass, faUser, faShoppingBasket);
const Navigation = () => {
  const { cartQuantity, handleCartToggle } = useContext(CartContext);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Categories", link: "/categories" },
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
      link: "/account",
      extraClass: "hover:opacity-70",
      iconPrefix: "fa",
    },
    {
      iconType: "basket-shopping",
      link: "/",
      extraClass: "hover:opacity-70",
      iconPrefix: "fa",
      hoverFunction: handleCartToggle,
      textPrefix: cartQuantity,
    },
  ];

  return (
    <nav className="m-6  mx-auto flex w-full max-w-7xl items-center desktop:justify-between desktop:px-8">
      <Logo
        image="/logo/vita-force-transparent.png"
        title="Sports - Staying Healthy"
        link="/"
        className="left-0 order-2 desktop:order-none"
        classNameImg="group-[.active]:w-24 w-40"
      />
      <div className="item-center order-1 mx-3 flex w-auto desktop:order-none desktop:flex-grow">
        <Menu menuItems={menuItems} />
      </div>
      <div className="relative order-3 flex hidden flex-wrap items-center px-3 desktop:order-none desktop:block">
        <IconMenu iconTypes={accountMenuItems} />
        <ShoppingCart />
      </div>
    </nav>
  );
};

export default Navigation;
