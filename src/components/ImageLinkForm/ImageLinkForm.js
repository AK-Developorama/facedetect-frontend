import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="paragraph">
        {"Drop .jpg/.png picture URL here for Bot to detect faces. "}
      </p>
      <div className="center">
        <div className="form center pa4 br1">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-10 f4 link ph3 pv2 dib black "
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
