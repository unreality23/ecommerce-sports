import React from "react";
import "./Button.css";

const Button = ({ text, onClick, buttonClassName, disabled }) => {
  return (
    <button
      className={`button rounded-3xl bg-timber-green text-white hover:opacity-70 ${buttonClassName}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
