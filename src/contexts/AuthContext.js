import React, { createContext, useEffect, useState } from "react";

import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

const poolData = require('../data/poolData');

const userPool = new CognitoUserPool(poolData);

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // we leave username as email as we will know that sign in username will be based on email
  const signIn = (email, password) => {
    const authenticationData = { Username: email, Password: password };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userData = { Username: email, Pool: userPool };
    const cognitoUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          const accessToken = result.getAccessToken().getJwtToken();
          const idToken = result.getIdToken().getJwtToken();
          const refreshToken = result.getRefreshToken().getToken();

          localStorage.setItem(
            `CognitoIdentityServiceProvider.${poolData.ClientId}.${email}.idToken`,
            idToken,
          );
          localStorage.setItem(
            `CognitoIdentityServiceProvider.${poolData.ClientId}.${email}.accessToken`,
            accessToken,
          );
          localStorage.setItem(
            `CognitoIdentityServiceProvider.${poolData.ClientId}.${email}.refreshToken`,
            refreshToken,
          );

          // Assuming result.getIdToken().payload contains the user details
          const userDetails = result.getIdToken().payload;
          console.log("User Details: ", userDetails);
          setUser({ email, accessToken, ...userDetails });
          setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("username", email);
          console.log(isLoggedIn);
          resolve(result); // Resolve the promise with the result
        },
        onFailure: function (err) {
          console.error(err);
          reject(err); // Reject the promise with the error
        },
      });
    });
  };

  // const forgotPassword = (email)

  const signUp = (name, password, email, gender, dob, phoneNumber, address) => {
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

      userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
          alert(err.message || JSON.stringify(err));
          reject(err);
          return;
        } else if (result) {
          const cognitoUser = result.user;
          console.log("user name is " + cognitoUser.getUsername());
          resolve(result);
          setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("username", email);
        }
      });
    });
  };

  useEffect(() => {
    const localCheckIfLoggedIn = localStorage.getItem("isLoggedIn");
    const localEmail = localStorage.getItem("username");
    if (localCheckIfLoggedIn && localCheckIfLoggedIn === "true") {
      const userData = { Username: localEmail, Pool: userPool };
      const cognitoUser = new CognitoUser(userData);

      console.log("cognitoUser: " + JSON.stringify(cognitoUser.getUsername()));
      cognitoUser.getSession((err, session) => {
        if (err) {
          console.error(err);
          return;
        }

        cognitoUser.getUserAttributes((err, attributes) => {
          if (err) {
            console.error(err);
            return;
          }

          const userDetails = attributes.reduce((acc, attribute) => {
            acc[attribute.getName()] = attribute.getValue();
            return acc;
          }, {});

          setUser({ email: localEmail, ...userDetails });
          setIsLoggedIn(true);
        });
      });
    }
  }, []);

  const signOut = () => {
    setUser(null);
    setIsLoggedIn(false);
    const email = localStorage.getItem("username");
    const cognitoUsername = localStorage.getItem(
      `CognitoIdentityServiceProvider.${poolData.ClientId}.LastAuthUser`,
    );

    // Helper function
    const removeItem = (username, item) => {
      localStorage.removeItem(
        `CognitoIdentityServiceProvider.${poolData.ClientId}.${username}.${item}`,
      );
    };

    // The keys to be removed
    const keys = ["idToken", "accessToken", "refreshToken", "clockDrift"];

    keys.forEach((key) => {
      removeItem(email, key);
      removeItem(cognitoUsername, key);
    });

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem(
      `CognitoIdentityServiceProvider.${poolData.ClientId}.LastAuthUser`,
    );
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
