import React from "react";

const User = ({ name, entries }) => {
  return (
    <div>
      <div className="f3 mt5">{`Hello, ${name}!`}</div>
      <div className="f3 mb5">{`The number of photos that you've submitted so far is... ${entries}`}</div>
    </div>
  );
};

export default User;
