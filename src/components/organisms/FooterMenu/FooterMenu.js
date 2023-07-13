import React from 'react';

const FooterMenu = () => {


    const menuSectionTitle = [
        {label: 'Our Shop', size: 5},
        {label: 'Help', size: 4},
        {label: 'About Us', size: 2},
    ]

    const numOfUl = menuSectionTitle.length;

    const menuItems = [
        {label: 'All Products', link: '#'},
        {label: 'The Weekend Boot', link: '#'},
        {label: 'The Winter Weekend Boot Z', link: '#'},
        {label: 'The Terrus', link: '#'},
        {label: 'Accessories', link: '#'},
        {label: 'Size guide', link: '/terms'},
        {label: 'Shipping Information', link: '/terms'},
        {label: 'Refund Policy', link: '/terms'},
        {label: 'FAQ', link: '/terms'},
        {label: 'Values', link: '/terms'},
        {label: 'Contact Us', link: '/terms'},
    ]

    return (
        <div className="flex lg:flex-1">
            {[...Array(numOfUl)].map((_, index) => {
                const cumulativeSize = menuSectionTitle
                    .slice(0, index)
                    .reduce((total, section) => total + section.size, 0);

                return (
                    <ul key={index} className="menu pr-10">
                        {menuSectionTitle[index] && (
                            <div className="menu-title font-bold pb-3" key={index}>{menuSectionTitle[index].label}</div>
                        )}

                        {menuItems
                            .slice(cumulativeSize, cumulativeSize + menuSectionTitle[index].size)
                            .map(({label, link}, i) => (
                                <li key={i} className="pb-3 hover:underline">
                                    <a href={link}>{label}</a>
                                </li>
                            ))}
                    </ul>
                );
            })}
        </div>

    );
};

export default FooterMenu;