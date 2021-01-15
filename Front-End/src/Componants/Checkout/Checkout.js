import React, { useContext, useState } from "react";
import classes from "./Checkout.module.css";
import { StoreContext } from "../../Contexts/store";
import { AuthorizedContext } from "../../Contexts/Authorized";
import { Link, Redirect } from "react-router-dom";
import Confirmation from "./Confirmation/Confirmation";
import axios from "axios";

const Checkout = (props) => {
  const store = useContext(StoreContext);
  const auth = useContext(AuthorizedContext);
  const [confirmed, setConfirmed] = useState(false);

  // Button for checkout form to change page
  const nextForm = (e) => {
    e.preventDefault();
    document.getElementById("Form").style.transform = "translateX(-100%)";
  };

  // Button for checkout form to change page
  const prevForm = (e) => {
    e.preventDefault();
    document.getElementById("Form").style.transform = "translateX(0)";
  };

  const submitOrder = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: { token: token },
    };
    const response = await axios.post(
      "http://127.0.0.1:4000/api/v1/order",
      {
        total: parseInt(store.total),
        items: store.cart,
      },
      headers
    );
    return response;
  };

  // Button for checkout form
  // This one resets the values in the store and send the order to the database
  const confirmOrder = (e) => {
    e.preventDefault();
    submitOrder()
      .then((res) => {
        setConfirmed(res.data.data);
        store.setCart([]);
        store.setTotal(0);
      })
      .catch((err) => alert("Something went wrong, please try again"));
  };

  // 1 Form split into 2 containers and place side by side
  // This allows me to smooth scroll from one page to another
  const form = (
    <form className={classes.Form} id="Form">
      <h3>Shipping Details</h3>
      <div id="Form1" className={classes.Form1}>
        <div className={classes.InputContainer}>
          <label htmlFor="firstname">First Name</label>
          <input required id="firstname"></input>
        </div>
        <div className={classes.InputContainer}>
          <label htmlFor="lastname">Last Name</label>
          <input required id="lastname"></input>
        </div>
        <div className={classes.InputContainer}>
          <label htmlFor="address">Address</label>
          <input required id="address"></input>
        </div>
        <div className={classes.InputContainer}>
          <label htmlFor="city">City</label>
          <input required></input>
        </div>
        <div className={classes.InputContainer}>
          <label htmlFor="city">Country</label>
          <input required id="country"></input>
        </div>
        <div className={classes.InputContainer}>
          <label htmlFor="postcode">Postcode</label>
          <input required id="postCode"></input>
        </div>
      </div>
      <div className={classes.ButtonContainer}>
        <Link to="/cart">
          <button className={classes.ButtonBack} type="button">
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
            <label htmlFor="cardholder">Cardholder Name</label>
            <input required id="cardholder"></input>
          </div>
          <div className={classes.InputContainer}>
            <label htmlFor="cardNumber">Card Number</label>
            <input required id="cardNumber"></input>
          </div>
          <div className={classes.InputContainer}>
            <label htmlFor="expiryDate">Expiry Date</label>
            <input required id="expiryDate"></input>
          </div>
          <div className={classes.InputContainer}>
            <label htmlFor="CVV">CVV</label>
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
            Pay £{store.total}
          </button>
        </div>
      </div>
    </form>
  );

  // Condtional rendering for confirmation message
  // Routing so that going back does to the main page and not to checkout form.
  return (
    <div className={classes.Container}>
      {confirmed ? (
        <Confirmation orderNum={confirmed} />
      ) : !store.cart.length > 0 ? (
        <Redirect to="/" />
      ) : (
        form
      )}
    </div>
  );
};

export default Checkout;
