import classes from "./Home.module.css";
import code from "./../../img/img2.jpg";
import Button from "../button/Button";
import { ImTruck } from "react-icons/im";
import { AiOutlineGlobal } from "react-icons/ai";
import { GiFlamingArrow } from "react-icons/gi";
const Home = () => {
  return (
    <div className={classes.homepage}>
      <div>
        <div className={classes.imgone}>
          <img className={classes.code} src={code} alt="code"></img>
        </div>
        <GiFlamingArrow className={classes.icononetree} />
        <div className={classes.homepageul}>
          <h1 className={classes.homepageh1}>
            Welcome to DNE logistics
            <ImTruck className={classes.icononetwo} />
          </h1>
          <div className={classes.homeDivMainDiscription}>
            Brokers can furnish market research and market data. Brokers may
            represent either the seller or the buyer but generally not both at
            the same time. Brokers are expected to have the tools and resources
            to reach the largest possible base of buyers and sellers. They then
            screen these potential buyers or sellers for the perfect match. An
            individual producer, on the other hand, especially one new in the
            market, probably will not have the same access to customers as a
            broker. Another benefit of using a broker is cost—they might be
            cheaper in smaller markets, with smaller accounts, or with a limited
            line of products. Some brokers, known as discount brokers, charge
            smaller commission, sometimes in exchange for offering less advice
            or services than full service brokerage firms.
          </div>
          <AiOutlineGlobal className={classes.iconone} />
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Home;
