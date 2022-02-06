import classes from "./Icon.module.css";
import { FaEnvelopeOpen, FaHome } from "react-icons/fa";
import { ImTruck } from "react-icons/im";
import { BsFillPhoneFill } from "react-icons/bs";

const Icon = () => {
  return (
    <>
      <div className={classes.Galleriadiv}>
        <a className={classes.faicon} href="#contact">
          <BsFillPhoneFill />
        </a>
        <a className={classes.faicon} href="/#contact">
          <FaEnvelopeOpen />
        </a>
        <a className={classes.faicon} href="/#viewPort">
          <ImTruck />
        </a>
        <a className={classes.faicon} href="/">
          <FaHome />
        </a>
      </div>
    </>
  );
};

export default Icon;
