import React from "react";

const Dropdown = ({ dropdownClass, toggleDropDown, showForm }) => {
  return (
    <div className={dropdownClass}>
      <a className="dropdown-link" href="#who-we-are" onClick={toggleDropDown}>
        Who we are
      </a>
      <a className="dropdown-link" href="#why-clay" onClick={toggleDropDown}>
        Why Clay
      </a>
      <a className="dropdown-link" href="#what-we-offer" onClick={toggleDropDown}>
        What we offer
      </a>
      <a
        className="dropdown-link"
        href="#form"
        onClick={() => {
          toggleDropDown();
          showForm();
        }}
      >
        Book a demo
      </a>
    </div>
  );
};

export default Dropdown;
