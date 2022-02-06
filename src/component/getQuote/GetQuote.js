import classes from "./GetQuote.module.css";
import React from "react";

function GetQuote(props) {
  return props.Trigger ? (
    <div className={classes.GetQuoteMainDiv}>
      <h1 id="contacts" className={classes.GetQuoteHone}>
        Get a Quote
      </h1>
      {props.children}

      <button
        className={classes.buttonGetQuote}
        onClick={() => props.setTrigger(false)}
      >
        close
      </button>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default GetQuote;
