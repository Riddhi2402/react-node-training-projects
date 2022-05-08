import "./loginpage.css";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  return (
    <>
      <nav className="navbar sticky-top navbar-light">
        <a className="navbar-brand" href="/">
          Home
        </a>
      </nav>
      <div className="card login-card">
        <div className="display-4">Login Here!!</div>
        <br />
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <small className="form-text text-muted">ex: abc@xyz.com</small>
            <div className="invalid-feedback">Please enter valid email</div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <small className="form-text text-muted">
              Password must be 8-20 characters long
            </small>
            <div className="invalid-feedback">
              Please enter correct password.
            </div>
          </div>
          <a href="/employeetable" className="btn btn-success login-btn">
            Login
          </a>
          <a href="/signup" className="btn btn-link register-btn">
            Not have registered?
          </a>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
