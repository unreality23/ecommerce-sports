import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { CartContext } from "../../../contexts/CartContext"; // Adjust the import path according to your project structure

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const { signUp } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const phoneNumberPattern = new RegExp(/^\+44[7][0-9]{9}$/);
    if (!phoneNumberPattern.test(phoneNumber)) {
      console.error("Invalid phone number format");
      return;
    }
    signUp(username, name, password, email, gender, dob, phoneNumber, address)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Full name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Gender:
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </label>
      <label>
        Mobile Number:
        <input
          type="text"
          pattern="^\+44[7][0-9]{9}$"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <input type="submit" value="Sign Up" />
    </form>
  );
};

export default SignUpPage;
