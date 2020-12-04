import React from "react";
import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  ///////////////////////////////////////////////////////////
  return (
    <form className={classes.Form}>
      Sign Up
      <input
        id="username"
        className={classes.Username}
        placeholder="Username"
        type="text"
        required
      ></input>
      <input
        id="email"
        className={classes.Email}
        placeholder="Email"
        type="email"
        required
      ></input>
      <input
        id="password1"
        type="password"
        className={classes.Password}
        placeholder="Password"
        required
      ></input>
      <input
        id="password2"
        type="password"
        className={classes.Password}
        placeholder="Repeat Password"
        required
      ></input>
      <button id="submit" className={classes.Submit}>
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
