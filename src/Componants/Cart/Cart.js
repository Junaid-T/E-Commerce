import React, { useContext, useEffect } from "react";
import classes from "./Cart.module.css";
import { StoreContext } from "../../Contexts/store";

const Cart = () => {
  const [allProducts, , , cart, setCart, total, setTotal] = useContext(
    StoreContext
  );
  let newTotal = 0;
  const extractItem = (item) => {
    for (const product in allProducts) {
      if (allProducts[product].id === item.id) {
        newTotal +=
          parseInt(item.quantity) * parseInt(allProducts[product].Price);
        return (
          <div className={classes.ItemContainer} key={item.id}>
            <img className={classes.Img} alt="" />
            <div className={classes.Name}>{allProducts[product].Name}</div>
            <div className={classes.Quantity}>{item.quantity}</div>
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
  }, [cart]);

  const renderItems = cart.map((item) => {
    return extractItem(item);
  });
  //console.log(renderItems);

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

// for in loop
// for properties in allproducts
// if properties.id === id of item
// return JSX
