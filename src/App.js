import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Avatar from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import "./App.css";

const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
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

  //new added here:

  onSubmitRegister = (email, password, name) => {
    fetch("https://polar-ravine-30699.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          //loadUser
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        } else {
          this.setState({ wrongDetails: true });
        }
      });
    console.log(this.state);
  };

  createGuest = () => {
    const email = "guest@gmail.com";
    const password = "password";
    const name = "Guest";
    fetch("https://polar-ravine-30699.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          console.log("guest already created");
        } else {
          //delete and re-create guest.
          console.log("create guest");
          this.deleteUser(email, password);
          this.onSubmitRegister(email, password, name);
        }
      });
  };

  deleteUser = (email, password) => {
    console.log(email, password);
    fetch("https://polar-ravine-30699.herokuapp.com/delete", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => response.json());
  };

  //end of new added

  calculateFaceLocation = (dataReceived) => {
    const clarifaiFace =
      dataReceived.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (boxContent) => {
    this.setState({ box: boxContent });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("https://polar-ravine-30699.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())

      .then((response) => {
        if (response) {
          fetch("https://polar-ravine-30699.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  //new added here :

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://cdn.rawgit.com/progers/pathseg/master/pathseg.js";
    script.async = true;

    document.body.appendChild(script);

    fetch("https://polar-ravine-30699.herokuapp.com")
      .then((response) => response.json())
      .then(console.log);
    this.createGuest();
  }

  //end of new addition

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: "true" });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <div>
            <Avatar />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onPictureSubmit={this.onPictureSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;

/*

https://3.bp.blogspot.com/_1K8KYIJqRMU/TMcbnY-XKmI/AAAAAAAAAH0/eUHLwqsyj5E/s1600/scottmags_0458.JPG



*/
