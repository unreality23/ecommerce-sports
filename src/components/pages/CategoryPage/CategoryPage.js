import React, { Suspense, useState } from "react";
import Button from "../../atoms/Button/Button";
const LazyComponent = React.lazy(() =>
  import("../../organisms/Product/Product"),
);

const Placeholder = () => {
  return <div>Loading...</div>;
};

const CategoryPage = () => {
  const products = [
    {
      id: 1,
      name: "Paddle Shoe 1",
      description: "Lorem Ipsum",
      labelText: "Sale",
      oldPrice: 54.34,
      price: 25.99,
      imageUrl: "/products/product-1.jpg",
    },
    {
      id: 2,
      name: "Paddle Shoe 2",
      description: "Lorem Ipsum 2",
      labelText: "",
      price: 35.99,
      imageUrl: "/products/product-2.jpg",
    },
    {
      id: 3,
      name: "Paddle Shoe 3",
      description: "Lorem Ipsum 3",
      labelText: "",
      price: 45.99,
      imageUrl: "/products/product-3.jpg",
    },
    {
      id: 4,
      name: "Paddle Shoe 4",
      description: "Lorem Ipsum 4",
      labelText: "",
      price: 26.45,
      imageUrl: "/products/product-4.jpg",
    },
    {
      id: 5,
      name: "Paddle Shoe 5",
      description: "Lorem Ipsum 5",
      labelText: "",
      price: 28.45,
      imageUrl: "/products/product-5.jpg",
    },
    {
      id: 6,
      name: "Paddle Shoe 6",
      description: "Lorem Ipsum 6",
      labelText: "",
      price: 68.75,
      imageUrl: "/products/product-6.jpg",
    },
    {
      id: 7,
      name: "Paddle Shoe 7",
      description: "Lorem Ipsum 7",
      labelText: "",
      price: 99.99,
      imageUrl: "/products/product-7.jpg",
    },
    {
      id: 8,
      name: "Paddle Shoe 8",
      description: "Lorem Ipsum 8",
      labelText: "",
      price: 999.99,
      imageUrl: "/products/product-8.jpg",
    },
    {
      id: 9,
      name: "Paddle Shoe 9",
      description: "Lorem Ipsum 9",
      labelText: "",
      price: 125.99,
      imageUrl: "/products/product-9.jpg",
    },
    {
      id: 10,
      name: "Paddle Shoe 10",
      description: "Lorem Ipsum 10",
      labelText: "",
      price: 255.99,
      imageUrl: "/products/product-10.jpg",
    },
    {
      id: 11,
      name: "Paddle Shoe 11",
      description: "Lorem Ipsum",
      labelText: "",
      price: 455.99,
      imageUrl: "/products/product-11.jpg",
    },
    {
      id: 12,
      name: "Paddle Shoe 12",
      description: "Lorem Ipsum",
      labelText: "",
      price: 5.99,
      imageUrl: "/products/product-12.jpg",
    },
  ];

  return (
    <>
      <Suspense fallback={<Placeholder />}>
        <LazyComponent
          viewProductsPerPage={4}
          showProductList={false}
          listType="/categories/"
        />
      </Suspense>
    </>
  );
};

export default CategoryPage;
