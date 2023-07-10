import React from 'react';

const Logo = ({className, title, image, link}) => {
    return (
            <div className="flex lg:flex-1">
                <a href={link} className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-36 w-auto" src={image} alt={title} />
                </a>
            </div>
    )
}

export default Logo;