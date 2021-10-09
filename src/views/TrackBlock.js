import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import { trackSort } from "../utils/utils";
import train from "../img/karts/train.png";
import blue from "../img/karts/blue.png";
import pink from "../img/karts/pink.png";
import green from "../img/karts/green.png";
import waluigi from "../img/karts/waluigi.png";

function TrackBlock(props) {

  let times = props.data.slice(0).sort(trackSort(props.track)).slice(0, 5);
  let images = {train, blue, pink, green, waluigi};

  return (
    <Card>
      <b className="clickable" onClick={() => props.history.push("/tracks/" + props.track)}>{props.track}</b>
      {times.map((time, i) => {
        return (
          <Row key={i}>
            <Col>{time.driver} + {time.items}</Col>
            <Col><img src={images[time.kart]} alt={time.kart} className="kart-icon"/></Col>
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