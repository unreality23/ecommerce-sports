import React, { createContext, useState } from 'react';
import { CognitoUserPool, CognitoUser, AuthenticationDetails, CognitoUserAttribute  } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'eu-west-2_QMaygXmni',
  ClientId: '42db98l5h7u58gqmv373va4ja3'
}

const userPool = new CognitoUserPool(poolData);

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const signIn = (username, password) => {
    const authenticationData = { Username: username, Password: password};
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userData = { Username: username, Pool: userPool};
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        let accessToken = result.getAccessToken().getJwtToken();
        setUser({ username, accessToken});
        console.log('heyo im here')
      },
      onFailure: function(err) {
        console.error(err);
      },
    });
  };

  const signUp = (username,name, password, email, gender, dob, phoneNumber, address) => {
    return new Promise((resolve, reject) => {
      const attributeList = [
        new CognitoUserAttribute({ Name: 'email', Value: email }),
        new CognitoUserAttribute({ Name: 'name', Value: name }),
        new CognitoUserAttribute({ Name: 'gender', Value: gender }),
        new CognitoUserAttribute({ Name: 'birthdate', Value: dob }),
        new CognitoUserAttribute({ Name: 'phone_number', Value: '+447477910384' }),
        new CognitoUserAttribute({ Name: 'address', Value: address }),
        new CognitoUserAttribute({ Name: 'updated_at', Value: Math.floor(Date.now() / 1000).toString() }),
      ]
      userPool.signUp(username, password, attributeList, null, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>

  );
};


export { AuthContext, AuthProvider };


