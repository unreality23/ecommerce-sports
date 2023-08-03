import React, { useState } from "react";

const RadioInput = ({
  name,
  price,
  value,
  descriptionShort = "",
  description = "",
  deliveryDay,
  title = "",
  paymentRadio = false,
  radioType = 1,
  img = "img/404.png",
  selectedFormValue = "",
}) => {
  const [selected, setSelected] = useState(selectedFormValue);

  const handleInputChange = (event) => {
    setSelected(event.target.value);
  };

  const radioInputOne = (
    <label className="mb-4 flex flex-col" htmlFor={value}>
      <div className="top-del flex text-sm">
        <div className="block w-2/12 font-semibold">{price}</div>
        <div className="text-gray-500">{descriptionShort}</div>
      </div>
      <div className="bottom-del mt-1 flex pl-24 text-sm">
        <div className="flex w-full flex-col pr-8">
          <div className="text-gray-400">{deliveryDay}</div>
          {value === selected && (
            <div className="hiddenDescription mt-4 flex text-xs text-black">
              <i className="fas fa-info-circle pr-2 text-lg"></i> {description}
            </div>
          )}
        </div>
        <input
          type="radio"
          className="form-control mr-2 mt-1 h-7 w-1/4 self-center transition-all"
          name={name}
          id={value}
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </label>
  );

  return <>{radioType === 1 && radioInputOne}</>;
};

export default RadioInput;
