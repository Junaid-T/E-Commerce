import React, { useContext, useEffect } from "react";
import classes from "./Checkout.module.css";
import { StoreContext } from "../../Contexts/store";
import { AuthorizedContext } from "../../Contexts/Authorized";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [authorized] = useContext(AuthorizedContext);
  const [, , , cart, setCart, total, setTotal] = useContext(StoreContext);

  const nextForm = (e) => {
    e.preventDefault();
    document.getElementById("Form").style.transform = "translateX(-100%)";
  };

  const prevForm = (e) => {
    e.preventDefault();
    document.getElementById("Form").style.transform = "translateX(0)";
  };

  const confirmOrder = (e) => {
    e.preventDefault();
  };

  const form1 = (
    <form className={classes.Form} id="Form">
      <h3>Shipping Details</h3>
      <div id="Form1" className={classes.Form1}>
        <div className={classes.InputContainer}>
          <label for="firstname">First Name</label>
          <input required id="firstname"></input>
        </div>
        <div className={classes.InputContainer}>
          <label for="lastname">Last Name</label>
          <input required id="lastname"></input>
        </div>
        <div className={classes.InputContainer}>
          <label for="address">Address</label>
          <input required id="address"></input>
        </div>
        <div className={classes.InputContainer}>
          <label for="city">City</label>
          <input required></input>
        </div>
        <div className={classes.InputContainer}>
          <label for="city">Country</label>
          <input required id="country"></input>
        </div>
        <div className={classes.InputContainer}>
          <label for="postcode">Postcode</label>
          <input required id="postCode"></input>
        </div>
      </div>
      <div className={classes.ButtonContainer}>
        <Link to="/cart">
          <button className={classes.ButtonBack} type="button" onClick="">
            Back to Cart
          </button>
        </Link>
        <button className={classes.ButtonNext} type="button" onClick={nextForm}>
          Next
        </button>
      </div>

      <div id="Form2Container" className={classes.Form2Container}>
        <h3>Cardholder Details</h3>
        <div id="Form2" className={classes.Form2}>
          <div className={classes.InputContainer}>
            <label for="cardholder">Cardholder Name</label>
            <input required id="cardholder"></input>
          </div>
          <div className={classes.InputContainer}>
            <label for="cardNumber">Card Number</label>
            <input required id="cardNumber"></input>
          </div>
          <div className={classes.InputContainer}>
            <label for="expiryDate">Expiry Date</label>
            <input required id="expiryDate"></input>
          </div>
          <div className={classes.InputContainer}>
            <label for="CVV">CVV</label>
            <input required id="CVV"></input>
          </div>
        </div>
        <div className={classes.ButtonContainer}>
          <button
            className={classes.ButtonBack}
            type="button"
            onClick={prevForm}
          >
            Back
          </button>
          <button
            className={classes.ButtonNext}
            type="submit"
            onClick={confirmOrder}
          >
            Pay £{total}
          </button>
        </div>
      </div>
    </form>
  );

  return <div className={classes.Container}>{form1}</div>;
};

export default Checkout;
