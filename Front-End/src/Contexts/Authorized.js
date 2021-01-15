import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthorizedContext = createContext();

export const AuthorizedProvider = (props) => {
  const [authorized, setAuthorized] = useState(false);
  const [popup, setPopup] = useState(false);

  const logIn = async function (email, password) {
    try {
      await axios
        .post("http://127.0.0.1:4000/api/v1/user/login", {
          email: email.toLowerCase(),
          password: password,
        })
        .then((response) => {
          localStorage.setItem("token", response.headers.token);
          setPopup(false);
          setAuthorized(true);
        });
    } catch (err) {}
  };

  const testUser = () => {
    logIn("test@test.com", "Password123");
  };

  const register = async function (email, password, passwordConfirm) {
    try {
      await axios
        .post("http://127.0.0.1:4000/api/v1/user/register", {
          email: email,
          password: password,
          passwordConfirm: passwordConfirm,
        })
        .then((response) => {
          localStorage.setItem("token", response.headers.token);
          setPopup(false);
          setAuthorized(true);
        });
    } catch (err) {}
  };

  return (
    <AuthorizedContext.Provider
      value={{
        authorized,
        setAuthorized,
        popup,
        setPopup,
        logIn,
        register,
        testUser,
      }}
    >
      {props.children}
    </AuthorizedContext.Provider>
  );
};
