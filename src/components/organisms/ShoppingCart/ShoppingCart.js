import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

const ShoppingCart = () => {
  const { cart, removeFromCart, changeQuantity, getTotalPrice } =
    useContext(CartContext);

  const productQuantities = {};
  cart.forEach((product) => {
    if (product.id in productQuantities) {
      productQuantities[product.id] += 1;
    } else {
      productQuantities[product.id] = 1;
    }
  });

  // Create an array of unique products with quantities
  const uniqueProducts = Object.keys(productQuantities).map((productId) => {
    const product = cart.find((item) => item.id === parseInt(productId));
    return {
      ...product,
      quantity: productQuantities[productId],
    };
  });

  return (
    <div className="fixed right-0 top-0 z-50 bg-white p-4 shadow-lg">
      <h2 className="mb-2 text-xl font-bold text-black">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {uniqueProducts.map((product, index) => (
            <li
              key={`${product.id}-${index}`}
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
                    onClick={() =>
                      changeQuantity(product.id, product.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    className="ml-2 text-timber-green"
                    onClick={() =>
                      changeQuantity(product.id, product.quantity + 1)
                    }
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
  );
};

export default ShoppingCart;
