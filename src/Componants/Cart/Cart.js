import React, { useContext, useEffect } from "react";
import classes from "./Cart.module.css";
import { StoreContext } from "../../Contexts/store";

const Cart = () => {
  const [allProducts, , , cart, setCart, total, setTotal] = useContext(
    StoreContext
  );

  const handleClick = (event) => {
    const targetID = parseInt(event.target.parentElement.parentElement.id);
    const action = event.target.id;
    const newCart = [...cart];

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === targetID) {
        if (action === "increase") {
          newCart[i].quantity += 1;
        } else {
          if (newCart[i].quantity === 1) return;
          newCart[i].quantity -= 1;
        }
      }
    }

    setCart(newCart);
  };

  let newTotal = 0;
  const extractItem = (item) => {
    for (const product in allProducts) {
      if (allProducts[product].id === item.id) {
        newTotal +=
          parseInt(item.quantity) * parseInt(allProducts[product].Price);
        return (
          <div className={classes.ItemContainer} key={item.id} id={item.id}>
            <img className={classes.Img} alt="" />
            <div className={classes.Name}>{allProducts[product].Name}</div>
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
            </div>
            <div className={classes.Cost}>
              £{parseInt(item.quantity) * parseInt(allProducts[product].Price)}
            </div>
          </div>
        );
      }
    }
  };

  useEffect(() => {
    setTotal(newTotal);
  });

  const renderItems = cart.map((item) => {
    return extractItem(item);
  });

  return (
    <div className={classes.Container}>
      <h4>Your Cart</h4>
      <ul className={classes.Header}>
        <li className={classes.ImgHeader}></li>
        <li className={classes.ItemHeader}>Item</li>
        <li className={classes.QuantityHeader}>Quantity</li>
        <li className={classes.TotalHeader}>Total</li>
      </ul>
      <div className={classes.ItemsContainer}>{renderItems}</div>
      <div className={classes.Total}>£{total}</div>
    </div>
  );
};

export default Cart;
