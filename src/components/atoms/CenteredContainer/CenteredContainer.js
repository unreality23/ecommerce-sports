import React from "react";

const CenteredContainer = ({ children }) => {
  return (
    <div className="sm:px-6 mx-auto mt-10 max-w-7xl px-4 desktop:px-8 ">
      {children}
    </div>
  );
};

export default CenteredContainer;
