import React, {useEffect, useState} from 'react';

const FooterMenu = () => {
    const menuItems = [
        {label: 'About Us', link: '/about'},
        {label: 'Faq', link: '/faq'},
        {label: 'Terms & Conditions', link: '/terms'},
        {label: 'Terms & Conditions', link: '/terms'},
        {label: 'Terms & Conditions', link: '/terms'},
        {label: 'Terms & Conditions', link: '/terms'},
        {label: 'Terms & Conditions', link: '/terms'},
        {label: 'Terms & Conditions', link: '/terms'},
        {label: 'Terms & Conditions', link: '/terms'},
        {label: 'Terms & Conditions', link: '/terms'},
        {label: 'Terms & Conditions', link: '/terms'},
        {label: 'Terms & Conditions', link: '/terms'},
        {label: 'Terms & Conditions', link: '/terms'},
        {label: 'Terms & Conditions', link: '/terms'},
        {label: 'Terms & Conditions', link: '/terms'},
        {label: 'Terms & Conditions', link: '/terms'},
    ]

    const numOfUl = Math.ceil(menuItems.length / 3);

    return (
        <div>
            {[...Array(numOfUl)].map((_, index) => (
                <ul key={index} className="menu">
                    {menuItems
                        .slice(index * 3, (index + 1) * 3)
                        .map(({label, link}, i) => (
                            <li key={i}>
                                <a href={link}>{label}</a>
                            </li>
                        ))}
                </ul>
            ))}
        </div>

    );
};

export default FooterMenu;