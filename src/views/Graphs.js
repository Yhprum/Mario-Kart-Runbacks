import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { kartColors, karts, playerColors, players, toDuration, toMs } from "../utils/utils";
import Chart from "chart.js/auto";
import maps from "../data/maps.json";
import useTrackSelect, { TrackSelect } from "../hooks/useTrackSelect";

function Graphs({ records }) {
  const [track, setTrack] = useTrackSelect();
  const [graphType, setGraphType] = useState("player");

  useEffect(() => {
    if (!records.length) return;

    let playerRecords = players.map(player => records.filter(r => r.driver === player || r.items === player).map(record => record.driver === player && record[track] !== "desync" ? record : []));
    let data = playerRecords.map((record, i) => ({
      label: players[i],
      data: record.map(r => toMs(r[track])),
      backgroundColor: playerColors[players[i]],
      borderColor: playerColors[players[i]],
      spanGaps: true
    }));

    let timeline = new Chart(document.getElementById("timeline"), {
      type: "line",
      data: {
        labels: [...new Set(records.map(r => r.runback))],
        datasets: data
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: { callback: value => toDuration(value) }
          }
        },
        plugins: {
          tooltip: {
            callbacks: { label: context => context.dataset.label + ": " + toDuration(context.parsed.y) }
          }
        }
      }
    });

    let tracks = Object.values(maps).flat();
    let trackRecords = tracks.map(track => records.map((record, i) => records.slice(0, i + 2).reduce((prev, cur) => cur[track] < prev[track] ? cur : prev)));
    let numRecords = [];
    for (let i = 0; i < records.length / 2; i++) {
      if (graphType === "kart")
        numRecords[i] = karts.map(kart => trackRecords.map(t => t[i * 2]).reduce((prev, cur) => cur.kart === kart ? prev + 1 : prev, 0));
      else
        numRecords[i] = players.map(player => trackRecords.map(t => t[i * 2]).reduce((prev, cur) => cur.driver === player ? prev + 1 : prev, 0));
    }
    let items = graphType === "kart" ? karts : players;
    data = items.map((item, i) => {
      let color = graphType === "kart" ? kartColors[karts[i]] : playerColors[players[i]];
      return {
      label: item,
      data: numRecords.map(r => r[i]),
      backgroundColor: color,
      borderColor: color
    }});

    let trackRecordsChart = new Chart(document.getElementById("trackRecords"), {
      type: "bar",
      data: {
        labels: [...new Set(records.map(r => r.runback))],
        datasets: data
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true },
          y: { stacked: true }
        }
      }
    });

    return () => {
      timeline.destroy();
      trackRecordsChart.destroy();
    }
  }, [records, track, graphType]);

  return (
    <Container>
      <h3>Track Times</h3>
      <TrackSelect value={track} onChange={e => setTrack(e.target.value)} />
      <div style={{"height": "350px"}}>
        <canvas id="timeline"/>
      </div>
      <h3>Number of Track Records</h3>
      <div onChange={e => setGraphType(e.target.value)}>
        <input type="radio" value="player" name="type" defaultChecked/>{" Players "}
        <input type="radio" value="kart" name="type"/>{" Karts"}
      </div>
      <div style={{"height": "350px"}}>
        <canvas id="trackRecords"/>
      </div>
    </Container>
  );
}

export default Graphs;