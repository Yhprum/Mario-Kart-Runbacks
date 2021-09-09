export const trackSort = track => (a, b) => toMs(a[track]) - toMs(b[track]);

export function toMs(duration) {
  let arr = duration.split(/[:.]/);
  return arr[0] * 60 * 1000 + arr[1] * 1000 + arr[2];
}