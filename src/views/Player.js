import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import tracks from "../data/maps.json";
import { subtractDuration } from "../utils/utils";

function Player(props) {

  const { player } = useParams();
  const [season, setSeason] = useState(0);

  let records = parseInt(season) === 0 ? props.records : props.records.filter(record => record.season === season);

  let driverGames = records.filter(record => record.driver === player && record.result !== "desync");
  let driver = driverGames.reduce((sum, record) => sum + (record.result === "win" ? 1 : 0), 0);
  let itemsGames = records.filter(record => record.items === player && record.result !== "desync");
  let items = itemsGames.reduce((sum, record) => sum + (record.result === "win" ? 1 : 0), 0);

  let stats = {};
  let driverTracks = 0;
  let itemTracks = 0;
  let driverTrackWins = 0;
  let itemTrackWins = 0;
  // TODO: change to `let stats = Object.values(tracks).flat().map(...)
  records.length && Object.values(tracks).flat().forEach(track => {
    let driverWins = 0;
    let itemWins = 0;
    let driverGames = 0;
    let itemGames = 0;
    let fastestDriver = {};
    for (let i = 0; i < records.length / 2; i++) {
      if (records[2 * i][track] === "desync") continue;
      if (records[2 * i].driver === player) {
        driverGames++;
        if (fastestDriver[track] === undefined || records[2 * i][track] < fastestDriver[track]) fastestDriver = records[2 * i];
        if (records[2 * i][track] < records[2 * i + 1][track]) driverWins++;
      } else if (records[2 * i].items === player) {
        itemGames++;
        if (records[2 * i][track] < records[2 * i + 1][track]) itemWins++;
      } else if (records[2 * i + 1].driver === player) {
        driverGames++;
        if (fastestDriver[track] === undefined || records[2 * i + 1][track] < fastestDriver[track]) fastestDriver = records[2 * i + 1];
        if (records[2 * i][track] > records[2 * i + 1][track]) driverWins++;
      } else if (records[2 * i + 1].items === player) {
        itemGames++;
        if (records[2 * i][track] > records[2 * i + 1][track]) itemWins++;
      }
    }
    let record = props.records.map(r => r[track]).reduce((prev, cur) => cur < prev ? cur : prev);
    let difference = subtractDuration(fastestDriver[track], record);
    difference = difference === 0 ? "-" : "+" + difference.toFixed(3);

    stats[track] = {
      driverWins, itemWins, driverGames, itemGames, fastestDriver, difference
    };
    driverTracks += driverGames;
    itemTracks += itemGames;
    driverTrackWins += driverWins;
    itemTrackWins += itemWins;
  });

  return (
    <Container>
      <h3>{player}</h3>
      <select value={season} onChange={e => setSeason(e.target.value)}>
        <option value={0}>All Seasons</option>
        {[...new Set(props.records.map(r => r.season))].map(season => <option key={season} value={season}>Season {season}</option>)}
      </select>
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
                {records.length ? Object.values(tracks).flat().map(track => {
                  return (
                    <tr key={track}>
                      <td>{track}</td>
                      <td className={stats[track].difference === "-" ? "fw-bold" : null}>{stats[track].fastestDriver[track]}</td>
                      <td>{stats[track].difference}</td>
                      <td>{stats[track].driverWins}/{stats[track].driverGames}</td>
                      <td>{stats[track].itemWins}/{stats[track].itemGames}</td>
                      <td>{((stats[track].driverWins + stats[track].itemWins) / (stats[track].driverGames + stats[track].itemGames) * 100).toFixed(0)}%</td>
                    </tr>
                  );
                }) : null}
                <tr>
                  <td className="fw-bold">totals</td>
                  <td/>
                  <td/>
                  <td className="fw-bold">{(driverTrackWins / driverTracks * 100).toFixed(0)}%</td>
                  <td className="fw-bold">{(itemTrackWins / itemTracks * 100).toFixed(0)}%</td>
                  <td className="fw-bold">{((driverTrackWins + itemTrackWins) / (driverTracks + itemTracks) * 100).toFixed(0)}%</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Player;