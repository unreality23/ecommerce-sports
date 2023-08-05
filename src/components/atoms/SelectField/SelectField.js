import React from "react";

const SelectInput = ({
                       name,
                       label,
                       value,
                       updateValue,
                       options,
                       placeholder = "Select options",
                       isItImportant,
                     }) => {
  const capitalizeFirstLetter = label && label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <>
      <label htmlFor={name} className="flex">
        {capitalizeFirstLetter}
        {isItImportant && <div className="text-red pl-1">*</div>}
      </label>
      <select
        name={name}
        value={value}
        onChange={updateValue}
        className="form-control form-control border-gray-nurse hover:border-timber-green
        focus:border-timber-green active:border-timber-green h-10 w-full
        border-2 pl-2 mb-3 transition-all "
      >
        <option disabled={!value} value="">
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
