import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Slogan from "./Slogan/Slogan";
import Work from "./Work/Work";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Slogan />
        <Work />
      </div>
    );
  }
}

export default App;
