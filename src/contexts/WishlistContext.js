import React, { createContext, useContext, useState } from "react";
import { AuthContext } from './AuthContext';
import AWS from '../data/aws-config';
import uuid from 'uuid';



const WishlistContext = createContext();


const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useContext(AuthContext);

  const [wishlistQuantity, setWishlistQuantity] = useState([]);
  const AWS = require("../data/aws-config");
  let docClient = new AWS.DynamoDB.DocumentClient();

  const AddToWishlist = async (product) => {
    const params = {
      TableName: 'Wishlist',
      FilterExpression: 'userId = :userId',
      ExpressionAttributeValues: {
        ':userId': user.sub
      }
    };

    const uuid = require('uuid');

    const productData = {
      id: uuid.v4(),
      userId: user.sub,
      productId: product.id,
      productName: product.name,
      productPrice: product.price
    }

    const result = await docClient.scan(params).promise();
    const items = result.Items;

    //Filter the results to find items with the desired productId
    const existingProduct = items.find(item => item.productId === product.id);


    if(existingProduct) {
      console.log("Product already exits in wishlist.");
    } else {
      // Add to wishlist
      const addItemParams = {
        TableName: 'Wishlist',
        Item: productData
      };

      await docClient.put(addItemParams).promise();
      console.log('Product added to wishlist.');

    }
  }

  const getWishlistItems = async (userId) => {
    try {
      const params = {
        TableName: 'Wishlist',
        FilterExpression: 'userId = :userId',
        ExpressionAttributeValues: {
          ':userId': userId
        }
      };

      const result = await docClient.scan(params).promise();
      const items = result.Items;

      console.log("Items retrieved from wishlist:", items);
      return items;
    } catch (error) {
      console.error("Error retrieving wishlist items:", error);
      return [];
    }
  }


  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((product) => product.id !== productId),
    );
  };



  const productQuantity = (productId, newQuantity) => {
    setWishlist((prevWishlist) =>
      prevWishlist.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product,
      ),
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        AddToWishlist,
        getWishlistItems,
        removeFromWishlist,
        productQuantity,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistContext, WishlistProvider };
