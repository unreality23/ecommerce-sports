import { validationRules } from "./validationRules";

export const validateField = (field, formData) => {
  let newErrors = {};

  if (validationRules[field].required && formData[field].trim() === "") {
    newErrors[field] = `${(field.charAt(0).toUpperCase() + field.slice(1))
      .replace(/([A-Z])/g, " $1")
      .trim()} field can't be empty`;
  } else if (
    validationRules[field].pattern &&
    !validationRules[field].pattern.test(formData[field])
  ) {
    newErrors[field] = `Invalid ${field}`;
  } else {
    newErrors[field] = null;
  }

  if (
    validationRules[field].required &&
    formData[field].trim() === "" &&
    field === "gender"
  ) {
    newErrors[field] = `${(field.charAt(0).toUpperCase() + field.slice(1))
      .replace(/([A-Z])/g, " $1")
      .trim()} must be selected`;
  }

  if (
    validationRules[field].required &&
    formData[field].trim() === "" &&
    field === "dob"
  ) {
    newErrors[field] = "Date must be selected";
  }

  if (
    field === "dob" &&
    validationRules[field].validate &&
    !validationRules[field].validate(formData[field]) &&
    formData[field].trim() !== ""
  ) {
    console.log("test: " + validationRules["dob"].validate);
    newErrors[field] = "You must be at least 18.";
  }

  if (
    field === "password" &&
    validationRules[field].pattern &&
    !validationRules[field].pattern.test(formData[field]) &&
    formData[field].trim() !== ""
  ) {
    newErrors.password =
      "Password must contain at least 1 number, 1 special character, 1 uppercase letter, and 1 lowercase letter.";
  }

  if (
    field === "email" &&
    validationRules[field].pattern &&
    !validationRules[field].pattern.test(formData[field]) &&
    formData[field].trim() !== ""
  ) {
    newErrors.email =
      "Email is not valid. Should be similar to 'company@example.com'.";
  }

  if (
    field === "phoneNumber" &&
    validationRules[field].pattern &&
    !validationRules[field].pattern.test(formData[field]) &&
    formData[field].trim() !== ""
  ) {
    newErrors.phoneNumber =
      "Phone number is invalid it must be Uk number for example: +447455910384";
  }

  if (
    field === "confirmPassword" &&
    formData.confirmPassword !== formData.password &&
    formData[field].trim() !== ""
  ) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  if (field === "confirmEmail" && formData.confirmEmail !== formData.email) {
    newErrors.confirmEmail = "Emails do not match";
  }

  return newErrors;
};

export const validate = (formData, errors) => {
  let newErrors = { ...errors };

  Object.keys(validationRules).forEach((field) => {
    newErrors = { ...newErrors, ...validateField(field, formData) };
  });
  // setErrors(newErrors);
  return newErrors;
};
