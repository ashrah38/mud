import React from "react";

const Whyclay = ({ showForm }) => {
  return (
    <div id="why-clay" className="d-container why-clay">
      <div className="wc-container">
        <div className="wc-text-1">Why Clay</div>
        <div className="wc-text-2">The pre-construction experience is evolving, and so should you.</div>
        <div className="wc-text-3">
          clay has changed the way people buy homes. From anywhere in the world, homebuyers and builders can connect and form
          trusting relationships as if they were together in person.
        </div>
        <div className="wc-text-3">
          Builders can virtualize projects and give homebuyers greater freedom with an unparalleled high-fidelity experience.
          clay's robust ecosystem is designed for builders to succeed in every project. It's so much more than a real-time
          platform, it's a platform of opportunity to deliver more dreams to more people.
        </div>
        <a className="wc-btn primary-btn" href="#form" onClick={showForm}>
          Begin Your Experience
        </a>
      </div>
    </div>
  );
};

export default Whyclay;
