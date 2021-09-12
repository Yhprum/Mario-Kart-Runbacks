import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import tracks from "../data/maps.json";
import {subtractDuration} from "../utils/utils";

function Player(props) {

  const { player } = useParams();

  let driverGames = props.records.filter(record => record.driver === player && record.result !== "desync");
  let driver = driverGames.reduce((sum, record) => sum + (record.result === "win" ? 1 : 0), 0);
  let itemsGames = props.records.filter(record => record.items === player && record.result !== "desync");
  let items = itemsGames.reduce((sum, record) => sum + (record.result === "win" ? 1 : 0), 0);

  return (
    <Container>
      <h3>{player}</h3>
      <Row>
        <Col md={4}>
          Runback Stats
          <Card>
            <table>
              <thead>
              <tr>
                <th>Driver Winrate</th>
                <th>Items Winrate</th>
                <th>Overall</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{(driver/driverGames.length*100).toFixed(0)}%</td>
                <td>{(items/itemsGames.length*100).toFixed(0)}%</td>
                <td>{((driver+items)/(driverGames.length+itemsGames.length)*100).toFixed(0)}%</td>
              </tr>
              </tbody>
            </table>
          </Card>
        </Col>
        <Col md={8}>
          Track Stats
          <Card>
            <table>
              <thead>
                <tr>
                  <th>Track</th>
                  <th>Fastest Time</th>
                  <th>vs. Record</th>
                  <th>Winrate (Driver)</th>
                  <th>Winrate (Items)</th>
                  <th>Overall</th>
                </tr>
              </thead>
              <tbody>
                {props.records.length ? Object.values(tracks).flat().map(track => {
                  let driverWins = 0;
                  let itemWins = 0;
                  let driverGames = 0;
                  let itemGames = 0;
                  let fastestDriver = {};
                  for (let i = 0; i < props.records.length / 2; i++) {
                    if (props.records[2 * i][track] === "desync") continue;
                    if (props.records[2 * i].driver === player) {
                      driverGames++;
                      if (fastestDriver[track] === undefined || props.records[2 * i][track] < fastestDriver[track]) fastestDriver = props.records[2 * i];
                      if (props.records[2 * i][track] < props.records[2 * i + 1][track]) driverWins++;
                    } else if (props.records[2 * i].items === player) {
                      itemGames++;
                      if (props.records[2 * i][track] < props.records[2 * i + 1][track]) itemWins++;
                    } else if (props.records[2 * i + 1].driver === player) {
                      driverGames++;
                      if (fastestDriver[track] === undefined || props.records[2 * i + 1][track] < fastestDriver[track]) fastestDriver = props.records[2 * i + 1];
                      if (props.records[2 * i][track] > props.records[2 * i + 1][track]) driverWins++;
                    } else if (props.records[2 * i + 1].items === player) {
                      itemGames++;
                      if (props.records[2 * i][track] > props.records[2 * i + 1][track]) itemWins++;
                    }
                  }
                  let record = props.records.map(r => r[track]).reduce((prev, cur) => cur < prev ? cur : prev);
                  let difference = subtractDuration(fastestDriver[track], record);
                  difference = difference === 0 ? "-" : "+" + difference.toFixed(3);
                  return (
                    <tr key={track}>
                      <td>{track}</td>
                      <td className={difference === "-" ? "fw-bold" : null}>{fastestDriver[track]}</td>
                      <td>{difference}</td>
                      <td>{driverWins}/{driverGames}</td>
                      <td>{itemWins}/{itemGames}</td>
                      <td>{((driverWins + itemWins) / (driverGames + itemGames) * 100).toFixed(0)}%</td>
                    </tr>
                  );
                }) : null}
              </tbody>
            </table>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Player;