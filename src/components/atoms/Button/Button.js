import React from "react";
import "./Button.css";

const Button = ({ text, onClick, buttonClassName }) => {
  return (
    <button
      className={`button bg-timber-green hover:opacity-70 ${buttonClassName}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
