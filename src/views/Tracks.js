import React from "react";
import tracks from "../data/maps.json";
import { Row, Col, Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { players } from "../utils/utils";
import Winrate from "../components/Winrate";
import Kart from "../components/Kart";

function Tracks(props) {

  return (
    <div className="container">
      <Row>
        <Col>
          <h4>Track Stats</h4>
          <Table bordered size="sm">
            <thead>
            <tr>
              <th/>
              <th>Driver Record</th>
              <th>Items Record</th>
              <th>Total Record</th>
            </tr>
            </thead>
            <tbody>
            {props.records.length ? players.map(player => {
              return (
                <tr key={player}>
                  <td className="clickable" onClick={() => props.history.push("/players/" + player)}>{player}</td>
                  <td><Winrate numerator={props.stats[player].driverTrackWins} denominator={props.stats[player].driverTracks} /></td>
                  <td><Winrate numerator={props.stats[player].itemTrackWins} denominator={props.stats[player].itemTracks} /></td>
                  <td><Winrate numerator={props.stats[player].driverTrackWins + props.stats[player].itemTrackWins} denominator={props.stats[player].driverTracks + props.stats[player].itemTracks} /></td>
                </tr>
              );
            }) : null}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h4>Track Records</h4>
          <Table>
            <thead>
            <tr>
              <th>Track</th>
              <th>Driver</th>
              <th>Items</th>
              <th>Kart</th>
              <th>Time</th>
              <th>Link</th>
            </tr>
            </thead>
            <tbody>
            {props.records.length ? Object.values(tracks).flat().map(track => {
              let record = props.records.reduce((prev, cur) => cur[track] < prev[track] ? cur : prev);
              return (
                <tr key={track}>
                  <td className="clickable" onClick={() => props.history.push("/tracks/" + track)}>{track}</td>
                  <td>{record.driver}</td>
                  <td>{record.items}</td>
                  <td><Kart kart={record.kart} /></td>
                  <td>{record[track]}</td>
                  <td><a href={record.link}>ep. {record.runback}</a></td>
                </tr>
              );
            }) : null}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}

export default withRouter(Tracks);