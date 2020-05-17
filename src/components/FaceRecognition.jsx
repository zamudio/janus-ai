import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center mt4 mb4">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default FaceRecognition;
