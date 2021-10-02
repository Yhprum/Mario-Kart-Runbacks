import React, { useMemo } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import Kart from "../components/Kart";

function Runbacks({ records }) {
  const columns = React.useMemo(() => {
    if (!records.length) return [];
    let cols = Object.keys(records[0]).filter(c=>c!=="link").map(column => ({ Header: column, accessor: column }));
    cols[cols.findIndex(c=>c.accessor==="runback")] = {
      Header: "Episode",
      accessor: "runback",
      sortType: (a, b) => a.number - b.number,
      Cell: row => <a href={row.original.link}>ep. {row.original.runback}</a>
    };
    cols[cols.findIndex(c=>c.accessor==="kart")] = {
      Header: "kart",
      accessor: "kart",
      Cell: row => <Kart kart={row.original.kart} />
    };
    [cols[0], cols[1]] = [cols[1], cols[0]];
    return cols;
  }, [records])

  const data = useMemo(() => records, [records]);

  return (
    <div>
      <h4>Runbacks</h4>
      <ReactTable
        data={data}
        pageSize={data.length}
        columns={columns}
        showPagination={false}
        className="-striped -highlight"
      />
    </div>
  )
}

export default Runbacks;