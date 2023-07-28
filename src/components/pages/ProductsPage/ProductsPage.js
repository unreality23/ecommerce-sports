import React, { Suspense, useState } from "react";
import Button from "../../atoms/Button/Button";
import Product from "../../organisms/Product/Product";
const LazyComponent = React.lazy(() =>
  import("../../organisms/Product/Product"),
);

const Placeholder = () => {
  return <div>Loading...</div>;
};

const ProductsPage = () => {
  return (
    <div className="sm:px-6 mx-auto mt-10 max-w-7xl px-4 ">
      <Suspense fallback={<Placeholder />}>
        <Product
          viewProductsPerPage={4}
          showProductList={true}
          listType="/products/"
        />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
