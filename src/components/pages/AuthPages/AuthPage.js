import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext"; // Adjust the import path according to your project structure

const SignInPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

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
    authContext.signIn(email, password);
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
    // if (!phoneNumberPattern.test(formData.phoneNumber)) {
    //   setErrorMessage((prevErrorMessage) => {
    //     prevErrorMessage = "Invalid phone number format";
    //     return prevErrorMessage;
    //   });
    //   console.error("Invalid phone number format");
    //   return;
    // }
    authContext.signUp(formData.name, formData.password, formData.email, formData.gender, formData.dob, formData.phoneNumber, formData.address)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    // authContext.signUp("Test", "Galilejus26@", "tes111t@example.com", "Male", "01-01-2000", "+447455910384", "Test Address")
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));
  };

  return (
    <div className='flex flex-col desktop:flex-row'>
      <div className='sign-in w-full desktop:w-3/6'>
        <h1>If you part of us already, Sign In here</h1>
        <form onSubmit={handleLogInSubmit} className="flex flex-col">
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input type="submit" value="Log in" />
        </form>
      </div>
      <div className='sign-up border flex w-full desktop:w-3/6'>
        <h1>Haven't Sign Up with us yet? Sign up Now!</h1>
        <form onSubmit={handleRegistrationSubmit} className="flex flex-col">
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleRegistrationInputChange}
            />
          </label>
          <label>
            Full name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleRegistrationInputChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleRegistrationInputChange}
            />
          </label>
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleRegistrationInputChange}
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleRegistrationInputChange}
            />
          </label>
          <label>
            Mobile Number:
            <input
              type="text"
              pattern="^\+44[7][0-9]{9}$"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleRegistrationInputChange}
            />
            {/*{errorMessage && <div className="px-5"> {errorMessage}</div> }*/}
          </label>
          <label>
            Address:
            <input
              type="text"
              value={formData.address}
              name="address"
              onChange={handleRegistrationInputChange}
            />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </div>

    </div>

  );
};

export default SignInPage;
