import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing";
import Homes from "./Homes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/homes" component={Homes} />
        </div>
      </Router>
    );
  }
}

export default App;
