import React from "react";

const Menu = ({ menuItems }) => {
    return (
        <div className="w-4/6">
            <ul className="menu lg:flex lg:gap-x-12">
                {menuItems.map(({link, label}, index) => (
                    <li key={index}>
                        <a href={link}>{label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;