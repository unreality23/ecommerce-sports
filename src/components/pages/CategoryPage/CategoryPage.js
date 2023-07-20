import React, { Suspense, useState } from "react";
import Button from "../../atoms/Button/Button";
const LazyComponent = React.lazy(() =>
  import("../../organisms/Product/Product"),
);

const Placeholder = () => {
  return <div>Loading...</div>;
};

const CategoryPage = () => {
  const [showLazyComponent, setShowLazyComponent] = useState(false);

  const handleButtonClick = () => {
    setShowLazyComponent(true);
  };

  return (
    <>
      <Button onClick={handleButtonClick} text="Load Lazy Component" />
      <Suspense fallback={<Placeholder />}>
        {showLazyComponent && (
          <LazyComponent
            imgSrc="/products/shoe-1.jpg"
            imgAlt="alt image"
            labelText="
                dsfsdfsdfdsfs dsfsdfsdfdsfs dsfsdfsdfdsfsvdsfsdfsdfdsfs
                dsfsdfsdfdsfs dsfsdfsdfdsfs dsfsdfsdfdsfsvdsfsdfsdfdsfs dsfsdfsdfdsfs
                dsfsdfsdfdsfs dsfsdfsdfdsfsvdsfsdfsdfdsfs                 dsfsdfsdfdsfs dsfsdfsdfdsfs dsfsdfsdfdsfsvdsfsdfsdfdsfs
                dsfsdfsdfdsfs dsfsdfsdfdsfs dsfsdfsdfdsfsvdsfsdfsdfdsfs dsfsdfsdfdsfs
                dsfsdfsdfdsfs dsf
                "
          />
        )}
      </Suspense>
    </>
  );
};

export default CategoryPage;
