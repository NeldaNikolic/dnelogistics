import classes from "./Email.module.css";
import React from "react";
import SignUpForm from "../email/SignUpForm";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function Email(props) {
  return props.Trigger ? (
    <div id="Email" className={classes.emailMainDiv}>
      <h1 className={classes.emailHone}>Email</h1>
      {props.children}
      <MuiThemeProvider>
        <SignUpForm />
      </MuiThemeProvider>

      <button
        className={classes.buttonEmail}
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

export default Email;
