import React from "react";
import Logo from "../Logo/Logo";
import "./_navigation.css";

const Navigation = ({ onRouteChange, isSignedIn, isAtRegister }) => {
  if (isSignedIn) {
    return (
      <nav className="flex justify-between">
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
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Up
        </p>
      </nav>
    );
  }
};

export default Navigation;
