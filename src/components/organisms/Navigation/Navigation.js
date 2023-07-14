import React from 'react';
import Logo from "../../atoms/Logo/Logo";
import Menu from "../../molecules/Menu/Menu";
import "./Navigation.css";
import 'tailwindcss/tailwind.css';

const Navigation = () => {
    const menuItems = [
        {label: 'Home', link: '/'},
        {label: 'Products', link: '/products'},
        {label: 'Bestsellers', link: '/products'},
        {label: 'New In', link: '/products'},
        {label: 'Shop All', link: '/products'},
        {label: 'Sale', link: '/products'},
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


        </nav>
    )
}

export default Navigation;