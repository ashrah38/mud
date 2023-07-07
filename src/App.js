import React from "react";
import Toolbar from "./components/Toolbar";
import MainDisplay from "./components/MainDisplay";
import WhoWeAre from "./components/WhoWeAre";
import WhyClay from "./components/WhyClay";

const App = () => {
  return (
    <div className="primary-container">
      <Toolbar />
      <MainDisplay />
      <WhoWeAre />
      <WhyClay />
    </div>
  );
};

export default App;
