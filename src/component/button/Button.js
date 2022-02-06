import classes from "./Button.module.css";
import Email from "../email/Email";
import GetQuote from "../getQuote/GetQuote";
import { useState } from "react";

function Button() {
  const [buttonPopup, setEmail] = useState(false);
  const [buttonPopuptwo, setGetQuote] = useState(false);

  return (
    <div>
      <a href="/#About">
        <button className={classes.buttonone} onClick={() => setGetQuote(true)}>
          Get a quote
        </button>
      </a>

      <button className={classes.buttonthree} onClick={() => setGetQuote(true)}>
        Email
      </button>

      <Email Trigger={buttonPopup} setTrigger={setEmail} />
      <GetQuote Trigger={buttonPopuptwo} setTrigger={setGetQuote} />
    </div>
  );
}

export default Button;
