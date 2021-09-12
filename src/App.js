import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Papa from "papaparse";
import data from "./data/runbacks.csv";
import Routes from "./Routes";
import Header from "./views/Header";
import tracks from "./data/maps.json";
import { players, subtractDuration } from "./utils/utils";

function App() {
  const [runbacks, setRunbacks] = useState([]);

  useEffect(() => {
    Papa.parse(data, {
      download: true,
      header: true,
      complete: function (input) {
        setRunbacks(input.data);
      }
    });
  },[]);

  let stats = {};
  players.forEach(player => {
    stats[player] = {}
  });
  runbacks.length && Object.values(tracks).flat().forEach(track => {
    players.forEach(player => {
      stats[player][track] = {
        driverWins: 0,
        itemWins: 0,
        driverGames: 0,
        itemGames: 0,
        fastestDriver: {}
      }
    });

    for (let i = 0; i < runbacks.length / 2; i++) {
      if (runbacks[2 * i][track] === "desync") continue;
      stats[runbacks[2 * i].driver].driverTracks++;
      stats[runbacks[2 * i].items].itemTracks++;
      stats[runbacks[2 * i + 1].driver].driverTracks++;
      stats[runbacks[2 * i + 1].items].itemTracks++;

      stats[runbacks[2 * i].driver][track].driverGames++;
      stats[runbacks[2 * i].items][track].itemGames++;
      stats[runbacks[2 * i + 1].driver][track].driverGames++;
      stats[runbacks[2 * i + 1].items][track].itemGames++;

      let winner = runbacks[2 * i][track] < runbacks[2 * i + 1][track] ? 2 * i : 2 * i + 1;
      stats[runbacks[winner].driver][track].driverWins++;
      stats[runbacks[winner].items][track].itemWins++;
      stats[runbacks[winner].driver].driverTrackWins++;
      stats[runbacks[winner].items].itemTrackWins++;

      if (stats[runbacks[2 * i].driver][track].fastestDriver[track] === undefined || runbacks[2 * i][track] < stats[runbacks[2 * i].driver][track].fastestDriver[track]) {
        stats[runbacks[2 * i].driver][track].fastestDriver = runbacks[2 * i];
      }
      if (stats[runbacks[2 * i + 1].driver][track].fastestDriver[track] === undefined || runbacks[2 * i + 1][track] < stats[runbacks[2 * i + 1].driver][track].fastestDriver[track]) {
        stats[runbacks[2 * i + 1].driver][track].fastestDriver = runbacks[2 * i + 1];
      }
    }
    let record = runbacks.map(r => r[track]).reduce((prev, cur) => cur < prev ? cur : prev);
    players.forEach(player => {
      let difference = subtractDuration(stats[player][track].fastestDriver[track], record);
      difference = difference === 0 ? "-" : "+" + difference.toFixed(3);
      stats[player][track].difference = difference;
    });
  });

  return (
    <div className="App">
      <Header />
      <Routes records={runbacks} stats={stats} />
    </div>
  );
}

export default App;
