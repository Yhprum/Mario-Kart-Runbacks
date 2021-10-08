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

export function toMs(duration) {
  let arr = duration.split(/[:.]/).map(num => parseInt(num));
  return arr[0] * 60 * 1000 + arr[1] * 1000 + arr[2];
}

export const toPercent = num => (num * 100).toFixed(0) + "%";

export const players = ["Ben", "Chris", "Derek", "Ryan"];