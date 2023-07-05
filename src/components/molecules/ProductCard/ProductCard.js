import React from 'react';

const ProductCard = ({ image, title, price, rating }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{price}</p>
            <div className="rating">{rating}</div>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;