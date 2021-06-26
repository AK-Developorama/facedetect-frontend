import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div>
        <img alt="img" src={imageUrl} width='300px' height='auto'/>
      </div>
    </div>
  );
};



export default FaceRecognition;