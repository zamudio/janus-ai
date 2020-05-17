import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import Navigation from "../components/Navigation";
import User from "../components/User";
import ImageLinkBar from "../components/ImageLinkBar";
import "../styles/container/_app.css";

const app = new Clarifai.App({
  apiKey: "ea2dd51cff224f258094bb9810feef39",
});

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

class App extends Component {
  constructor() {
    // Call super to use this.state
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onBtnSubmit = () => {
    console.log("click");
    app.models
      .predict(
        "a403429f2ddf4b49b307e318f00e528b",
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        function (response) {
          // do something with response
          console.log(response);
        },
        function (err) {
          // there was an error
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOpts} />
        <Navigation />
        <User />
        <ImageLinkBar
          onInputChange={this.onInputChange}
          onBtnSubmit={this.onBtnSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
