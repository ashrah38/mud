import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="d-container what-we-offer">
      <div className="wwo-container-1">What we offer</div>
      <div className="wwo-container-2 create">
        <div className="wwo-container-2-text">
          <div className="wwo-text-1">CREATE</div>
          <div className="wwo-text-2">GAME-CHANGING FIDELITY</div>
          <div className="wwo-text-3">
            Incredibly immersive and realistic experiences are brought to life with Clay's groundbreaking technology. Our platform
            leaps bounds in visual fidelity, building and showcasing communities crafted from the builders' minds.
          </div>
        </div>
        <div className="wwo-container-2-image">
          <img
            src="https://launchclay.com/wp-content/themes/claytheme/assets/images/Create_NEW_ONE.jpg"
            width="682px"
            height="457px"
            alt="create"
          />
        </div>
      </div>
      <div className="wwo-container-2 sell">
        <div className="wwo-container-2-image">
          <img
            src="https://launchclay.com/wp-content/themes/claytheme/assets/images/SELL_B.jpg"
            width="536px"
            height="359px"
            alt="sell"
          />
        </div>
        <div className="wwo-container-2-text right">
          <div className="wwo-text-1">SELL</div>
          <div className="wwo-text-2">
            SELL FASTER, EASIER, AND <br></br> MORE EFFICIENTLY.
          </div>
          <div className="wwo-text-3">
            An intelligent, comprehensive system for every project makes it easy for homebuyers to get exactly what they want.
            Using a streamlined and fully integrated platform that provides a full suite of tools, builders can achieve lasting
            success for every project.
          </div>
        </div>
      </div>
      <div className="wwo-container-2 explore">
        <div className="wwo-container-2-text">
          <div className="wwo-text-1">EXPLORE</div>
          <div className="wwo-text-2">TEST THE LIMITS OF YOUR IMAGINATION.</div>
          <div className="wwo-text-3">
            Let homebuyers create their dreams using simple tools in a virtual destination filled with digital assets backed by a
            globally networked ecosystem.
          </div>
        </div>
        <div className="wwo-container-2-image">
          <img
            src="https://launchclay.com/wp-content/themes/claytheme/assets/images/explore-newone_B.jpg"
            width="446px"
            height="428px"
            alt="explore"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
