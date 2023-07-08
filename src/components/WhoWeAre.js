import React from "react";

const WhoWeAre = () => {
  return (
    <div className="d-container who-we-are">
      <div className="wwa-container-1">
        <div className="wwa-container-2">Who we are</div>
        <div className="wwa-container-3">
          <div className="wwa-container-3-left">
            <span className="wwa-text-1">
              Most dynamic <br></br> pre-construction experience for buyers and builders.
            </span>
            <span className="wwa-text-2">
              Modern, immersive, and collaborative, clay is a real-time, enterprise-level platform for builders to manage projects
              and grow revenue in the physical and digital worlds. clay makes it easy to transform buyers' visions into reality
              with trust, sophistication, and simplicity. Now you can integrate everything you need for every project into one
              perfectly clayed system.
            </span>
            <span className="wwa-text-3">Welcome to the clay experience.</span>
            <button className="wwa-btn primary-btn">Begin Your Experience</button>
          </div>
          <div className="wwa-container-3-right">
            <img
              src="https://launchclay.com/wp-content/themes/claytheme/assets/images/CLAY_website-Who-we-are.jpeg"
              alt="who we are"
              height="531px"
              width="493px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
