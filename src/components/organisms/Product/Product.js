import React from 'react';
import Button from "../../atoms/Button/Button";

const Product = ({imgSrc, imgAlt, labelText, productTitle, oldPrice, price}) => {

    const handleClick = () => {

    };

    return (
        <div className="flex">
            <div className="image-area">
                <img src={imgSrc} alt={imgAlt} />
                {labelText && (<div className="">{labelText}</div>)}
            </div>
            <div className="info-area">
                <p>{productTitle}</p>
                <span className="old-price">{oldPrice}</span>
                <span className="price">{price}</span>
            </div>
            <div className="add-to-cart-area">
                <Button text="Ok" buttonClassName="main-button text-9xl" onClick={handleClick}/>
            </div>

        </div>
    )
}

export default Product;