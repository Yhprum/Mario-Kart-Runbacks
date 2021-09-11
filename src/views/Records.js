import React from "react";
import tracks from "../data/maps.json";
import { Row, Col } from "react-bootstrap";
import TrackBlock from "./TrackBlock";

function Records(props) {

  return (
    <div className="container">
      {Object.keys(tracks).map(cup => {
        return (
          <div key={cup}>
            <h3>{cup}</h3>
            <hr/>
            <Row>
              {tracks[cup].map(track => {
                return (
                  <Col key={track}>
                    <TrackBlock track={track} data={props.records} />
                  </Col>
                );
              })}
            </Row>
          </div>
        );
      })}
    </div>
  )
}

export default Records;