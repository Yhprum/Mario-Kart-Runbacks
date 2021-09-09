import React, { useMemo } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

function TrackDetails(props) {

  const { track } = useParams();

  const columns = React.useMemo(() => [
      {
        Header: "#",
        accessor: "runback"
      },
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
      }
    ], []
  );

  const sort = (a, b) => {
    if (typeof a === "number") {
      return b - a;
    } else {
      return a.localeCompare(b);
    }
  };

  const data = useMemo(() => props.records.map(record => {
      return {
        runback: record.runback,
        driver: record.driver,
        items: record.items,
        kart: record.kart,
        time: record[track]
      }
    }), [props.records]
  );

  return (
    <Container>
      <h3>{track}</h3>
      <ReactTable
        data={data}
        pageSize={data.length}
        columns={columns}
        defaultSortMethod={sort}
        showPagination={false}
        className="-striped -highlight"
        defaultSorted={[{id: "time"}]}
      />
    </Container>
  )
}

export default TrackDetails;