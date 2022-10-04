import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import Kart from "../components/Kart";
import ThIcon from "../components/ThIcon";
import { kartStats, kartTiers } from "../data/kartStats";
import { kartSort } from "../utils/tableUtils";
import { deepCopy } from "../utils/utils";

function KartStats() {
  const [karts, setKarts] = useState([]);
  const [sort, setSort] = useState([]);
  const type = "ranks";

  const sortTable = (e, column) => {
    let sortIndex = sort.findIndex((s) => s.column === column);
    if (sortIndex !== -1) {
      setSort((old) => {
        let newSort = deepCopy(old);
        if (!e.shiftKey) {
          newSort = [newSort[sortIndex]];
          sortIndex = 0;
        }
        if (newSort[sortIndex].direction === 1) {
          newSort.splice(sortIndex, 1);
        } else {
          newSort[sortIndex] = { column, direction: 1 };
        }
        return newSort;
      });
    } else {
      if (e.shiftKey) {
        setSort((old) => [...deepCopy(old), { column, direction: -1 }]);
      } else {
        setSort([{ column, direction: -1 }]);
      }
    }
  };

  useEffect(() => {
    if (sort.length === 0) {
      setKarts(kartStats);
    } else {
      setKarts((karts) => deepCopy(karts).sort((a, b) => kartSort(a, b, sort)));
    }
  }, [sort]);

  const tier = (kart, stat) => "tier-" + ["d", "c", "b", "a", "s"][kartTiers[stat].findIndex((tier) => tier.includes(kart.ranks[stat]))];

  return (
    <Container>
      <h4>Kart Stats</h4>
      <Table className="sort-icons">
        <thead>
          <tr>
            <th onClick={() => setSort([])} />
            <th onClick={() => setSort([])}>Kart</th>
            <ThIcon value="topSpeed" header="Top Speed" sort={sort} onClick={sortTable} />
            <ThIcon value="acceleration" header="Acceleration" sort={sort} onClick={sortTable} />
            <ThIcon value="offRoad" header="Off-Road" sort={sort} onClick={sortTable} />
            <ThIcon value="weight" header="Weight" sort={sort} onClick={sortTable} />
            <ThIcon value="width" header="Width" sort={sort} onClick={sortTable} />
            <ThIcon value="bounciness" header="Bounciness" sort={sort} onClick={sortTable} />
            <ThIcon value="miniTurbo" header="Mini-Turbo" sort={sort} onClick={sortTable} />
            <ThIcon value="rank" header="Our Ranking" sort={sort} onClick={sortTable} />
          </tr>
        </thead>
        <tbody>
          {karts.map((kart) => (
            <tr key={kart.name}>
              <td>
                <Kart kart={kart.name} />
              </td>
              <td>{kart.name}</td>
              <td className={tier(kart, "topSpeed")}>{kart[type].topSpeed}</td>
              <td className={tier(kart, "acceleration")}>{kart[type].acceleration}</td>
              <td className={tier(kart, "offRoad")}>{kart[type].offRoad}</td>
              <td className={tier(kart, "weight")}>{kart[type].weight}</td>
              <td className={tier(kart, "width")}>{kart[type].width}</td>
              <td className={tier(kart, "bounciness")}>{kart[type].bounciness}</td>
              <td className={tier(kart, "miniTurbo")}>{kart[type].miniTurbo}</td>
              <td>tbd</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default KartStats;
