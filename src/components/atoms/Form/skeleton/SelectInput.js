import React from 'react';

const SelectInput = ({ name, label, modelValue, updateModelValue, options, placeholder = 'Select options' }) => {
  const capitalizeFirstLetter = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <>
      <label htmlFor={name} className="flex">
        {capitalizeFirstLetter}
        <div className="text-red-600 pl-1">*</div>
      </label>
      <select
        name={name}
        value={modelValue}
        onChange={(e) => updateModelValue(e.target.value)}
        className="form-control transition-all duration-500 pl-2 w-full h-10 border border-gray-400
        hover:border-green-400 focus:border-green-400 active:border-green-400"
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
