import React from "react";
import './Logo.css';
import logoImg from './logo.png';

const Logo = () => {
  return (
    <div className="mw5 center br3 pa3 pa4-ns mv3 ba b--black-10">
  <div className="tc">
    <img src={logoImg} className="br-100 h4 w4 dib ba b--black-05 pa2" />
       
  </div>
</div>

    
  );
};

export default Logo;
