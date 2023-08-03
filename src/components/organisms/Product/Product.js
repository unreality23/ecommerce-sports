import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Button from "../../atoms/Button/Button";
import Pagination from "../../molecules/Pagination/Pagination";
import { CartContext } from "../../../contexts/CartContext";

const Product = ({ viewProductsPerPage, showProductList, listType }) => {
  const productsPerPage = viewProductsPerPage;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPaginationButtonsToShow = 5;

  const { addToCart } = useContext(CartContext);

  const [sortingOption, setSortingOption] = useState("lowest"); // Default sorting option is 'lowest'

  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    let AWS = require('../../../data/aws-config');
    let docClient = new AWS.DynamoDB.DocumentClient();

    let params = {
      TableName: listType,
    };

    docClient.scan(params, function(err, data) {
      if(err) {
        console.log("Error", err)
      } else {
        setProducts(data.Items);
        setSortedProducts(data.Items);
      }
    });

    // const axiosInstance = axios.create({
    //   baseURL: "http://localhost:5000/",
    // });
    //
    // axiosInstance
    //   .get(listType)
    //   .then((response) => {
    //     setProducts(response.data);
    //     setSortedProducts(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching products: ", error);
    //   });
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const getCurrentProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    if(viewProductsPerPage === undefined) {
      return sortedProducts;
    }
    return sortedProducts.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const sortProductsByPrice = (sortBy) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (sortBy === "lowest") {
        return a.price - b.price;
      } else if (sortBy === "highest") {
        return b.price - a.price;
      } else if (sortBy === "date") {
      }
    });

    if (sortBy === "lowest") {
      sortedProducts.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sortBy === "highest") {
      sortedProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }
    setSortingOption(sortBy);
    setSortedProducts(sortedProducts);
  };

  const handleClick = (product) => {
    addToCart(product);
  };

  return (
    <div className="flex flex-col">
      {showProductList && (
        <div className="mb-5 flex justify-between">
          <Button
            text="Lowest Price"
            buttonClassName={`mr-4 ${
              sortingOption === "lowest"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
            onClick={() => sortProductsByPrice("lowest")}
          />
          <Button
            text="Highest Price"
            buttonClassName={`${
              sortingOption === "highest"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
            onClick={() => sortProductsByPrice("highest")}
          />
        </div>
      )}
      <div className="mb-5 grid grid-cols-2 gap-6 desktop:grid-cols-4">
        {getCurrentProducts().map((product) => (
          <div
            className="product group flex flex-grow flex-col"
            key={product.id}
          >
            <a href="#">
              <div className="image-area relative overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.description}
                  className="w-full transform transition-transform duration-150 hover:scale-105"
                />
                {showProductList && (
                  <>
                    {product.labelText.length > 0 && (
                      <div className="absolute bottom-2 left-2 rounded-3xl bg-dark-gray px-4 py-1 text-sm text-red ">
                        {product.labelText}
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="info-area pt-2">
                <div className="text group flex flex-row">
                  <p
                    className={` font-medium ${
                      !showProductList
                        ? "text-base"
                        : "text-sm group-hover:underline"
                    } `}
                  >
                    {product.name}
                  </p>
                  {!showProductList && (
                    <p className="w-8 transform transition-transform duration-300 group-hover:translate-x-2">
                      <svg
                        viewBox="0 0 14 10"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                        className="icon icon-arrow pl-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793
                          5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </p>
                  )}
                </div>

                {showProductList && (
                  <>
                    {product.oldPrice && (
                      <span className="old-price pr-2 text-timber-green line-through">
                        £{product.oldPrice}
                      </span>
                    )}
                    <span className="price text-xl">£{product.price}</span>
                  </>
                )}
              </div>
            </a>
            {showProductList && (
              <div className="add-to-cart-area mt-4">
                <Button
                  text="Add To Cart"
                  buttonClassName="main-button w-full py-3"
                  onClick={() => handleClick(product)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      {showProductList && viewProductsPerPage != undefined &&
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          maxPaginationButtonsToShow={maxPaginationButtonsToShow} // Pass the prop here
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          handlePageChange={handlePageChange}
        />
      }
    </div>
  );
};

export default Product;
