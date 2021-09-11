import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Papa from "papaparse";
import data from "./data/runbacks.csv";
import tracks from "./data/maps.json";
import Routes from "./Routes";
import Header from "./views/Header";
import { trackSort } from "./utils/utils";

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

  function calculateRecords(races) {
    let records = {};
    races.forEach(race => {
      Object.values(tracks).flat().forEach(track => {
        if (records[track] === undefined || race[track] < records[track]) records[track] = race[track];
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <Routes records={runbacks} />
    </div>
  );
}

export default App;
