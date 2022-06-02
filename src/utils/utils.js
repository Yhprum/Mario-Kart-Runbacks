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
  if (duration === undefined) return null;
  if (duration === "") return Infinity;
  let arr = duration.split(/[:.]/).map(num => parseInt(num));
  return arr[0] * 60 * 1000 + arr[1] * 1000 + arr[2];
}

export const toPercent = num => (num * 100).toFixed(0) + "%";

const RED = "rgb(255, 71, 24)";
const BLUE = "rgb(0, 83, 234)";
const GREEN = "rgb(0, 169, 0)";
const YELLOW = "rgb(255, 195, 0)";
export const colors = [RED, BLUE, GREEN, YELLOW];
export const bgColors = colors.map(c=>c.replace("rgb", "rgba").replace(")", ",.5)"));

export const players = ["Ben", "Chris", "Derek", "Ryan"];
export const playerColors = { "Ryan": RED, "Derek": BLUE, "Ben": GREEN, "Chris": YELLOW };

let teamsArr = [];
players.forEach(driver => {
  players.forEach(items => {
    if (driver !== items) teamsArr.push({ driver, items })
  });
});
export const teams = teamsArr;

export const karts = ["train", "blue", "pink", "green", "waluigi", "bullet", "daisy", "parade"];
export const kartColors = { "train": "rgb(240,104,0)", "blue": BLUE, "pink": "rgb(255,110,224)", "green": GREEN, "waluigi": "rgb(166,0,255)", "bullet": "rgb(100,100,100)", "daisy": "rgb(229,129,33)", "parade": "rgb(255,215,0)", "mario": RED };

export const trackAbbv = {
  "Luigi Circuit": "LC",
  "Peach Beach": "PB",
  "Baby Park": "BP",
  "Dry Dry Desert": "DDD",
  "Mushroom Bridge": "MB",
  "Mario Circuit": "MCR",
  "Daisy Cruiser": "DC",
  "Waluigi Stadium": "WS",
  "Sherbet Land": "SL",
  "Mushroom City": "MCT",
  "Yoshi Circuit": "YC",
  "DK Mountain": "DKM",
  "Wario Colosseum": "WC",
  "Dino Dino Jungle": "DDJ",
  "Bowser's Castle": "BC",
  "Rainbow Road": "RR"
};