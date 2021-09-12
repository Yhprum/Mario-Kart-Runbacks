export const trackSort = track => (a, b) => toMs(a[track]) - toMs(b[track]);

export const subtractDuration = (a, b) => {
  if (a === undefined || b === undefined) return 0;
  let ms = toMs(a) - toMs(b);
  return Math.floor(ms / 1000) + (ms % 1000) / 1000;
};

export function toMs(duration) {
  let arr = duration.split(/[:.]/).map(num => parseInt(num));
  return arr[0] * 60 * 1000 + arr[1] * 1000 + arr[2];
}

export const players = ["Ben", "Chris", "Derek", "Ryan"];