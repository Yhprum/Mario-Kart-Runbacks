import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Papa from "papaparse";
import data from "./data/runbacks.csv";
import Routes from "./Routes";

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    Papa.parse(data, {
      download: true,
      header: true,
      complete: function (input) {
        setRecords(input.data);
      }
    });
  },[]);

  return (
    <div className="App">
      <Routes records={records} />
    </div>
  );
}

export default App;
