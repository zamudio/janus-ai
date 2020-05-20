import React from "react";

const User = ({ name, entries }) => {
  return (
    <div className="">
      <div className="f3 pa5">{`Hello ${name}, your current rank is ${entries}`}</div>
    </div>
  );
};

export default User;
