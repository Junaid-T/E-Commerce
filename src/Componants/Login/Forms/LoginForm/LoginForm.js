import React from "react";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form className={classes.Form}>
      Login
      <input
        className={classes.Username}
        placeholder="Username"
        required
        type="text"
      ></input>
      <input
        type="password"
        className={classes.Password}
        placeholder="Password"
        required
      ></input>
      <button className={classes.Submit}>Log In</button>
    </form>
  );
};

export default LoginForm;
