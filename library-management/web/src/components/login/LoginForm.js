import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const history = useHistory();

  const handleFormValidation = () => {
    let formIsValid = true;
    if (!email) {
      formIsValid = false;
      formErrors['emailError'] = 'Email is required.';
    }

    if (!password) {
      formIsValid = false;
      formErrors['passwordError'] = 'Password is required.';
    }

    return formIsValid;
  };

  const login = async () => {
    if (handleFormValidation()) {
      let userDetails = { email, password };
      let result = await fetch('http://localhost:4000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });
      result = await result.json();
      console.log(result);
      localStorage.setItem('token', JSON.stringify(result.token));

      history.push('/books');
    }
  };

  return (
    <>
      <h1>Login</h1>
      <br></br>
      <label>EMAIL: </label>
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        className={formErrors['emailError'] ? ' showError' : ''}
      />

      <br></br>
      <br></br>
      <label>PASSWORD: </label>
      <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
      <br></br>
      <br></br>
      <input type="submit" name="btnSubmit" onClick={login} value="LOGIN" />
      <br></br>
      <br></br>
      <a href="/register">Not Registered yet?</a>
    </>
  );
};

export default LoginForm;
