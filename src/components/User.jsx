import React from "react";

const User = ({ name, entries }) => {
  return (
    <div>
      <div className="f3 pa5">
        {`Hello, ${name}!`}
        {`The # of photos that you've submitted so far is... ${entries}`}
      </div>
    </div>
  );
};

export default User;
