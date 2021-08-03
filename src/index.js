import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "tachyons";
import "fontsource-roboto";

ReactDOM.render(<App />, document.getElementById("root"));

/* BACKUP


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);

*/
