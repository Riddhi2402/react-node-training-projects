import "./welcomepage.css";
import { useEffect, useState } from "react";
import Splash from "../Splash/splash";

const WelcomePage = () => {
  const [state, setState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 8000);
  });
  if (state) {
    return <Splash></Splash>;
  } else {
    return (
      <div className="main">
        <div className="card text-center welcome-card">
          <div className="card-body">
            <h5 className="card-title title">Welcome To Our Employee Portal</h5>
            <p className="card-text text">Click Below to Continue...</p>
            <a href="/login" className="btn btn-success">
              Click Here
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default WelcomePage;
