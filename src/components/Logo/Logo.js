import React from "react";
import './Logo.css';
import logoImg from './logo.png';




const Logo = () => {
  return (
    <div className="center br3 pa3 pa4-ns mv3 ">
  <div className="tc">
    <img src={logoImg} className="br-80 w4 dib pa2"/>
       
  </div>
</div>

    
  );
};

export default Logo;
