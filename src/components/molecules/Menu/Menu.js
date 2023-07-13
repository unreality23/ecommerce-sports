import React from "react";
import {NavLink} from "react-router-dom";
import "./Menu.css";

const Menu = ({menuItems}) => {
    return (
        <div className="w-4/6">
            <ul className="menu lg:flex lg:gap-x-12">
                {menuItems.map(({link, label}, index) => (
                    <li key={index}>
                        <NavLink className="hover:duration-300 hover:underline cursor-pointer"
                                 to={link}>{label}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;