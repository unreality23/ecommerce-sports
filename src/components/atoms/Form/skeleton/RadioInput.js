import React, { useState } from "react";

const RadioInput = ({
                      name,
                      price,
                      value,
                      descriptionShort = '',
                      description = '',
                      deliveryDay,
                      title = '',
                      paymentRadio = false,
                      radioType = 1,
                      img = 'img/404.png',
                      selectedFormValue = ''
                    }) => {

  const [selected, setSelected] = useState(selectedFormValue);

  const handleInputChange = (event) => {
    setSelected(event.target.value);
  };

  const radioInputOne = (
    <label className="flex flex-col mb-4" htmlFor={value}>
      <div className="top-del flex text-sm">
        <div className="block font-semibold w-2/12">{price}</div>
        <div className="text-gray-500">{descriptionShort}</div>
      </div>
      <div className="bottom-del flex text-sm pl-24 mt-1">
        <div className="flex flex-col w-full pr-8">
          <div className="text-gray-400">{deliveryDay}</div>
          {value === selected && (
            <div className="hiddenDescription flex text-black text-xs mt-4">
              <i className="fas fa-info-circle pr-2 text-lg"></i> {description}
            </div>
          )}
        </div>
        <input
          type="radio"
          className="form-control transition-all mr-2 mt-1 self-center w-1/4 h-7"
          name={name}
          id={value}
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </label>
  );


  return (
    <>
      {radioType === 1 && radioInputOne}
    </>
  );
};

export default RadioInput;
