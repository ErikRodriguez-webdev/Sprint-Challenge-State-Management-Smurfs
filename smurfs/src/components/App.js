import React from "react";
import SmurfsForm from "./SmurfsForm";
import SmurfsList from "./SmurfsList";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfsForm />
      <SmurfsList />
    </div>
  );
};

export default App;
