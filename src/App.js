import React from "react";
import Toolbar from "./components/Toolbar";
import MainDisplay from "./components/MainDisplay";
import WhoWeAre from "./components/WhoWeAre";
import WhyClay from "./components/WhyClay";
import WhatWeOffer from "./components/WhatWeOffer";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="primary-container">
      <Toolbar />
      <MainDisplay />
      <WhoWeAre />
      <WhyClay />
      <WhatWeOffer />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
