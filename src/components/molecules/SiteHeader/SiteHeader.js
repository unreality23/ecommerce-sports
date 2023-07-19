import React from "react";
import Button from "../../atoms/Button/Button";

const SiteHeader = ({ headerText, disabledButton }) => {
  const handleClick = () => {};

  return (
    <div className="mt-auto">
      <p>{headerText}</p>
      {!disabledButton && (
        <Button
          text="Ok"
          buttonClassName="main-button text-9xl"
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default SiteHeader;
