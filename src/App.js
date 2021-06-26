import React, { Component } from "react";

import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

import "./App.css";

const app = new Clarifai.App({
  apiKey: "9f5e3391e61849a6a152039a3ea6ee6f",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      
    };
  }

  /*   calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.response.outputs[0].data.regions[0].region_info.bounding_box;
      const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        console.log(width, height); 

    
  }; */

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, 
      this.state.input).then(
      function (response) {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );        
      },
      function (err) {

      }
    );
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;

/* https://1.bp.blogspot.com/_xdpjADHIXBo/THzJEoJ8sHI/AAAAAAAAAxI/wRofbHl-Iw8/s1600/DSC09815.JPG */
