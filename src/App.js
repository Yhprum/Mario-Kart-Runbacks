import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Papa from "papaparse";
import data from "./data/runbacks.csv";
import Routes from "./Routes";
import Header from "./views/Header";

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

  return (
    <div className="App">
      <Header />
      <Routes records={runbacks} />
    </div>
  );
}

export default App;
