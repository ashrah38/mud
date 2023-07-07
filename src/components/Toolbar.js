import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "./Dropdown";
const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="logo">mud</div>
      <div className="links-container">
        <a className="toolbar-link" href="#">
          Who we are
        </a>
        <a className="toolbar-link" href="#">
          Why Clay
        </a>
        <a className="toolbar-link" href="#">
          What we offer
        </a>
        <a className="toolbar-link" href="#">
          Book a demo
        </a>
      </div>
      <div className="dropdown-icon">
        <MenuIcon />
      </div>
      <Dropdown />
    </div>
  );
};

export default Toolbar;
