import React, { useContext, useEffect } from "react";
import classes from "./Cart.module.css";
import { StoreContext } from "../../Contexts/store";
import { Link } from "react-router-dom";

const Cart = () => {
  const store = useContext(StoreContext);

  // This function first copies all the contents of the cart.
  // It then iterates through to see which item was clicked on
  // It then performs the selected action.
  const handleClick = (event) => {
    const targetID = parseInt(event.target.parentElement.parentElement.id);
    const action = event.target.id;
    const newCart = [...store.cart];

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === targetID) {
        if (action === "increase") {
          newCart[i].quantity += 1;
        } else if (action === "decrease") {
          if (newCart[i].quantity === 1) return;
          newCart[i].quantity -= 1;
        } else if (action === "remove") {
          newCart.splice(i, 1);
        }
      }
    }

    store.setCart(newCart);
  };

  let newTotal = 0;
  // This makes an item for each item in cart
  // using the id, it compares the current item against all the possible products
  // And return a div containing all the needed information.
  const extractItem = (item) => {
    for (const product in store.allProducts) {
      if (store.allProducts[product].id === item.id) {
        newTotal +=
          parseInt(item.quantity) * parseInt(store.allProducts[product].price);
        return (
          <div className={classes.ItemContainer} key={item.id} id={item.id}>
            <img
              className={classes.Img}
              alt=""
              src={store.allProducts[product].image}
            />
            <div className={classes.Name}>
              {store.allProducts[product].name}
            </div>
            <div className={classes.Quantity}>
              <button
                id="decrease"
                className={classes.Decrease}
                onClick={handleClick}
              >
                -
              </button>
              {item.quantity}
              <button
                id="increase"
                className={classes.Increase}
                onClick={handleClick}
              >
                +
              </button>
              <ion-icon
                name="trash-outline"
                id="remove"
                onClick={handleClick}
              ></ion-icon>
            </div>
            <div className={classes.Cost}>
              £
              {parseInt(item.quantity) *
                parseInt(store.allProducts[product].price)}
            </div>
          </div>
        );
      }
    }
  };

  useEffect(() => {
    store.setTotal(newTotal);
  });

  // This returns an array of items in the store and this is what gets rendered.
  const renderItems = store.cart.map((item) => {
    return extractItem(item);
  });

  // Routing below to prevent user going to checkout with an empty basket
  return (
    <div className={classes.Container}>
      <div className={classes.ItemsContainer}>{renderItems}</div>
      <div className={classes.Total}>£{store.total}</div>
      <Link
        to={store.cart.length !== 0 ? "/cart/checkout" : "/cart"}
        className={classes.Checkout}
      >
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
