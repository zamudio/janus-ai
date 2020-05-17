import React from "react";
import Particles from "react-particles-js";
import Navigation from "../components/Navigation";
import User from "../components/User";
import ImageLinkBar from "../components/ImageLinkBar";
import "../styles/container/_app.css";

function App() {
  const particleOpts = {
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          value_area: 100,
        },
      },
    },
  };

  return (
    <div className="App">
      <Particles className="particles" params={particleOpts} />
      <Navigation />
      <User />
      <ImageLinkBar />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
