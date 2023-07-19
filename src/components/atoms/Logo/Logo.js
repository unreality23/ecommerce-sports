import React from "react";

const Logo = ({ className, classNameImg, title, image, link }) => {
  return (
    <div className={`flex pr-6 ${className}`}>
      <a href={link} className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img className={classNameImg} src={image} alt={title} />
      </a>
    </div>
  );
};

export default Logo;
