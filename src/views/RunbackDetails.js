import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import maps from "../data/maps.json";
import Chart from "chart.js/auto";
import { colors, bgColors, toDuration, toMs, trackSort, trackAbbv } from "../utils/utils";
import { Table } from "react-bootstrap";
import Kart from "../components/Kart";
import order from "../data/order";

function RunbackDetails({ records }) {
  const { runback } = useParams();
  let tracks = Object.values(maps).flat();
  tracks = tracks.sort((a, b) => order[runback].indexOf(trackAbbv[a]) - order[runback].indexOf(trackAbbv[b]));
  const info = records.filter(record => record.runback === runback);
  const runbackDetailsFilter = d => !["runback", "season", "link"].includes(d);

  useEffect(() => {
    if (!records.length) return;
    let runbacks = records.filter(record => record.runback === runback);
    let timeRecord = records.slice(0, Math.max(runback - 1, 1) * 2).sort(trackSort("time"))[0];
    let times = [[], []];
    runbacks.forEach((r, i) => {
      tracks.forEach(track => {
        times[i].push(toMs(r[track]) - (timeRecord ? toMs(timeRecord[track]) : 0));
      });
      times[i] = times[i].map((time, i, arr) => arr.slice(0, i + 1).reduce((a, b)=> a + b, 0));
    });
    let data = runbacks.map((runback, i) => ({
      label: runback.driver + " + " + runback.items,
      data: times[i],
      fill: false,
      backgroundColor: bgColors[i],
      borderColor: colors[i]
    }));
    data.push({
      label: `${timeRecord.driver} + ${timeRecord.items} (Runback ${timeRecord.runback})`,
      data: Array(16).fill(0),
      borderColor: "rgb(0,0,0)",
      borderWidth: 2,
      pointBorderColor: "rgba(0,0,0,0)",
      pointBackgroundColor: "rgba(0,0,0,0)"
    });

    let timeline = new Chart(document.getElementById("timeline"), {
      type: "line",
      data: {
        labels: tracks,
        datasets: data
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              callback: value => toDuration(value)
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: context => context.dataset.label + ": " + toDuration(context.parsed.y)
            }
          }
        }
      }
    });

    return () => timeline.destroy();
  }, [runback, records, tracks]);

  return (
    <div>
      <h4>Runback {runback}</h4>
      {info[0]?.link ? <a href={info[0].link}>youtube link</a> : <small>Youtube link not available</small>}
      <Table>
        <thead>
          <tr>
          {info.length ? Object.keys(info[0]).filter(runbackDetailsFilter).map(record =>
            <th key={record}>{record}</th>
          ) : null}
          </tr>
        </thead>
        <tbody>
        {info.map((record, i) => {
          return (
            <tr key={i}>
            {Object.keys(record).filter(runbackDetailsFilter).map(col => {
              return (
                col === "kart" ?
                  <td key={col}><Kart kart={record[col]} /></td>
                  :
                tracks.includes(col) ?
                  <td key={col} className={record[col] < info[1 - i][col] ? "track-win" : null}>{record[col]}</td>
                  :
                  <td key={col}>{record[col]}</td>
              );
            })}
            </tr>
          );
        })}
        </tbody>
      </Table>
      <div style={{"height": "60vh"}}>
        <canvas id="timeline"/>
      </div>
    </div>
  )
}

export default RunbackDetails;