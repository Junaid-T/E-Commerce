import React, { useEffect, useContext, useState } from "react";
import classes from "./OrderHistory.module.css";
import { AuthorizedContext } from "../../Contexts/Authorized";
import axios from "axios";
import OrderPopup from "./OrderPopup/OrderPopup";

const OrderHistory = () => {
  const auth = useContext(AuthorizedContext);
  const [orders, setOrders] = useState(null);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const orderhistory = async function () {
      try {
        const response = await axios.get(
          "http://127.0.0.1:4000/api/v1/order/orderhistory",
          {
            headers: {
              token: token,
            },
          }
        );
        return response;
      } catch (err) {
        throw new Error();
      }
    };

    orderhistory()
      .then((response) => setOrders(response.data.data))
      .catch((err) => setOrders("ServerError"));
  }, []);

  if (orders === "ServerError") {
    return <h1>Could not find order history, please try again later</h1>;
  }
  const formatDate = (date) => {
    let newDate = date.slice(0, 10);
    newDate = newDate.slice(8, 10) + newDate.slice(4, 8) + newDate.slice(0, 4);
    return newDate;
  };

  let content = null;
  if (orders) {
    content = orders.map((order) => {
      return (
        <li
          key={order._id}
          className={classes.OrderContainer}
          onClick={() => setPopup(order)}
        >
          <p style={{ width: "60%" }}> {order._id}</p>
          <p style={{ width: "20%" }}> {formatDate(order.created_on)}</p>
          <p style={{ width: "20%" }}>£{order.total}</p>
        </li>
      );
    });
  }

  return (
    <ul className={classes.Container}>
      {content}
      {popup ? (
        <OrderPopup data={popup} closeBackdrop={() => setPopup(false)} />
      ) : null}
    </ul>
  );
};

export default OrderHistory;
