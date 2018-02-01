import React from "react";
import { Route } from "react-router-dom";
import List from "./List";
import Room from "./Room";

export default () => {
  return (
    <div>
      <Route exact path="/homes" component={List} />
      <Route exact path="/homes/:id" component={Room} />
    </div>
  );
};
