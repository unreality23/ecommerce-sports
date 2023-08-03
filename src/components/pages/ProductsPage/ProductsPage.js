import React, { Suspense, useState } from "react";
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
        <LazyComponent
          viewProductsPerPage={4}
          showProductList={true}
          listType="Products"
        />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
