import React from "react";
import { capitalizeFirstLetter } from "../../../utils/utils";

const Label = ({ name, label, isImportant }) => {
  return (
    <label htmlFor={name} className="flex">
      {label}
      {isImportant && <div className="pl-1 text-red">*</div>}
    </label>
  );
};

export default Label;
