import { Link, useNavigate } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import { trackSort } from "../utils/utils";
import Kart from "../components/Kart";

function TrackBlock({ data, track }) {
  let navigate = useNavigate();
  let times = data.slice(0).sort(trackSort(track)).slice(0, 5);
  return (
    <Card>
      <b className="clickable" onClick={() => navigate("/tracks/" + track)}>{track}</b>
      {times.map((time, i) => {
        return (
          <Row key={i}>
            <Col>{time.driver} + {time.items}</Col>
            <Col><Kart kart={time.kart} /></Col>
            <Col>{time[track]}</Col>
            <Col><Link to={`/runbacks/${time.runback}`}>ep. {time.runback}</Link></Col>
            <br/>
          </Row>
        )
      })}
    </Card>
  )
}

export default TrackBlock;