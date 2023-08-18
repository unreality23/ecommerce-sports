import React from "react";
import { capitalizeFirstLetter } from "../../../utils/utils";
import Label from "../../atoms/Label/Label";
import FormGroup from "../FormGroup/FormGroup";
import PropTypes from "prop-types";
import ErrorText from "../../atoms/ErrorText/ErrorText";
import Select from "../../atoms/Select/Select";

const SelectField = ({
  name,
  label,
  value,
  updateValue,
  onBlur,
  options,
  isItImportant,
  error,
}) => {
  const capitalizeTextFirstLetter = capitalizeFirstLetter(label);

  return (
    <FormGroup>
      {label && (
        <Label
          name={name}
          isImportant={isItImportant}
          label={capitalizeTextFirstLetter}
        />
      )}
      <Select
        name={name}
        value={value}
        onChange={updateValue}
        onBlur={onBlur}
        options={options}
      />
      {error && <ErrorText error={error} />}
    </FormGroup>
  );
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  isItImportant: PropTypes.bool,
  error: PropTypes.string,
};

export default SelectField;
