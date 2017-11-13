import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import IndexPage from "./IndexPage";
import Homes from "./Homes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={IndexPage} />
          <Route path="/homes" component={Homes} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
