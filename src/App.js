import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/table.css";
import "./css/tiers.css";
import Papa from "papaparse";
import data from "./data/runbacks.csv";
import Router from "./Router";
import Header from "./views/Header";
import tracks from "./data/maps.json";
import { players, teams, subtractDuration, toMs } from "./utils/utils";

function App() {
  const [runbacks, setRunbacks] = useState([]);
  const [season, setSeason] = useState("0");

  useEffect(() => {
    Papa.parse(data, {
      download: true,
      header: true,
      complete: function (input) {
        setRunbacks(input.data);
      }
    });
  },[]);

  let records = parseInt(season) === 0 ? runbacks : runbacks.filter(record => record.season === season);

  let stats = {};
  players.forEach(player => {
    stats[player] = {
      driverTracks: 0,
      itemTracks: 0,
      driverTrackWins: 0,
      itemTrackWins: 0
    }
  });
  teams.forEach(team => {
    stats[Object.values(team)] = {
      tracks: 0,
      wins: 0
    };
  })
  records.length && Object.values(tracks).flat().forEach(track => {
    players.forEach(player => {
      stats[player][track] = {
        driverWins: 0,
        itemWins: 0,
        driverGames: 0,
        itemGames: 0,
        fastestDriver: {}
      }
    });

    for (let i = 0; i < records.length / 2; i++) {
      if (records[2 * i][track] === "") continue;
      stats[records[2 * i].driver].driverTracks++;
      stats[records[2 * i].items].itemTracks++;
      stats[[records[2 * i].driver, records[2 * i].items]].tracks++;
      stats[records[2 * i + 1].driver].driverTracks++;
      stats[records[2 * i + 1].items].itemTracks++;
      stats[[records[2 * i + 1].driver, records[2 * i + 1].items]].tracks++;

      stats[records[2 * i].driver][track].driverGames++;
      stats[records[2 * i].items][track].itemGames++;
      stats[records[2 * i + 1].driver][track].driverGames++;
      stats[records[2 * i + 1].items][track].itemGames++;

      let winner = records[2 * i][track] < records[2 * i + 1][track] ? 2 * i : 2 * i + 1;
      stats[records[winner].driver][track].driverWins++;
      stats[records[winner].items][track].itemWins++;
      stats[records[winner].driver].driverTrackWins++;
      stats[records[winner].items].itemTrackWins++;
      stats[[records[winner].driver, records[winner].items]].wins++;

      if (stats[records[2 * i].driver][track].fastestDriver[track] === undefined || records[2 * i][track] < stats[records[2 * i].driver][track].fastestDriver[track]) {
        stats[records[2 * i].driver][track].fastestDriver = records[2 * i];
      }
      if (stats[records[2 * i + 1].driver][track].fastestDriver[track] === undefined || records[2 * i + 1][track] < stats[records[2 * i + 1].driver][track].fastestDriver[track]) {
        stats[records[2 * i + 1].driver][track].fastestDriver = records[2 * i + 1];
      }
    }
    let record = runbacks.map(r => r[track]).reduce((prev, cur) => toMs(cur) < toMs(prev) ? cur : prev);
    players.forEach(player => stats[player][track].difference = subtractDuration(stats[player][track].fastestDriver[track], record));
  });

  return (
    <div className="App">
      <Header season={season} setSeason={setSeason} />
      <Router records={records} stats={stats} runbacks={runbacks} />
    </div>
  );
}

export default App;