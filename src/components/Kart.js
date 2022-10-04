import BarrelTrain from "../img/karts/train.png";
import ToadKart from "../img/karts/blue.png";
import ToadetteKart from "../img/karts/pink.png";
import KoopaDasher from "../img/karts/green.png";
import WaluigiRacer from "../img/karts/waluigi.png";
import BulletBlaster from "../img/karts/bullet.png";
import BloomCoach from "../img/karts/daisy.png";
import BooPipes from "../img/karts/boo.png";
import GreenFire from "../img/karts/luigi.png";
import RedFire from "../img/karts/mario.png";
import HeartCoach from "../img/karts/peach.png";
import PiranhaPipes from "../img/karts/petey.png";
import KoopaKing from "../img/karts/bowser.png";
import ParadeKart from "../img/karts/parade.png";
import WarioCar from "../img/karts/wario.png";
import DKJumbo from "../img/karts/dk.png";
import TurboBirdo from "../img/karts/birdo.png";
import TurboYoshi from "../img/karts/yoshi.png";
import RattleBuggy from "../img/karts/RattleBuggy.png";
import GooGooBuggy from "../img/karts/GooGooBuggy.png";
import ParaWing from "../img/karts/ParaWing.png";

function Kart({ kart }) {
  let images = {
    BarrelTrain,
    ToadKart,
    ToadetteKart,
    KoopaDasher,
    WaluigiRacer,
    BulletBlaster,
    BloomCoach,
    BooPipes,
    GreenFire,
    RedFire,
    HeartCoach,
    PiranhaPipes,
    KoopaKing,
    ParadeKart,
    WarioCar,
    DKJumbo,
    TurboBirdo,
    TurboYoshi,
    RattleBuggy,
    GooGooBuggy,
    ParaWing,
  };
  return <img src={images[kart.replace(/[^\w]/g, "")]} alt={kart} className="kart-icon" />;
}

export default Kart;
