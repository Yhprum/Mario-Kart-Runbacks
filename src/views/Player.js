import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams, withRouter } from "react-router-dom";
import tracks from "../data/maps.json";
import { toPercent, total } from "../utils/utils";
import Winrate from "../components/Winrate";

function Player(props) {

  const { player } = useParams();

  let records = props.records;

  let driverGames = records.filter(record => record.driver === player && record.result !== "desync");
  let driver = driverGames.reduce((sum, record) => sum + (record.result === "win" ? 1 : 0), 0);
  let itemsGames = records.filter(record => record.items === player && record.result !== "desync");
  let items = itemsGames.reduce((sum, record) => sum + (record.result === "win" ? 1 : 0), 0);

  let stats = props.stats[player];

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
                <th>Driver</th>
                <th>Items</th>
                <th>Overall</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><Winrate numerator={driver} denominator={driverGames.length} /></td>
                <td><Winrate numerator={items} denominator={itemsGames.length} /></td>
                <td><Winrate numerator={driver + items} denominator={driverGames.length + itemsGames.length} /></td>
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
                {records.length ? Object.values(tracks).flat().map(track => {
                  return (
                    <tr key={track}>
                      <td className="clickable" onClick={() => props.history.push("/tracks/" + track)}>{track}</td>
                      <td className={stats[track].difference === 0 ? "fw-bold" : null}>{stats[track].fastestDriver[track]}</td>
                      <td>{stats[track].difference === 0 ? "-" : "+" + stats[track].difference.toFixed(3)}</td>
                      <td>{toPercent(stats[track].driverWins / stats[track].driverGames)}</td>
                      <td>{toPercent(stats[track].itemWins / stats[track].itemGames)}</td>
                      <td>{((stats[track].driverWins + stats[track].itemWins) / (stats[track].driverGames + stats[track].itemGames) * 100).toFixed(0)}%</td>
                    </tr>
                  );
                }) : null}
                <tr>
                  <td className="fw-bold">totals</td>
                  <td className="fw-bold">{total(Object.keys(stats).filter(s=>Object.values(tracks).flat().includes(s)).map(track => stats[track].fastestDriver[track]))}</td>
                  <td className="fw-bold">+{Object.keys(stats).filter(s=>Object.values(tracks).flat().includes(s)).map(track => stats[track].difference).reduce((a,b)=>a+b,0).toFixed(3)}</td>
                  <td className="fw-bold">{toPercent(stats.driverTrackWins / stats.driverTracks)}</td>
                  <td className="fw-bold">{toPercent(stats.itemTrackWins / stats.itemTracks)}</td>
                  <td className="fw-bold">{toPercent((stats.driverTrackWins + stats.itemTrackWins) / (stats.driverTracks + stats.itemTracks))}</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(Player);