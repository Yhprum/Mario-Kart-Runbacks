import { Route, Routes } from "react-router-dom";
import TrackDetails from "./views/TrackDetails";
import Records from "./views/Records";
import Player from "./views/Player";
import Tracks from "./views/Tracks";
import Runbacks from "./views/Runbacks";
import RunbackDetails from "./views/RunbackDetails";
import Graphs from "./views/Graphs";
import Teams from "./views/Teams";
import TrackTierList from "./views/tier_lists/TrackTierList";
import KartStats from "./views/KartStats";
import Karts from "./views/Karts";

function Router(props) {
  return (
    <Routes>
      <Route path="/tracks/:track" element={<TrackDetails records={props.records} stats={props.stats} />} />
      <Route path="/tracks" element={<Tracks records={props.records} stats={props.stats} />} />
      <Route path="/players/:player" element={<Player records={props.records} runbacks={props.runbacks} stats={props.stats} />} />
      <Route path="/players" element={<Teams records={props.records} stats={props.stats} />} />
      <Route path="/runbacks/:runback" element={<RunbackDetails records={props.runbacks} />} />
      <Route path="/runbacks" element={<Runbacks records={props.records} />} />
      <Route path="/karts/stats" element={<KartStats />} />
      <Route path="/karts" element={<Karts records={props.records} stats={props.stats} />} />
      <Route path="/graphs" element={<Graphs records={props.records} />} />
      <Route path="/tier-list/tracks" element={<TrackTierList />} />
      <Route path="/" element={<Records records={props.records} />} />
    </Routes>
  );
}

export default Router;
