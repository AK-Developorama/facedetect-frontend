import React from 'react';
import './Particles.css';
import { Helmet } from "react-helmet";

const Particles = () => {    return (
      <div>
        <Helmet>
          <div class="count-particles">
            <span class="js-count-particles">--</span> particles
          </div>
          <div id="particles-js"></div>
          <script src="./particles_original.js"></script>
          <script src="./app.js"></script>
        </Helmet>
      </div>
    );
};

export default Particles;
