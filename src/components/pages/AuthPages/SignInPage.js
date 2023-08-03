import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext'; // Adjust the import path according to your project structure

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    authContext.signIn(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Log in" />
    </form>
  );
}

export default SignInPage;
