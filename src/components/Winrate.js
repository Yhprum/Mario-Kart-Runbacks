import React from "react";

function Winrate(props) {
  let winrate = props.numerator / props.denominator * 100;
  return (
    <div>
      <div className="winrate">{winrate.toFixed(0)}%</div>
      <div className="light">{props.denominator} games</div>
    </div>
  );
}

export default Winrate;