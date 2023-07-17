import React from 'react';
import Logo from "../../atoms/Logo/Logo";
import Menu from "../../molecules/Menu/Menu";
import "./Navigation.css";
import 'tailwindcss/tailwind.css';
import IconMenu from "../../molecules/IconMenu/IconMenu";

//font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faUser, faShoppingBasket   } from '@fortawesome/free-solid-svg-icons';
library.add(faMagnifyingGlass, faUser, faShoppingBasket );
const Navigation = () => {
    const menuItems = [
        {label: 'Home', link: '/'},
        {label: 'Products', link: '/products'},
        {label: 'Bestsellers', link: '/bestsellers'},
        {label: 'New In', link: '/new-in'},
        {label: 'Shop All', link: '/shop-all'},
        {label: 'Sale', link: '/sale'},
    ]

    const accountMenuItems = [
        { iconType: 'magnifying-glass', link: '/', color: 'hover:text-blue-600', iconPrefix: 'fa'},
        { iconType: 'user', link: '/', color: 'hover:text-blue-400', iconPrefix: 'fa'},
        { iconType: 'basket-shopping', link: '/', color: 'hover:text-pink-500', iconPrefix: 'fa'},
    ]

    return (
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 w-full">

            <Logo image="/logo/sports-low-resolution-logo-white-on-black-background.png"
                  title="Sports - Staying Healthy"
                  link="/"
                  className="hidden lg:flex"
                  classNameImg="w-40"/>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <Menu menuItems={menuItems}/>
            </div>
            <div className="flex flex-wrap items-center justify-between px-3">
                <IconMenu iconTypes={accountMenuItems} />
            </div>

        </nav>
    )
}

export default Navigation;