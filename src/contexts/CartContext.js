import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [cartQuantity, setCartQuantity] = useState([]);

  useEffect(() => {
   const totalQuantity = cart.reduce((accumulator, product) => accumulator + product.quantity, 0)
    setCartQuantity(totalQuantity);
  }, [cart]);


  useEffect(() => {
    const loadCart = JSON.parse(localStorage.getItem("cart"));
    if (loadCart) {
      setCart(loadCart);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("cart", JSON.stringify(cart));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart]);

  const addToCart = (product) => {
    let productExists = false;

    let updatedCart = cart.map((item) => {
      if(item.id === product.id) {
        productExists = true;
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    });

    if(!productExists) {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    setIsOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  const handleCartToggle = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }

  const productQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId ?
          {...product, quantity: newQuantity} :
          product
      )
    )
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotalPrice, handleCartToggle,productQuantity, cartQuantity, isOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
