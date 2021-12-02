import React from "react";
import "./Navigation.css";
import logoPic from "./logoPic.jpg";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <div className="wrapper">
        <div className="navbarContainer">
          <div className="imageWrapper">
            <a href="https://codepen.io/developorama/live/a5cc2629bc8959f12ac75b172122ccf0">
              <img src={logoPic} className="logoPic" />
            </a>{" "}
          </div>

          <nav className="link-wrapper">
            <p
              onClick={() => onRouteChange("signout")}
              className="internalNavItems link pointer"
            >
              Sign Out
            </p>

            <p
              href="https://github.com/AK-Developorama/facedetect-frontend"
              className="internalNavItems link pointer"
            >
              GitHub
            </p>

            <a
              href="https://developorama.com"
              className="externalLink link pointer"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <div className="navbarContainer">
          <div className="imageWrapper">
            <a href="https://codepen.io/developorama/live/a5cc2629bc8959f12ac75b172122ccf0">
              <img src={logoPic} className="logoPic" />
            </a>
          </div>
          <nav className="link-wrapper">
            <p
              onClick={() => onRouteChange("signin")}
              className="internalNavItems link pointer"
            >
              Sign In
            </p>
            <p
              onClick={() => onRouteChange("register")}
              className="internalNavItems link pointer"
            >
              Register
            </p>
            <a
              href="https://github.com/developorama/facedetect-frontend"
              className="externalLink link pointer"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="mailto:aliz.kopenetz@google.com"
              target="_blank"
              rel="noreferrer"
              className="externalLink link pointer"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    );
  }
};

export default Navigation;
