import React, { useMemo } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import Kart from "../components/Kart";
import { Link } from "react-router-dom";
import {toMs} from "../utils/utils";

function Runbacks({ records }) {
  const columns = useMemo(() => {
    if (!records.length) return [];
    let cols = Object.keys(records[0]).filter(c=>c!=="link").map(column => ({ Header: column, accessor: column }));
    cols[cols.findIndex(c=>c.accessor==="runback")] = {
      Header: "Episode",
      accessor: "runback",
      sortMethod: (a, b) => a - b,
      Cell: row => <Link to={`/runbacks/${row.original.runback}`}>ep. {row.original.runback}</Link>
    };
    cols[cols.findIndex(c=>c.accessor==="kart")] = {
      Header: "kart",
      accessor: "kart",
      Cell: row => <Kart kart={row.original.kart} />
    };
    [cols[0], cols[1]] = [cols[1], cols[0]];
    return cols;
  }, [records]);

  const data = useMemo(() => records, [records]);
  const regex = /[0-9]*:[0-9]{2}\.[0-9]{3}/;

  return (
    <div>
      <ReactTable
        data={data}
        pageSize={data.length}
        columns={columns}
        showPagination={false}
        className="runbacks"
        defaultSortMethod={(a, b) => regex.test(a) || regex.test(b) ? toMs(a) - toMs(b) : a.localeCompare(b)}
      />
    </div>
  )
}

export default Runbacks;