import React from "react";

const TextField = ({
                     name,
                     label,
                     type = "text",
                     value,
                     updateValue,
                     isItImportant,
                     isButton,
                   }) => {
  const capitalizeFirstLetter = label && label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <>
      {label && <label htmlFor={name} className="flex">
        {capitalizeFirstLetter}
        {isItImportant && <div className="text-red pl-1">*</div>}
      </label>}
      <input
        type={type}
        value={value}
        onChange={updateValue}
        placeholder={label && capitalizeFirstLetter}
        className={`form-control border-gray-nurse hover:border-timber-green
        focus:border-timber-green active:border-timber-green h-10 w-full
        border-2 pl-2 mb-3 transition-all 
        ${isButton && "cursor-pointer bg-timber-green text-white " +
        "border-timber-green hover:border-timber-green-light hover:bg-timber-green-light"}`}
        name={name}
      />
    </>
  );
};

export default TextField;
