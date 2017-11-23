import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing";
import Homes from "./Homes";
import Room from "./Room";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/homes" component={Homes} />
          <Route path="/room" component={Room} />
        </div>
      </Router>
    );
  }
}

export default App;
