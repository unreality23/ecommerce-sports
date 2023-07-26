import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = JSON.parse(localStorage.getItem("cart"));
    if (loadCart) {
      setCart(loadCart);
    }
  }, []);

  useEffect(() => {
    // Add event listener to save cart to localStorage before the page is unloaded
    const handleBeforeUnload = () => {
      localStorage.setItem("cart", JSON.stringify(cart));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Clean up by removing the event listener when the component unmounts
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart]);

  const addToCart = (product) => {
    // If the product does not exist in the cart, add it with a quantity of 1
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  const changeQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product,
      ),
    );
  };

  const removeFromCart = (productId) => {
    console.log("Removing product with ID:", productId);
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId),
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, changeQuantity, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
