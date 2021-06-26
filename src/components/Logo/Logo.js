import React from "react";
import './Logo.css';
import logoImg from './logo.png';

const Logo = () => {
  return (
    <div>
     <img style={{paddingTop: '5px'}} alt='logo' src={logoImg}/>
    </div>
  );
};

export default Logo;
