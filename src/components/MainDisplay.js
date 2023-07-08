import React from "react";

const MainDisplay = ({ showForm }) => {
  return (
    <div className="d-container main">
      <div className="moto">YOU BUILD DREAMS, WE MAKE IT EASY</div>
      <a className="demo-btn" onClick={showForm} href="#form">
        Book a Demo
      </a>
    </div>
  );
};

export default MainDisplay;
