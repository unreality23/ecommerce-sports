import React from 'react';

const FooterMenu = () => {
    const menuItems = [
        { label: 'About Us', link: '/about'},
        { label: 'Faq', link: '/faq'},
        { label: 'Terms & Conditions', link: '/terms'},
    ]
    return (
        <div>
            <ul className="menu">
                {menuItems.map(({link, label}, index) => (
                    <li key={index}>
                        <a href={link}>{label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterMenu;