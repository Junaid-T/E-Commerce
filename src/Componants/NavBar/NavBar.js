import React from "react";
import classes from "./NavBar.module.css";

const navBar = () => {
  return (
    <div className={classes.Navigation}>
      <img alt="LOGO_TEMP" className={classes.Logo} />
      <ul className={classes.LinkContainer}>
        <li>PRODUCTS</li>
        <li>BASKET</li>
        <li>CONTACT US</li>
        <li>Log IN/OUT</li>
      </ul>
      <div className={classes.SearchTEMP}>SEARCH BAR</div>
    </div>
  );
};

export default navBar;
