import React, {useEffect, useState} from "react";
import data from "../data/runbacks.csv";
import tracks from "../data/maps.json";
import Papa from "papaparse";
import { Row, Col } from "react-bootstrap";
import TrackBlock from "./TrackBlock";

function Records() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    Papa.parse(data, {
      download: true,
      header: true,
      complete: function (input) {
        setRecords(input.data);
      }
    });
  },[]);

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
                    <TrackBlock track={track} data={records} />
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