import React from "react";
import Logo from "./Logo";
import "../styles/components/_navigation.css";

const Navigation = ({ onRouteChange, isSignedIn, isAtRegister }) => {
  if (isSignedIn) {
    return (
      <nav className="flex justify-between ">
        <Logo />
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else if (isAtRegister) {
    return (
      <nav className="flex justify-between">
        <Logo />
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign In
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="flex justify-between">
        <Logo />
      </nav>
    );
  }
};

export default Navigation;
