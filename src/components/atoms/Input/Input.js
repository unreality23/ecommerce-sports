import React from "react";
const Input = ({
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder,
  name,
  isButton,
}) => {
  return (
    <input
      type={type}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      className={`form-control mb-3 h-10
        w-full border-2 border-gray-nurse pl-2
        transition-all hover:border-timber-green focus:border-timber-green active:border-timber-green 
        ${
          isButton &&
          "cursor-pointer bg-timber-green text-white " +
            "border-timber-green hover:border-timber-green-light hover:bg-timber-green-light"
        }`}
      name={name}
    />
  );
};

export default Input;
