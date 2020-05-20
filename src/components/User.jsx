import React from "react";

const User = ({ name, entries }) => {
  return (
    <div>
      <div className="f3 pa5">{`Hello ${name}! You have submitted ${entries} photos so far`}</div>
    </div>
  );
};

export default User;
