import React, { createContext, useEffect, useState } from 'react';
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "fdsfds",
  ClientId: "sdfsd",
};

const userPool = new CognitoUserPool(poolData);

const AuthContext = createContext();



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = (email, password) => {
    const authenticationData = { Email: email, Password: password };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userData = { Email: email, Pool: userPool };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        let accessToken = result.getAccessToken().getJwtToken();
        setUser({ email, accessToken });
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        console.log('succesfull log in');
        console.log(isLoggedIn);
      },
      onFailure: function (err) {
        console.error(err);
      },
    });
  };

  // const forgotPassword = (email)

  useEffect(() => {
    const localCheckIfLoggedIn = localStorage.getItem('isLoggedIn');
    if(localCheckIfLoggedIn && localCheckIfLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const signUp = (
    name,
    password,
    email,
    gender,
    dob,
    phoneNumber,
    address,
  ) => {
    return new Promise((resolve, reject) => {
      const attributeList = [
        new CognitoUserAttribute({ Name: "email", Value: email }),
        new CognitoUserAttribute({ Name: "name", Value: name }),
        new CognitoUserAttribute({ Name: "gender", Value: gender }),
        new CognitoUserAttribute({ Name: "birthdate", Value: dob }),
        new CognitoUserAttribute({
          Name: "phone_number",
          Value: phoneNumber,
        }),
        new CognitoUserAttribute({ Name: "address", Value: address }),
        new CognitoUserAttribute({
          Name: "updated_at",
          Value: Math.floor(Date.now() / 1000).toString(),
        }),
      ];

      userPool.signUp(
        email,
        password,
        attributeList,
        null,
        (err, result) => {
          if(err) {
            alert(err.message || JSON.stringify(err));
            reject(err);
            return;
          } else if (result) {
            const cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
            resolve(result);
            // setIsLoggedIn(true);
            // localStorage.setItem('isLoggedIn', 'true');
          }
        },
      );
    });
  };

  const signOut = () => {
    setUser(null) ;
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
