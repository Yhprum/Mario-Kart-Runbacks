import React from "react";
import train from "../img/karts/train.png";
import blue from "../img/karts/blue.png";
import pink from "../img/karts/pink.png";
import green from "../img/karts/green.png";
import waluigi from "../img/karts/waluigi.png";
import bullet from "../img/karts/bullet.png";

function Kart({ kart }) {
  let images = { train, blue, pink, green, waluigi, bullet };
  return (
    <img src={images[kart]} alt={kart} className="kart-icon"/>
  );
}

export default Kart;