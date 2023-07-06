import React from 'react';

const Navigation = () => {
    const menuItems = [
        { label: 'Home', link: '/'},
        { label: 'Products', link: '/products'},
    ]
    return (
        <nav>
            <div className="logo">
                <p>Logo</p>
            </div>
            <ul className="menu">
                {menuItems.map(({link, label}, index) => (
                    <li key={index}>
                        <a href={link}>{label}</a>
                    </li>
                ))}
            </ul>
            <div className="search-bar">
                <p>Search</p>
            </div>
        </nav>
    )
}

export default Navigation;