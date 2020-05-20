import React from "react";
import Tilt from "react-tilt";
import logo from "./logo.png";

function Logo() {
  return (
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
  );
}

export default Logo;
