import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Destination from "./Destination";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Container> */}
        <Header />
        <Main>
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Destination />
        </Main>
      </div>
    );
  }
}

export default App;
