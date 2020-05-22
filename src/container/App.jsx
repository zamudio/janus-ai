import React, { Component } from "react";
import Particles from "react-particles-js";
import Navigation from "../components/Navigation/Navigation";
import Signin from "../components/Signin";
import Register from "../components/Register";
import User from "../components/User";
import ImageLinkBar from "../components/ImageLinkBar";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
import "./_app.css";

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
      route: "signin",
      isSignedIn: false,
      isAtRegister: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  calcFaceLocation = (data) => {
    console.log(data);
    const image = document.getElementById("inputImg");
    const width = Number(image.width);
    const height = Number(image.height);
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    return {
      // this obj will fill out the box state by using the values from the ML model
      // the values are floats betweem 0 and 1. You can figure out the position
      // by using the value x the image h/w value itself. ex: 0.33 left_col * 100px
      // would equal 33px, which is where the column is located on the pic. Repeat for
      // all four and you have a box around the face
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFace = (box) => {
    // console.log(box);
    this.setState({ box: box });
  };

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onPictureBtnSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("https://aqueous-sierra-04321.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          // fetch to api
          fetch("https://aqueous-sierra-04321.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((res) => res.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            });
        }
        this.displayFace(this.calcFaceLocation(res));
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false, isAtRegister: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true, isAtRegister: false });
    } else if (route === "register") {
      this.setState({ isSignedIn: false, isAtRegister: true });
    } else if (route === "signin") {
      this.setState({ isSignedIn: false, isAtRegister: false });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, isAtRegister, imageUrl, route, box, user } = this.state;

    return (
      <div className="App">
        <Particles className="particles" params={particleOpts} />
        <Navigation
          isAtRegister={isAtRegister}
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <div>
            <User name={user.name} entries={user.entries} />
            <ImageLinkBar
              onInputChange={this.onInputChange}
              onPictureBtnSubmit={this.onPictureBtnSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : route === "register" ? (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        ) : (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
