import React from "react";
import FooterMenu from "../FooterMenu/FooterMenu";
import Logo from "../../atoms/Logo/Logo";
import Menu from "../../molecules/Menu/Menu";
import Social from "../../atoms/Social/Social";

const Footer = () => {
    return (
        <footer className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 w-full">
            <Logo image="/logo/sports-low-resolution-logo-white-on-black-background.png"
                  title="Sports - Staying Healthy"
                  link="/"
                  classNameImg="h-24"/>
            <FooterMenu/>
        </footer>
    )
}

export default Footer;