import React from "react";
import { capitalizeFirstLetter } from "../../../utils/utils";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import FormGroup from "../FormGroup/FormGroup";
import PropTypes from "prop-types";
import ErrorText from "../../atoms/ErrorText/ErrorText";

const TextField = ({
  name,
  label,
  type,
  value,
  updateValue,
  isItImportant,
  isButton,
  onBlur,
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
      <Input
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={updateValue}
        placeholder={label && capitalizeTextFirstLetter}
        isButton={isButton}
        name={name}
      />
      {error && <ErrorText error={error} />}
    </FormGroup>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  updateValue: PropTypes.func,
  isItImportant: PropTypes.bool,
  isButton: PropTypes.bool,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

TextField.defaultProps = {
  label: "",
  type: "text",
  isItImportant: false,
  isButton: false,
  onBlur: () => {},
};

export default TextField;
