import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { players, teams, toPercent } from "../utils/utils";
import Winrate from "../components/Winrate";
import Kart from "../components/Kart";

function Teams({ stats, records }) {

  let teamRecords = {};
  if (records) teams.forEach(team => {
    let games = records.filter(record => record.driver === team.driver && record.items === team.items && record.result !== "desync");
    teamRecords[Object.values(team)] = {
      games: games.length,
      wins: games.reduce((sum, record) => sum + (record.result === "win" ? 1 : 0), 0)
    }
  });

  return (
    <div className="container">
      <h4>Teams</h4>
      <Table>
        <thead>
        <tr>
          <th>Driver</th>
          <th>Items</th>
          <th>Occurrences</th>
          <th>Runbacks</th>
          <th>Tracks</th>
        </tr>
        </thead>
        <tbody>
        {teams.map(team => [
          <tr key={team.driver + team.items}>
            <td>{team.driver}</td>
            <td>{team.items}</td>
            <td>{records.length ? teamRecords[Object.values(team)].games : 0}</td>
            <td>{records.length ? toPercent(teamRecords[Object.values(team)].wins / teamRecords[Object.values(team)].games) : "0%"}</td>
            <td>{toPercent(stats[Object.values(team)].wins / stats[Object.values(team)].tracks)}</td>
          </tr>
        ])}
        </tbody>
      </Table>
    </div>
  )
}

export default withRouter(Teams);