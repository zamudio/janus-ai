import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import Navigation from "../components/Navigation";
import User from "../components/User";
import ImageLinkBar from "../components/ImageLinkBar";
import FaceRecognition from "../components/FaceRecognition";
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
      imageUrl: "",
      box: {},
    };
  }

  calcFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImg");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      // this obj will fill out the box state
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFace = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onBtnSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.displayFace(this.calcFaceLocation(response)))
      .catch((err) => console.log(err));
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
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
