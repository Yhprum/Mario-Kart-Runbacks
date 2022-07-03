import { useEffect } from "react";
import { bgColors, colors, toDuration, toMs } from "../utils/utils";
import Chart from "chart.js/auto";

function LineGraph({ records, player, track }) {
  useEffect(() => {
    if (!records.length) return;

    let times = records.filter(record => record.driver === player && record[track] !== "");
    let data = {
      label: "Time",
      data: times.map(r => toMs(r[track])),
      backgroundColor: bgColors[0],
      borderColor: colors[0]
    };

    let timeline = new Chart(document.getElementById("timeline"), {
      type: "line",
      data: {
        labels: times.map(r => r.runback),
        datasets: [data]
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
  }, [records, player, track]);

  return (
    <div>
      <canvas id="timeline"/>
    </div>
  );
}

export default LineGraph;