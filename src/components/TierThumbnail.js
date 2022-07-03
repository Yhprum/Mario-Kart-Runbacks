import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function TierThumbnail({ item, type }) {
  let images = require.context("../img", true);

  return (
    <div className="tier-thumbnail">
      <Link to={`/tracks/${item.name}`}>
        <img src={images(`./${type}/${item.name}.png`).default} alt={item.name} />
      </Link>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id="scores">
            {item.scores.sort((a, b) => a.score - b.score).map(s =>
              <div key={s.name}>{s.name}: {s.score}</div>
            )}
          </Tooltip>
        }
      >
        <div className="light w-100">{item.score}</div>
      </OverlayTrigger>
    </div>
  );
}

export default TierThumbnail;