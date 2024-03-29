import tracks from "../data/maps.json";
import { Row, Col, Tabs, Tab, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import TrackBlock from "./TrackBlock";
import Mushroom from "../img/cups/mushroom.png";
import Flower from "../img/cups/flower.png";
import Star from "../img/cups/star.png";
import Special from "../img/cups/special.png";
import { players, trackSort } from "../utils/utils";
import Winrate from "../components/Winrate";
import Kart from "../components/Kart";

function Records({ records }) {
  let navigate = useNavigate();
  let cups = { Mushroom, Flower, Star, Special };

  return (
    <div className="container">
      <Row>
        <Col>
          <h4>Stats</h4>
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
            {records.length ? players.map(player => {
              let driverGames = records.filter(r => r.driver === player && r.result !== "");
              let driverWins = driverGames.filter(r => r.result === "win");
              let itemGames = records.filter(r => r.items === player && r.result !== "");
              let itemWins = itemGames.filter(r => r.result === "win");
              return (
                <tr key={player}>
                  <td className="clickable" onClick={() => navigate("/players/" + player)}>{player}</td>
                  <td><Winrate numerator={driverWins.length} denominator={driverGames.length} /></td>
                  <td><Winrate numerator={itemWins.length} denominator={itemGames.length} /></td>
                  <td><Winrate numerator={driverWins.length + itemWins.length} denominator={driverGames.length + itemGames.length} /></td>
                </tr>
              );
            }) : null}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h3>Leaderboard</h3>
          <Table>
            <thead>
            <tr>
              <th/>
              <th>Driver</th>
              <th>Items</th>
              <th>Kart</th>
              <th>Time</th>
              <th>Link</th>
            </tr>
            </thead>
            <tbody>
            {records.length ? records.slice(0).sort(trackSort("time")).slice(0, 5).map((record, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{record.driver}</td>
                  <td>{record.items}</td>
                  <td><Kart kart={record.kart} /></td>
                  <td>{record.time}</td>
                  <td><Link to={`/runbacks/${record.runback}`}>ep. {record.runback}</Link></td>
                </tr>
              );
            }) : null}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Tabs variant="pills" className="justify-content-center">
        {Object.keys(tracks).map(cup => {
          return (
            <Tab key={cup} eventKey={cup} title={<img src={cups[cup.split(" ")[0]]} alt={cup} />}>
              <hr/>
              <Row>
                {tracks[cup].map(track => {
                  return (
                    <Col md={6} key={track}>
                      <TrackBlock track={track} data={records} />
                    </Col>
                  );
                })}
              </Row>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  )
}

export default Records;