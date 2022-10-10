import { Container, Table } from "react-bootstrap";
import Kart from "../components/Kart";
import { kartStats } from "../data/kartStats";
import maps from "../data/maps.json";

function Karts({ records }) {
  let stats = {};
  kartStats.map(kart => kart.name).forEach(kart => {
    stats[kart] = {
      games: 0,
      wins: 0,
      nonMirrorGames: 0,
    }
  })
  for (let i = 0; i < records.length / 2; i++) {
    if (records[2 * i].time === "") continue;
    stats[records[2 * i].kart].games++;
    stats[records[2 * i + 1].kart].games++;

    // exclude mirror matchups from winrate
    if (records[2 * i].kart !== records[2 * i + 1].kart) {
      stats[records[2 * i].kart].nonMirrorGames++;
      stats[records[2 * i + 1].kart].nonMirrorGames++;
      let winner = records[2 * i].time < records[2 * i + 1].time ? 2 * i : 2 * i + 1;
      stats[records[winner].kart].wins++;
    }
  }
  const karts = kartStats.map(kart => {
    return {
      name: kart.name,
      count: records.filter(record => record.kart === kart.name).length
    }
  });

  return (
    <Container>
      <h4>Kart Stats</h4>
      <Table>
        <thead>
          <tr>
            <th />
            <th>Kart</th>
            <th>Race Count</th>
            <th>Winrate</th>
            <th>Number of Records</th>
            <th>Most Driver</th>
          </tr>
        </thead>
        <tbody>
          {karts.map((kart) => (
            <tr key={kart.name}>
              <td>
                <Kart kart={kart.name} />
              </td>
              <td>{kart.name}</td>
              <td>{kart.count}</td>
              <td>
                {stats[kart.name].nonMirrorGames > 0 ?
                  (stats[kart.name].wins / stats[kart.name].nonMirrorGames * 100).toFixed() + `% (${stats[kart.name].wins}/${stats[kart.name].nonMirrorGames})`
                  : "-"
                }
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Karts;
