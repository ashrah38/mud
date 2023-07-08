import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "./Dropdown";
const Toolbar = ({ dropdownClass, toggleDropDown, showForm }) => {
  return (
    <div className="toolbar">
      <div className="logo">Clay</div>
      <div className="links-container">
        <a className="toolbar-link" href="#who-we-are">
          Who we are
        </a>
        <a className="toolbar-link" href="#why-clay">
          Why Clay
        </a>
        <a className="toolbar-link" href="#what-we-offer">
          What we offer
        </a>
        <a className="toolbar-link" href="#form" onClick={showForm}>
          Book a demo
        </a>
      </div>
      <div className="dropdown-icon">
        <MenuIcon onClick={toggleDropDown} />
      </div>
      <Dropdown dropdownClass={dropdownClass} toggleDropDown={toggleDropDown} showForm={showForm} />
    </div>
  );
};

export default Toolbar;
