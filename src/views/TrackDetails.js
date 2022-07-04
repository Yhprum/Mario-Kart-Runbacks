import { useMemo } from "react";
import { Container, Table, Row, Col, Button } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { players } from "../utils/utils";
import Winrate from "../components/Winrate";
import Kart from "../components/Kart";
import { useTable, useSortBy, usePagination } from "react-table";
import { tableSort } from "../utils/tableUtils";

function TrackDetails({ records, stats }) {
  let navigate = useNavigate();
  const { track } = useParams();

  const columns = useMemo(() => [
      {
        Header: "Driver",
        accessor: "driver"
      },
      {
        Header: "Items",
        accessor: "items"
      },
      {
        Header: "kart",
        accessor: "kart",
        Cell: ({ row }) => <Kart kart={row.original.kart}/>
      },
      {
        Header: "Time",
        accessor: "time",
      },
      {
        Header: "Episode",
        accessor: "runback",
        Cell: ({ row }) => <Link to={`/runbacks/${row.original.runback}`}>ep. {row.original.runback}</Link>
      }
    ], []
  );

  const data = useMemo(() => records.map(record => {
      return {
        runback: record.runback,
        driver: record.driver,
        items: record.items,
        kart: record.kart,
        time: record[track]
      }
    }), [records, track]
  );
  const sortTypes = {
    alphanumeric: useMemo(() => tableSort, [])
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable({
    columns,
    data,
    sortTypes,
    initialState: {
      sortBy: useMemo(() => [{ id: "time" }], [])}
    },
    useSortBy,
    usePagination
  );

  return (
    <Container>
      <h3>{track}</h3>
      <Row>
        <Col>
          <h4>Stats</h4>
          <Table bordered size="sm">
            <thead>
              <tr>
                <th/>
                <th>Driver Record</th>
                <th>Items Record</th>
                <th>Total Record</th>
              </tr>
            </thead>
            <tbody>
              {records.length ? players.map(player => {
                let t = stats[player][track];
                return (
                  <tr key={player}>
                    <td className="clickable" onClick={() => navigate("/players/" + player)}>{player}</td>
                    <td><Winrate numerator={t.driverWins} denominator={t.driverGames} /></td>
                    <td><Winrate numerator={t.itemWins} denominator={t.itemGames} /></td>
                    <td><Winrate numerator={t.driverWins + t.itemWins} denominator={t.driverGames + t.itemGames} /></td>
                  </tr>
                );
              }) : null}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h4>Standings</h4>
          <Table bordered className="tracks" {...getTableProps()}>
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
            {page.map(row => {
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
          <div className="pagination">
            <Button variant="outline-secondary" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </Button>{' '}
            <Button variant="outline-secondary" onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'<'}
            </Button>{' '}
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <Button variant="outline-secondary" onClick={() => nextPage()} disabled={!canNextPage}>
              {'>'}
            </Button>{' '}
            <Button variant="outline-secondary" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {'>>'}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TrackDetails;