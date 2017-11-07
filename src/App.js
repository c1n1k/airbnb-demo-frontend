import React, { Component } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Explore from "./Explore/Explore";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Container> */}
        <Header />
        <Main>
          <Explore />
        </Main>
      </div>
    );
  }
}

export default App;
