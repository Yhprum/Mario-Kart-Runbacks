import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import { trackSort } from "../utils/utils";
import Kart from "../components/Kart";

function TrackBlock(props) {
  let times = props.data.slice(0).sort(trackSort(props.track)).slice(0, 5);
  return (
    <Card>
      <b className="clickable" onClick={() => props.history.push("/tracks/" + props.track)}>{props.track}</b>
      {times.map((time, i) => {
        return (
          <Row key={i}>
            <Col>{time.driver} + {time.items}</Col>
            <Col><Kart kart={time.kart} /></Col>
            <Col>{time[props.track]}</Col>
            <Col><Link to={`/runbacks/${time.runback}`}>ep. {time.runback}</Link></Col>
            <br/>
          </Row>
        )
      })}
    </Card>
  )
}

export default withRouter(TrackBlock);