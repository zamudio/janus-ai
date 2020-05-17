import React from "react";
import "../styles/components/_faceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center mt2 mb2">
      <div className="absolute mt2 mb2">
        <img id="inputImg" src={imageUrl} alt="" width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
