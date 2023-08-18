import React, { useContext, useState, useCallback } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import TextField from "../../molecules/TextField/TextField";
import SelectField from "../../molecules/SelectField/SelectField";
import {
  validateField,
  validate,
} from "../../../utils/validation/validationFunctions";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signUp } = useContext(AuthContext);
  const [signInError, setSignInError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      important: true
    },
    {
      name: "confirmEmail",
      label: "Confirm Email",
      type: "email",
      important: true,
    },
    {
      name: "name",
      label: "Full Name",
      type: "text",
      important: true
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      important: true
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      important: true,
    },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: [
        { value: "male", text: "Male" },
        { value: "female", text: "Female" },
        { value: "other", text: "Other" },
      ],
      important: true,
    },
    {
      name: "phoneNumber",
      label: "Mobile Number",
      type: "tel",
      important: true,
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      important: true
    },
    {
      name: "dob",
      label: "Date of Birth",
      type: "date",
      important: true
    },
  ];

  const [formState, setFormState] = useState({
    errors: {
      name: null,
      password: null,
      confirmPassword: null,
      email: null,
      confirmEmail: null,
      gender: null,
      dob: null,
      phoneNumber: null,
      address: null,
    },
    touched: {
      name: false,
      password: false,
      confirmPassword: false,
      email: false,
      confirmEmail: false,
      gender: false,
      dob: false,
      phoneNumber: false,
      address: false,
    },
    formData: {
      name: "",
      password: "",
      confirmPassword: "",
      email: "",
      confirmEmail: "",
      gender: "",
      dob: "",
      phoneNumber: "",
      address: "",
    },
  });

  const handleLogInSubmit = (event) => {
    event.preventDefault();
    signIn(email, password)
      .then((data) => console.log(data))
      .catch((error) => {
        if (error.code === "UserNotConfirmedException") {
          const message =
            error.message +
            " Please check your email for confirmation, and try again.";
          setSignInError(message);
        } else {
          setSignInError(error.message);
        }
      });
  };

  const handleFormState = useCallback((object, name, value, newErrors = null) => {
    setFormState((prevState) => ({
      ...prevState,
      [object]: {
        ...prevState[object],
        ...(name ? { [name]: value } : newErrors),
      },
    }));
  }, []);

  const handleRegistrationInputChange = useCallback((e) => {
    const { name, value } = e.target;
    handleFormState("formData", name, value);
  }, [handleFormState]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    handleFormState("touched", name, value);

    const newErrors = validateField(name, formState.formData);

    handleFormState("errors", null, null, newErrors);
  }, [formState.formData, handleFormState]);


  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newErrors = validate(formState.formData, formState.errors);

    // Update error state here
    setFormState((prevState) => ({
      ...prevState,
      errors: newErrors,
    }));

    const allErrorsAreNull = Object.values(newErrors).every(
      (value) => value === null,
    );

    if (allErrorsAreNull) {
      signUp(
        formState.formData.name,
        formState.formData.password,
        formState.formData.email,
        formState.formData.gender,
        formState.formData.dob,
        formState.formData.phoneNumber,
        formState.formData.address,
      )
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }
  };

  const renderFields = fields.map((field) => {
    const { name, type, label, options } = field;
    const errorCondition = formState.touched[name] || isSubmitting;
    const errorMessage = errorCondition ? formState.errors[name] : "";

    if (type === "select") {
      return (
        <SelectField
          key={name}
          name={name}
          label={label}
          value={formState.formData[name]}
          updateValue={handleRegistrationInputChange}
          onBlur={handleBlur}
          isItImportant={field.important}
          options={options}
          error={errorMessage}
        />
      );
    } else {
      return (
        <TextField
          key={name}
          name={name}
          label={label}
          type={type}
          value={formState.formData[name]}
          updateValue={handleRegistrationInputChange}
          onBlur={handleBlur}
          isItImportant={field.important}
          error={errorMessage}
        />
      );
    }
  });

  return (
    <div className="my-10 flex flex-col desktop:flex-row">
      <div className="sign-in h-height flex w-full items-center justify-center desktop:w-3/6">
        <div className="mx-auto w-3/6">
          <h1 className="my-7 text-xl font-bold">
            If you part of us already, Sign In here
          </h1>
          {signInError && <p className="text-red">{signInError}</p>}
          <form onSubmit={handleLogInSubmit} className="flex flex-col">
            <TextField
              name="email"
              label="Email"
              type="email"
              value={email}
              updateValue={(e) => setEmail(e.target.value)}
              isItImportant={true}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              value={password}
              updateValue={(e) => setPassword(e.target.value)}
              isItImportant={true}
            />
            <TextField
              name="submit"
              type="submit"
              value="Sign In"
              isButton={true}
            />
          </form>
        </div>
      </div>
      <div className="sign-up w-full desktop:w-3/6">
        <div className="mx-auto w-3/6">
          <h1 className="my-7 text-xl font-bold">
            Haven't Sign Up with us yet? Sign up Now!
          </h1>
          <form
            onSubmit={handleRegistrationSubmit}
            className="flex flex-col"
            noValidate
          >
            {renderFields}
            <TextField
              name="submit"
              type="submit"
              value="Sign Up"
              isButton={true}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
