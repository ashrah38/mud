import { React, useState } from "react";
import Toolbar from "./components/Toolbar";
import MainDisplay from "./components/MainDisplay";
import WhoWeAre from "./components/WhoWeAre";
import WhyClay from "./components/WhyClay";
import WhatWeOffer from "./components/WhatWeOffer";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";

const App = () => {
  const [dropdownClass, setDropdownClass] = useState("dropdown-menu hide"); // for the dropdown
  const [formClass, setFormClass] = useState("d-container form hide"); // for the dropdown

  const toggleDropDown = () => {
    if (dropdownClass === "dropdown-menu hide") {
      setDropdownClass("dropdown-menu");
    } else {
      setDropdownClass("dropdown-menu hide");
    }
  };

  const showForm = () => {
    setFormClass("d-container form");
  };

  return (
    <div className="primary-container">
      <Toolbar dropdownClass={dropdownClass} toggleDropDown={toggleDropDown} showForm={showForm} />
      <MainDisplay showForm={showForm} />
      <WhoWeAre showForm={showForm} />
      <WhyClay showForm={showForm} />
      <WhatWeOffer />
      <Banner showForm={showForm} />
      <Form formClass={formClass} />
      <Footer showForm={showForm} />
    </div>
  );
};

export default App;
