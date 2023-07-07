import React from 'react';

const Logo = ({className, title, image, link}) => {
    return (
        <>
            <div className={`logo ${className}`}>
                <a href={link}><img src={image} alt={title}/></a>
            </div>
        </>
    )
}

export default Logo;