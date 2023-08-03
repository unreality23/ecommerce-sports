import React, { Suspense, useState } from "react";
import Product from "../../organisms/Product/Product";
const LazyComponent = React.lazy(() =>
  import("../../organisms/Product/Product"),
);

const Placeholder = () => {
  return <div>Loading...</div>;
};

const CategoryPage = () => {
  return (
    <div className="sm:px-6 mx-auto mb-20 mt-10 max-w-7xl px-4">
      <Suspense fallback={<Placeholder />}>
        <Product showProductList={false} listType="Categories" />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
