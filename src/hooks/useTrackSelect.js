import React, { useCallback, useState } from "react";
import tracks from "../data/maps.json";

export default function useTrackSelect(initialState = "time") {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(track => setState(track), []);
  return [state, toggle];
}

export const TrackSelect = ({ value, onChange }) => (
  <select value={value} onChange={onChange}>
    <option value="time">Total Time</option>
    {Object.values(tracks).flat().map(track => <option key={track} value={track}>{track}</option>)}
  </select>
);