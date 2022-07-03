import { Table } from "react-bootstrap";
import { teams, toMs, toPercent } from "../utils/utils";
import maps from "../data/maps.json";

function Teams({ stats, records }) {
  let teamRecords = {};
  if (records.length) {
    let tracks = Object.values(maps).flat();
    let trackRecords = tracks.map(track => records.reduce((prev, cur) => toMs(cur[track]) < toMs(prev[track]) ? cur : prev));

    teams.forEach(team => {
      let games = records.filter(record => record.driver === team.driver && record.items === team.items && record.result !== "");
      teamRecords[Object.values(team)] = {
        games: games.length,
        wins: games.reduce((sum, record) => sum + (record.result === "win" ? 1 : 0), 0),
        fastest: games.length ? games.reduce((fastest, cur) => toMs(cur.time) < toMs(fastest.time) ? cur : fastest) : 0,
        records: trackRecords.reduce((sum, record) => sum + (record.driver === team.driver && record.items === team.items ? 1 : 0), 0)
      }
    });
    teams.sort((a, b) => (teamRecords[Object.values(b)].wins / teamRecords[Object.values(b)].games) - (teamRecords[Object.values(a)].wins / teamRecords[Object.values(a)].games));
  }

  return (
    <div className="container">
      <h4>Teams</h4>
      <Table>
        <thead>
        <tr>
          <th>Driver</th>
          <th>Items</th>
          <th>Occurrences</th>
          <th>Fastest Time</th>
          <th>Number of Records</th>
          <th>Runbacks</th>
          <th>Tracks</th>
        </tr>
        </thead>
        <tbody>
        {records.length ? teams.map(team =>
          <tr key={team.driver + team.items}>
            <td>{team.driver}</td>
            <td>{team.items}</td>
            <td>{teamRecords[Object.values(team)].games}</td>
            <td>{teamRecords[Object.values(team)].fastest.time}</td>
            <td>{teamRecords[Object.values(team)].records}</td>
            <td>{toPercent(teamRecords[Object.values(team)].wins / teamRecords[Object.values(team)].games)}</td>
            <td>{toPercent(stats[Object.values(team)].wins / stats[Object.values(team)].tracks)}</td>
          </tr>
        ) : null}
        </tbody>
      </Table>
    </div>
  )
}

export default Teams;