import React from "react";
import { Route, Switch } from "react-router-dom";
import TrackDetails from "./views/TrackDetails";
import Records from "./views/Records";

function Routes(props) {

  return (
    <Switch>
      <Route path="/tracks/:track">
        <TrackDetails records={props.records} />
      </Route>
      <Route path="/">
        <Records records={props.records} />
      </Route>
    </Switch>
  );
}

export default Routes;
