export const trackSort = track => (a, b) => toMs(a[track]) - toMs(b[track]);

export const subtractDuration = (a, b) => {
  if (a === undefined || b === undefined) return 0;
  let ms = toMs(a) - toMs(b);
  return Math.floor(ms / 1000) + (ms % 1000) / 1000;
};

export const total = times => {
  if (!times.length) return 0;
  if (times[0] === undefined) return null;
  let ms = times.map(toMs).reduce((a, b) => a + b);
  let mins = Math.floor(ms / 1000 / 60);
  ms %= 60000;
  let seconds = Math.floor(ms / 1000);
  ms %= 1000;
  return mins + ":" + seconds.toString().padStart(2, "0") + "." + ms;
};

export const toDuration = ms => {
  let negative = ms < 0 ? "-" : "";
  ms = Math.abs(ms);
  let mins = Math.floor(ms / 1000 / 60);
  mins = mins === 0 ? "" : mins + ":";
  ms %= 60000;
  let seconds = Math.floor(ms / 1000);
  seconds = mins === "" ? seconds : seconds.toString().padStart(2, "0");
  ms %= 1000;
  return negative + mins + seconds + "." + ms;
};

export function toMs(duration) {
  let arr = duration.split(/[:.]/).map(num => parseInt(num));
  return arr[0] * 60 * 1000 + arr[1] * 1000 + arr[2];
}

export const toPercent = num => (num * 100).toFixed(0) + "%";

export const colors = ["rgb(255, 71, 24)", "rgb(0, 83, 234)", "rgb(0, 169, 0)", "rgb(255, 195, 0)"];
export const bgColors = colors.map(c=>c.replace("rgb", "rgba").replace(")", ",.5)"));

export const players = ["Ben", "Chris", "Derek", "Ryan"];

export const trackAbbv = {
  LC: "Luigi Circuit",
  PB: "Peach Beach",
  BP: "Baby Park",
  DDD: "Dry Dry Desert",
  MB: "Mushroom Bridge",
  MCR: "Mario Circuit",
  DC: "Daisy Cruiser",
  WS: "Waluigi Stadium",
  SL: "Sherbet Land",
  MCT: "Mushroom City",
  YS: "Yoshi Circuit",
  DKM: "DK Mountain",
  WC: "Wario Colosseum",
  DDJ: "Dino Dino Jungle",
  BC: "Bowser's Castle",
  RR: "Rainbow Road"
};