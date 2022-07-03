import tracks from "../data/maps.json";
import { Row, Col, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { players, toMs } from "../utils/utils";
import Winrate from "../components/Winrate";
import Kart from "../components/Kart";

function Tracks({ records, stats }) {
  let navigate = useNavigate();
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
            {records.length ? players.map(player => {
              return (
                <tr key={player}>
                  <td className="clickable" onClick={() => navigate("/players/" + player)}>{player}</td>
                  <td><Winrate numerator={stats[player].driverTrackWins} denominator={stats[player].driverTracks} /></td>
                  <td><Winrate numerator={stats[player].itemTrackWins} denominator={stats[player].itemTracks} /></td>
                  <td><Winrate numerator={stats[player].driverTrackWins + stats[player].itemTrackWins} denominator={stats[player].driverTracks + stats[player].itemTracks} /></td>
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
            {records.length ? Object.values(tracks).flat().map(track => {
              let record = records.reduce((prev, cur) => toMs(cur[track]) < toMs(prev[track]) ? cur : prev);
              return (
                <tr key={track}>
                  <td className="clickable" onClick={() => navigate("/tracks/" + track)}>{track}</td>
                  <td>{record.driver}</td>
                  <td>{record.items}</td>
                  <td><Kart kart={record.kart} /></td>
                  <td>{record[track]}</td>
                  <td><Link to={`/runbacks/${record.runback}`}>ep. {record.runback}</Link></td>
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

export default Tracks;