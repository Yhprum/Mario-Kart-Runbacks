import { useMemo } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { players, toMs } from "../utils/utils";
import Winrate from "../components/Winrate";
import Kart from "../components/Kart";

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
        Cell: row => <Kart kart={row.original.kart}/>
      },
      {
        Header: "Time",
        accessor: "time",
        sortMethod: (a, b) => toMs(a) - toMs(b),
      },
      {
        Header: "Episode",
        accessor: "runback",
        sortMethod: (a, b) => a - b,
        Cell: row => <Link to={`/runbacks/${row.original.runback}`}>ep. {row.original.runback}</Link>
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
          <ReactTable
            data={data}
            pageSize={data.length}
            columns={columns}
            showPagination={false}
            className="-striped -highlight"
            defaultSorted={[{id: "time"}]}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default TrackDetails;