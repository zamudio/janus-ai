import React from "react";

const ImageLinkBar = () => {
  return (
    <div className="">
      <p className="f3">
        {
          "This SmartBrain app will detect faces in your pictures. Give it a try."
        }
      </p>
      <div className="center">
        <div className="pa4 br3 shadow-5">
          <input className="f4 pa2 w-70" type="text" />
          <button className="w-30 grow f4 link pv2 dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkBar;
