import React from "react";
import "./App.css";
import { Routing } from "./routes";
import { Menu } from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routing />
    </div>
  );
}

export default App;
