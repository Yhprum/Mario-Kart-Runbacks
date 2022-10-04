import { toMs } from "./utils";
const regex = /\d*:\d{2}\.\d{3}/;

export const tableSort = (a, b, id, desc) => {
  a = a.original[id];
  b = b.original[id];
  desc = desc ? -1 : 1;
  if (!a || !b) return !a ? 1 * desc : -1 * desc;
  return regex.test(a) || regex.test(b) ? toMs(a) - toMs(b) : a.localeCompare(b, undefined, { numeric: true });
};

export const kartSort = (a, b, sort) => {
  let value = 0;
  sort.some((item) => {
    let direction = ["width", "bounciness"].includes(item.column) ? item.direction * -1 : item.direction;
    if (!a.ranks) debugger;
    let rankA = a.ranks[item.column];
    let rankB = b.ranks[item.column];
    if (rankA - rankB !== 0) {
      value = direction * (rankA - rankB);
      return true;
    }
    return false;
  });
  return value;
};
