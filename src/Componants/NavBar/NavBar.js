import React from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <div className={classes.Navigation}>
      <img alt="LOGO_TEMP" className={classes.Logo} />
      <ul className={classes.LinkContainer}>
        <Link to="/" className={classes.Link}>
          <li>PRODUCTS</li>
        </Link>
        <Link to="/cart" className={classes.Link}>
          <li>Cart</li>
        </Link>
        <Link className={classes.Link}>
          <li>CONTACT US</li>
        </Link>
        <li>Log IN/OUT</li>
      </ul>
      <div className={classes.SearchTEMP}>SEARCH BAR</div>
    </div>
  );
};

export default navBar;
