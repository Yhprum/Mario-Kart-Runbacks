import React from "react";

function Winrate(props) {
  let winrate = props.numerator / props.denominator * 100;
  return (
    <div>
      <div>{winrate.toFixed(0)}%</div>
      <div>{props.numerator}/{props.denominator}</div>
    </div>
  );
}

export default Winrate;