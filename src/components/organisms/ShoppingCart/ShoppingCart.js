import React, { useContext, useEffect, useMemo, useState } from 'react';
import { CartContext } from "../../../contexts/CartContext";
import { useSpring, animated } from "@react-spring/web";

const ShoppingCart = () => {
  const { cart, removeFromCart, getTotalPrice, handleCartToggle, productQuantity, incrementQuantity, isOpen } = useContext(CartContext);

  const cartAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible': 'hidden',
  })

  return (
    <animated.div style={cartAnimation} >
      <div className="absolute right-3 top-7 z-50 bg-white p-4 shadow-lg w-96">
        <div className='flex flex-row justify-between'>
          <h2 className="mb-2 text-xl font-bold text-black">Shopping Cart</h2>
          <button onClick={() => handleCartToggle()}>X</button>
        </div>



        {cart.length === 0 ? (
          <p>Your cart is emptys.</p>
        ) : (
          <ul>
            {cart.map((product, index) => (
              <li
                key={`${product.id} - ${index} `}
                className="mb-2 flex items-center"
              >
                <img
                  src={product.imageUrl}
                  alt={product.description}
                  className="mr-2 h-10 w-10 object-cover"
                />
                <div className="flex-grow">
                  <p className="font-bold">{product.name}</p>
                  <p>£{product.price}</p>
                  <div className="mt-2 flex flex-row items-center">
                    <button
                      className="mr-2 text-timber-green"
                      onClick={() => productQuantity(product.id, product.quantity - 1)}
                    >
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button
                      className="ml-2 text-timber-green"
                      onClick={() => productQuantity(product.id, product.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="text-red-500"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </li>
            ))}
            <hr className="my-2" />
            <p>Total Price: £{getTotalPrice()}</p>
          </ul>
        )}
      </div>
    </animated.div>
  );
};

export default ShoppingCart;
