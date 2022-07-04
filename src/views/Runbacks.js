import { useMemo } from "react";
import Kart from "../components/Kart";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useTable, useSortBy } from "react-table";
import { tableSort } from "../utils/tableUtils";

function Runbacks({ records }) {
  const columns = useMemo(() => {
    if (!records.length) return [];
    let cols = Object.keys(records[0]).filter(c=>c!=="link").map(column => ({ Header: column, accessor: column }));
    cols[cols.findIndex(c=>c.accessor==="runback")] = {
      Header: "Episode",
      accessor: "runback",
      Cell: ({ row }) => <Link to={`/runbacks/${row.original.runback}`}>ep. {row.original.runback}</Link>
    };
    cols[cols.findIndex(c=>c.accessor==="kart")] = {
      Header: "kart",
      accessor: "kart",
      Cell: ({ row }) => <Kart kart={row.original.kart} />
    };
    [cols[0], cols[1]] = [cols[1], cols[0]];
    return cols;
  }, [records]);
  const data = useMemo(() => records, [records]);
  const sortTypes = {
    alphanumeric: useMemo(() => tableSort, [])
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data, sortTypes }, useSortBy);

  return (
    <div>
      <Table bordered className="runbacks" {...getTableProps()}>
        <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className={column.isSorted ? column.isSortedDesc ? "sort-desc" : "sort-asc" : ""} {...column.getHeaderProps(column.getSortByToggleProps({ title: column.Header }))}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
        </tbody>
      </Table>
    </div>
  )
}

export default Runbacks;