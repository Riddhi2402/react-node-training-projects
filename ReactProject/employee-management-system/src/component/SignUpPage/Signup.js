import { useState } from "react";
import "./signuppage.css";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <nav className="navbar sticky-top navbar-light">
        <a className="navbar-brand" href="/">
          Home
        </a>
      </nav>
      <div className="card signup-card">
        <div className="display-4">SignUp Here!!</div>
        <br />
        <form>
          <div className="form-group">
            <label>Firstname</label>
            <input
              type="text"
              className="form-control"
              placeholder="Firstname"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Lastname</label>
            <input
              type="text"
              className="form-control"
              placeholder="Lastname"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <select
              className="form-control"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            >
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Male"
                onChange={(event) => setGender(event.target.value)}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Female"
                onChange={(event) => setGender(event.target.value)}
              />
              <label className="form-check-label">Female</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Other"
                onChange={(event) => setGender(event.target.value)}
              />
              <label className="form-check-label">Other</label>
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              className="form-control"
              rows="4"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            ></textarea>
          </div>
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
          </div>
          <a href="/employeetable" className="btn btn-success signup-btn">
            Signup
          </a>
          <a href="/login" className="btn btn-link already-register-btn">
            Already registered?
          </a>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
