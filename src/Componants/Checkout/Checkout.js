import React, { useContext, useEffect } from "react";
import classes from "./Checkout.module.css";
import { StoreContext } from "../../Contexts/store";
import { AuthorizedContext } from "../../Contexts/Authorized";

const Checkout = () => {
  const [authorized] = useContext(AuthorizedContext);
  const [, , , cart, setCart, total, setTotal] = useContext(StoreContext);

  const nextForm = (e) => {
    e.preventDefault();
    document.getElementById("Form1").style.transform = "translateX(-100%)";
    document.getElementById("Form2").style.transform = "translateX(-100%)";
  };

  const prevForm = (e) => {
    e.preventDefault();
    document.getElementById("Form1").style.transform = "translateX(0)";
    document.getElementById("Form2").style.transform = "translateX(0)";
  };

  const confirmOrder = (e) => {
    e.preventDefault();
  };

  const form1 = (
    <form className={classes.Form}>
      <div id="Form1" className={classes.Form1}>
        <h3>Delivery Details</h3>
        <input required id="address" placeholder="Address"></input>
        <input required placeholder="City"></input>
        <input required placeholder="Country"></input>
        <input required placeholder="PostCode"></input>
        <button type="button" onClick={nextForm}>
          Next
        </button>
      </div>

      <div id="Form2" className={classes.Form2}>
        <h3>Cardholder Details</h3>
        <input required placeholder="Cardholder Name"></input>
        <input required placeholder="Card Number"></input>
        <input required placeholder="Expiry Date"></input>
        <input required placeholder="CVV"></input>
        <div className={classes.ButtonContainer}>
          <button type="button" onClick={prevForm}>
            Back
          </button>
          <button type="submit" onClick={confirmOrder}>
            Order
          </button>
        </div>
      </div>
    </form>
  );

  return <div className={classes.Container}>{form1}</div>;
};

export default Checkout;
