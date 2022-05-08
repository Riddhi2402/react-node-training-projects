import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const hostory = useHistory();

  const register = async () => {
    let userDetails = { email, password };
    let result = await fetch('http://localhost:4000/users/register', {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    hostory.push('/');
  };
  return (
    <>
      <h1>Registration</h1>
      <br></br>
      <label>EMAIL: </label>
      <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} id="txtUserEmail" required />
      <br></br>
      <br></br>
      <label>PASSWORD: </label>
      <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} id="txtPassword" required />
      <br></br>
      <br></br>
      <input type="submit" value="REGISTER" onClick={register} />
      <br></br>
      <br></br>
      <a href="/">Already Registered?</a>
    </>
  );
};

export default RegistrationForm;
