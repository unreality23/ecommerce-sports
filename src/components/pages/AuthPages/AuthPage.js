import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import TextField from "../../atoms/TextField/TextField";
import SelectField from "../../atoms/SelectField/SelectField"; // Adjust the import path according to your project structure

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signUp, user } = useContext(AuthContext);
  const [signInError, setSignInError] = useState("");
  //sign up data
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    gender: "",
    dob: "",
    phoneNumber: "",
    address: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

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

  const handleRegistrationInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    const phoneNumberPattern = new RegExp(/^\+44[7][0-9]{9}$/);
    if (!phoneNumberPattern.test(formData.phoneNumber)) {
      setErrorMessage((prevErrorMessage) => {
        prevErrorMessage = "Invalid phone number format";
        return prevErrorMessage;
      });
      console.error("Invalid phone number format");
      return;
    }
    signUp(
      formData.name,
      formData.password,
      formData.email,
      formData.gender,
      formData.dob,
      formData.phoneNumber,
      formData.address,
    )
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col desktop:flex-row my-10">
      <div className="sign-in w-full desktop:w-3/6 flex justify-center items-center h-height">
        <div className='mx-auto w-3/6'>
          <h1 className="font-bold text-xl my-7">If you part of us already, Sign In here</h1>
          {signInError && <p className="text-red">{signInError}</p>}
          <form onSubmit={handleLogInSubmit} className="flex flex-col">
            <TextField
              name="email"
              label="Email"
              type="email"
              value={email}
              updateValue={(e) => setEmail(e.target.value)}
              isItImportant="true"
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              value={password}
              updateValue={(e) => setPassword(e.target.value)}
              isItImportant="true"
            />
            <TextField type="submit" value="Sign In" isButton="true" />
          </form>
        </div>

      </div>
      <div className="sign-up w-full desktop:w-3/6">
        <div className='mx-auto w-3/6'>
          <h1 className="font-bold text-xl my-7">Haven't Sign Up with us yet? Sign up Now!</h1>
          <form onSubmit={handleRegistrationSubmit} className="flex flex-col">
            <TextField
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              updateValue={handleRegistrationInputChange}
              isItImportant="true"
            />
            <TextField
              name="name"
              label="Full Name"
              value={formData.name}
              updateValue={handleRegistrationInputChange}
              isItImportant="true"
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              value={formData.password}
              updateValue={handleRegistrationInputChange}
              isItImportant="true"
            />
            <SelectField
              name="gender"
              label="Gender"
              value={formData.gender}
              updateValue={handleRegistrationInputChange}
              isItImportant="true"
              options={[
                { value: "male", text: "Male" },
                { value: "female", text: "Female" },
                { value: "other", text: "Other" },
              ]}
            />
            <TextField
              name="phoneNumber"
              label="Mobile Number"
              value={formData.phoneNumber}
              updateValue={handleRegistrationInputChange}
              isItImportant="true"
            />
            <TextField
              name="address"
              label="Address"
              value={formData.address}
              updateValue={handleRegistrationInputChange}
              isItImportant="true"
            />
            <TextField
              name="dob"
              label="Date of Birth"
              type="date"
              value={formData.dob}
              updateValue={handleRegistrationInputChange}
              isItImportant="true"
            />
            <TextField type="submit" value="Sign Up" isButton="true" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
