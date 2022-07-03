import tracks from "../../data/tier_lists/tracks.json";
import trackNames from "../../data/maps.json";
import TierThumbnail from "../../components/TierThumbnail";

function TrackTierList() {
  let trackScores = {};
  Object.values(trackNames).flat().forEach(track => {
    trackScores[track] = {
      "name": track,
      "score": Object.values(tracks).reduce((sum, cur) => sum + cur.indexOf(track) + 1, 0) / 4,
      "scores": Object.keys(tracks).map(player => ({ "name": player, "score": tracks[player].indexOf(track) + 1 }))
    };
  });

  return (
    <div className="container container-max-lg">
      <h4>Track Tier List</h4>
      <div className="tier-row">
        <div className="tier-header tier-s">S</div>
        <div className="tier-body">
          <TierThumbnail item={trackScores["Baby Park"]} type="tracks" />
          <TierThumbnail item={trackScores["Sherbet Land"]} type="tracks" />
          <TierThumbnail item={trackScores["DK Mountain"]} type="tracks" />
          <TierThumbnail item={trackScores["Rainbow Road"]} type="tracks" />
        </div>
      </div>
      <div className="tier-row">
        <div className="tier-header tier-a">A</div>
        <div className="tier-body">
          <TierThumbnail item={trackScores["Yoshi Circuit"]} type="tracks" />
          <TierThumbnail item={trackScores["Bowser's Castle"]} type="tracks" />
          <TierThumbnail item={trackScores["Dino Dino Jungle"]} type="tracks" />
          <TierThumbnail item={trackScores["Mushroom Bridge"]} type="tracks" />
        </div>
      </div>
      <div className="tier-row">
        <div className="tier-header tier-b">B</div>
        <div className="tier-body">
          <TierThumbnail item={trackScores["Peach Beach"]} type="tracks" />
          <TierThumbnail item={trackScores["Wario Colosseum"]} type="tracks" />
          <TierThumbnail item={trackScores["Daisy Cruiser"]} type="tracks" />
          <TierThumbnail item={trackScores["Mushroom City"]} type="tracks" />
          <TierThumbnail item={trackScores["Waluigi Stadium"]} type="tracks" />
        </div>
      </div>
      <div className="tier-row">
        <div className="tier-header tier-c">C</div>
        <div className="tier-body">
          <TierThumbnail item={trackScores["Luigi Circuit"]} type="tracks" />
          <TierThumbnail item={trackScores["Mario Circuit"]} type="tracks" />
          <TierThumbnail item={trackScores["Dry Dry Desert"]} type="tracks" />
        </div>
      </div>
    </div>
  )
}

export default TrackTierList;