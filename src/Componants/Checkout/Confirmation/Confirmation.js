import classes from "./Confirmation.module.css";
import React from "react";
import uniqid from "uniqid";
import { Link, useHistory } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className={classes.Container}>
      <h3>Order Confirmation</h3>
      <p>Your order will be with you shortly</p>
      <p>Order ID - {uniqid.time()}</p>
      <Link to="/" className={classes.Continue}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default Confirmation;
