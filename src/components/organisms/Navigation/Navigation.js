import React from 'react';
import Social from "../../atoms/Social/Social";
import Logo from "../../atoms/Logo/Logo";

const Navigation = () => {
    const menuItems = [
        { label: 'Home', link: '/'},
        { label: 'Products', link: '/products'},
    ]
    return (
        <nav>
            <div className="top">
                <Logo image="/logo/sports-low-resolution-logo-black-on-white-background.png" title="Sports - Staying Healthy" link="/" className="header-logo" />
                <Social />
                <div className="search-bar">
                    <p>Search</p>
                </div>
            </div>

            <ul className="menu">
                {menuItems.map(({link, label}, index) => (
                    <li key={index}>
                        <a href={link}>{label}</a>
                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default Navigation;