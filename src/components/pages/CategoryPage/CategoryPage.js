import React, { Suspense, useState } from "react";
import Button from "../../atoms/Button/Button";
import Product from '../../organisms/Product/Product';
const LazyComponent = React.lazy(() =>
  import("../../organisms/Product/Product"),
);

const Placeholder = () => {
  return <div>Loading...</div>;
};

const CategoryPage = () => {

  return (
    <div className="sm:px-6 mx-auto mt-10 max-w-7xl px-4 mb-20">
      <Suspense fallback={<Placeholder />}>
        <Product
          showProductList={false}
          listType="/categories/"
        />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
