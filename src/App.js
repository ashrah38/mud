import React from "react";
import Toolbar from "./components/Toolbar";
import MainDisplay from "./components/MainDisplay";
import WhoWeAre from "./components/WhoWeAre";
const App = () => {
  return (
    <div className="primary-container">
      <Toolbar />
      <MainDisplay />
      <WhoWeAre />
    </div>
  );
};

export default App;
