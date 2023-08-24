import React, { createContext, useContext, useState } from "react";
import { AuthContext } from './AuthContext';
import Product from "../components/organisms/Product/Product";

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

  const fetchAllProducts = async () => {
    let docClient = new AWS.DynamoDB.DocumentClient();
    let params = {
      TableName: "Products",
    };

    return new Promise((resolve, reject) => {
      docClient.scan(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Items);
        }
      });
    });
  };

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
      const wishlistItems  = result.Items;

      const allProducts = await fetchAllProducts();


      const productInWishList = wishlistItems.map(item => {
            return allProducts.find(product => product.id === item.productId);
      });

      console.log("Items retrieved from wishlist:", productInWishList);
      return productInWishList;
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
        wishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistContext, WishlistProvider };
