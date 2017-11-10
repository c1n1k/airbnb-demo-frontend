import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Destination from "./Destination";
import Footer from "./Footer";

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
        <Footer />
      </div>
    );
  }
}

export default App;
