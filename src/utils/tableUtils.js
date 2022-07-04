import { toMs } from "./utils";
const regex = /\d*:\d{2}\.\d{3}/;

export const tableSort = (a, b, id, desc) => {
  a = a.original[id];
  b = b.original[id];
  desc = desc ? -1 : 1;
  if (!a || !b) return !a ? 1 * desc : -1 * desc;
  return regex.test(a) || regex.test(b) ? toMs(a) - toMs(b) : a.localeCompare(b, undefined, { numeric: true });
}