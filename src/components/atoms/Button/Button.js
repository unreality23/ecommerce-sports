import React from "react";
import "./Button.css";

const Button = ({ text, onClick, buttonClassName }) => {
  return (
    <button className={`button ${buttonClassName}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
