import React, { useMemo } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import { Link, useParams, withRouter } from "react-router-dom";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { players } from "../utils/utils";
import Winrate from "../components/Winrate";

function TrackDetails(props) {
  const { track } = useParams();

  const columns = React.useMemo(() => [
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
        accessor: "kart"
      },
      {
        Header: "Time",
        accessor: "time"
      },
      {
        Header: "Episode",
        accessor: "runback",
        sortType: (a, b) => a.number - b.number,
        Cell: row => <Link to={`/runbacks/${row.original.runback}`}>ep. {row.original.runback}</Link>
      }
    ], []
  );

  const data = useMemo(() => props.records.map(record => {
      return {
        runback: record.runback,
        driver: record.driver,
        items: record.items,
        kart: record.kart,
        time: record[track]
      }
    }), [props.records, track]
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
              {props.records.length ? players.map(player => {
                let t = props.stats[player][track];
                return (
                  <tr key={player}>
                    <td className="clickable" onClick={() => props.history.push("/players/" + player)}>{player}</td>
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

export default withRouter(TrackDetails);