import React from "react";

const Banner = ({ showForm }) => {
  return (
    <div className="banner">
      <div className="banner-moto">The Platform of Opportunity</div>
      <a className="banner-btn" onClick={showForm} href="#form">
        Book a Demo
      </a>
    </div>
  );
};

export default Banner;
