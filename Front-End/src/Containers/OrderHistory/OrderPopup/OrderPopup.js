import React, { Fragment, useContext } from "react";
import classes from "./OrderPopup.module.css";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import { StoreContext } from "../../../Contexts/store";
import uniqid from "uniqid";

const OrderPopup = (props) => {
  const store = useContext(StoreContext);
  const data = props.data;

  const items = data.items.map((item) => {
    return (
      <li className={classes.Item} key={uniqid.time()}>
        <div style={{ width: "10%" }}>{item.quantity}</div>
        <img src={store.allProducts[item.id].image} alt="Item" />
        <div>{store.allProducts[item.id].description}</div>
        <div style={{ width: "10%" }}>
          £{store.allProducts[item.id].price * item.quantity}
        </div>
      </li>
    );
  });
  return (
    <Fragment>
      <Backdrop closeBackdrop={props.closeBackdrop} />
      <div className={classes.PopUp}>
        <ul className={classes.Items}>{data ? items : null}</ul>
        <div className={classes.Total}>£{data.total}</div>
      </div>
    </Fragment>
  );
};

export default OrderPopup;
