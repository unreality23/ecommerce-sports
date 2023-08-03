import React from "react";

const TextInput = ({
  name,
  label,
  type = "text",
  modelValue,
  updateModelValue,
}) => {
  const capitalizeFirstLetter = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <>
      <label htmlFor={name} className="flex">
        {capitalizeFirstLetter}
        <div className="text-red-600 pl-1">*</div>
      </label>
      <input
        type={type}
        value={modelValue}
        onChange={(e) => updateModelValue(e.target.value)}
        placeholder={capitalizeFirstLetter}
        className="form-control border-gray-400 hover:border-green-400 focus:border-green-400 active:border-green-400 h-10 w-full border
        pl-2 transition-all"
        name={name}
      />
    </>
  );
};

export default TextInput;
