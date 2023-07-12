import React from 'react';
import Social from "../../atoms/Social/Social";
import Logo from "../../atoms/Logo/Logo";
import Menu from "../../molecules/Menu/Menu";
import "./Navigation.css";
import 'tailwindcss/tailwind.css';
const Navigation = () => {
    const menuItems = [
        {label: 'Home', link: '/'},
        {label: 'Products', link: '/products'},
    ]
    return (
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 w-full">

            <Logo image="/logo/sports-low-resolution-logo-white-on-black-background.png"
                  title="Sports - Staying Healthy"
                  link="/"
                  classNameImg="h-36"/>
            <Menu menuItems={menuItems}/>
            <Social/>


        </nav>
    )
}

export default Navigation;