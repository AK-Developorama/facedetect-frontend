import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div>
      <p className="instructionContainer f6 black">
        {"Drop .jpg/.png picture URL here for Bot to detect faces. "}
      </p>
      <div className="imageUrl">
        <div className="form center pa4 br1">
          <input
            className="f4 pa2 center input-reset ba bg-transparent hover-bg-white-10 hover-white w-100"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            onClick={onPictureSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};


export default ImageLinkForm;
