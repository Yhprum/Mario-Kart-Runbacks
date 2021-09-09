import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Card, Row, Col } from "react-bootstrap";
import { trackSort } from "../utils/utils";

function TrackBlock(props) {

  const [times, setTimes] = useState([]);

  useEffect(() => {
    setTimes(props.data.sort(trackSort(props.track)).slice(0, 5));
  }, [props.data, props.track]);

  return (
    <Card>
      <b className="clickable" onClick={() => props.history.push("/tracks/" + props.track)}>{props.track}</b>
      {times.map((time, i) => {
        return (
          <Row key={i}>
            <Col>{time.driver} + {time.items}</Col>
            <Col>{time[props.track]}</Col>
            <br/>
          </Row>
        )
      })}
    </Card>
  )
}

export default withRouter(TrackBlock);