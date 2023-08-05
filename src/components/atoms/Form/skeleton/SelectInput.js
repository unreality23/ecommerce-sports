import React from "react";

const SelectInput = ({
  name,
  label,
  modelValue,
  updateModelValue,
  options,
  placeholder = "Select options",
  isItImportant,
}) => {
  const capitalizeFirstLetter = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <>
      <label htmlFor={name} className="flex">
        {capitalizeFirstLetter}
        {isItImportant && <div className="text-red pl-1">*</div>}
      </label>
      <select
        name={name}
        value={modelValue}
        onChange={(e) => updateModelValue(e.target.value)}
        className="form-control border-gray-400 hover:border-timber-green focus:border-timber-green active:border-timber-green h-10 w-full border
        pl-2 transition-all duration-500"
      >
        <option disabled={!modelValue} value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectInput;
