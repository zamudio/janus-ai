import React from "react";
import Tilt from "react-tilt";
import logo from "../images/components/logo.png";
import "../styles/components/_navigation.css";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className="flex justify-between ">
      <div className="f3 pa3">
        <Tilt
          className="Tilt br2 shadow-2"
          options={{ max: 25 }}
          style={{ height: 65, width: 65 }}
        >
          <div className="Tilt-inner">
            <img src={logo} alt="Brain Logo" />
          </div>
        </Tilt>
      </div>
      <p
        onClick={() => onRouteChange("signin")}
        className="f3 link dim black underline pa3 pointer"
      >
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
