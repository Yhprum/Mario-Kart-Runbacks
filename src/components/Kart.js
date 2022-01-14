import React from "react";
import train from "../img/karts/train.png";
import blue from "../img/karts/blue.png";
import pink from "../img/karts/pink.png";
import green from "../img/karts/green.png";
import waluigi from "../img/karts/waluigi.png";
import bullet from "../img/karts/bullet.png";
import daisy from "../img/karts/daisy.png";
import boo from "../img/karts/boo.png";
import luigi from "../img/karts/luigi.png";
import mario from "../img/karts/mario.png";
import peach from "../img/karts/peach.png";

function Kart({ kart }) {
  let images = { train, blue, pink, green, waluigi, bullet, daisy, boo, luigi, mario, peach };
  return (
    <img src={images[kart]} alt={kart} className="kart-icon"/>
  );
}

export default Kart;