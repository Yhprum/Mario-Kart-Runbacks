function Winrate({ numerator, denominator }) {
  let winrate = numerator / denominator * 100;
  return (
    <div>
      <div className="winrate">{winrate.toFixed(0)}%</div>
      <div className="light">{denominator} games</div>
    </div>
  );
}

export default Winrate;