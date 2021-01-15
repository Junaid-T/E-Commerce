import React, { useState, useContext } from "react";
import classes from "./RegisterForm.module.css";
import { AuthorizedContext } from "../../../../Contexts/Authorized";

const RegisterForm = () => {
  const auth = useContext(AuthorizedContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    auth.register(email, password, passwordConfirm);
  };

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else {
      setPasswordConfirm(e.target.value);
    }
  };

  return (
    <form className={classes.Form} onSubmit={handleClick}>
      Sign Up
      <input
        id="email"
        className={classes.Email}
        placeholder="Email"
        type="email"
        required
        onChange={handleChange}
      ></input>
      <input
        id="password"
        type="password"
        className={classes.Password}
        placeholder="Password"
        required
        onChange={handleChange}
      ></input>
      <input
        id="passwordConfirm"
        type="password"
        className={classes.Password}
        placeholder="Repeat Password"
        required
        onChange={handleChange}
      ></input>
      <button id="submit" className={classes.Submit}>
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
