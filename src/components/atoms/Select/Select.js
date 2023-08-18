import React from "react";
const Select = ({
  name,
  value,
  onChange,
  onBlur,
  options,
  placeholder = "Select options",
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="form-control form-control mb-3 h-10
        w-full border-2 border-gray-nurse pl-2
        transition-all hover:border-timber-green focus:border-timber-green active:border-timber-green "
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
  );
};

export default Select;
