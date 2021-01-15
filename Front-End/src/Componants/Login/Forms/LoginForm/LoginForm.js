import React, { useContext, useState } from "react";
import classes from "./LoginForm.module.css";
import { AuthorizedContext } from "../../../../Contexts/Authorized";

const LoginForm = () => {
  const auth = useContext(AuthorizedContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [err, setErr] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    auth.logIn(email, password);
    setErr(true);
  };

  const handleChange = (e) => {
    if (e.target.type === "text") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <form className={classes.Form} onSubmit={handleClick}>
      Login
      <input
        className={classes.Email}
        placeholder="Email"
        required
        type="text"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        className={classes.Password}
        placeholder="Password"
        required
        onChange={handleChange}
      ></input>
      <p className={err ? classes.errMessage : classes.errMessageHidden}>
        Invalid email or password
      </p>
      <button className={classes.Submit}>Log In</button>
    </form>
  );
};

export default LoginForm;
