import { useEffect } from "react";
import lottie from "lottie-web";
import Logo from "../../static/circle-waves.json";
import "./splash.css";

const Splash = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#loader-logo"),
      animationData: Logo,
    });
  }, []);

  return (
    <div>
      <div id="loader-logo" />
    </div>
  );
};

export default Splash;
