import React from "react";
import { Route, Switch } from "react-router-dom";
import TrackDetails from "./views/TrackDetails";
import Records from "./views/Records";
import Player from "./views/Player";
import Tracks from "./views/Tracks";

function Routes(props) {

  return (
    <Switch>
      <Route path="/tracks/:track">
        <TrackDetails records={props.records} stats={props.stats} />
      </Route>
      <Route path="/tracks">
        <Tracks records={props.records} stats={props.stats} />
      </Route>
      <Route path="/players/:player">
        <Player records={props.records} runbacks={props.runbacks} stats={props.stats} />
      </Route>
      <Route path="/">
        <Records records={props.records} />
      </Route>
    </Switch>
  );
}

export default Routes;
